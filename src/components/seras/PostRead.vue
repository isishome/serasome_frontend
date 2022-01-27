<template>
  <div>
    <input ref="postRead" type="hidden" :value="value" @click="readClick" />
    <q-dialog v-model="postView" :maximized="$q.screen.lt.lg" full-height transition-show="show" transition-hide="hide"
      @before-show="clearPostInfo" @before-hide="back" :seamless="$q.screen.lt.lg">
      <q-card v-if="postInfo" :class="['column no-scroll no-padding font-ss', $q.screen.lt.lg ? '' : 'post-width']">
        <transition name="fade">
          <q-btn class="gt-sm" v-if="showTop" style="z-index: 1;"
            :style="`position:fixed;bottom:0;margin-bottom:30px;margin-left:${$q.screen.lt.lg ? '10px' : '-50px'};`"
            round size="14px" icon="keyboard_arrow_up" color="teal-4" @click="scrollTop" />
        </transition>
        <q-card-section class="col-md-1 full-width row justify-between items-start overflow-hidden gt-sm">
          <div class="col font-title q-pa-sm">
            {{postInfo.title}}</div>
          <div class="col-1 text-right">
            <q-btn flat round v-close-popup size="sm" icon="close" />
          </div>
        </q-card-section>
        <q-card-section class="full-width q-py-sm overflow-hidden gt-sm">
          <q-list class="q-py-none q-px-md">
            <q-item dense class="no-padding row items-center">
              <q-item-section top avatar class="comment-avatar">
                <q-avatar color="primary" text-color="white">
                  {{postInfo.name.substring(0,1)}}
                </q-avatar>
              </q-item-section>
              <q-item-section top>
                <q-item-label>
                  {{postInfo.name}}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item dense class="no-padding absolute-bottom q-mr-md row justify-end items-center q-gutter-x-xs">
              <q-icon class="q-px-none" size="14px" name="far fa-clock" />
              <div class="text-caption">{{parsDateTime(postInfo.reg_date)}}</div>
              <div class="text-grey-5">·</div>
              <q-icon class="q-px-none" size="14px" name="far fa-eye" />
              <div class="text-caption">{{postInfo.seq}}</div>
              <div class="text-grey-5">·</div>
              <q-icon class="q-px-none" size="14px" name="far fa-comment-dots" />
              <div class="text-caption">{{postInfo.comment}}</div>
            </q-item>
          </q-list>
        </q-card-section>
        <q-separator />
        <q-card-section class="col full-width no-padding">
          <q-scroll-area ref="scrollArea" :thumb-style="thumbStyle" class="fit" @scroll="onScroll">
            <div class="q-pa-md font-title lt-md">
              {{postInfo.title}}</div>
            <q-list class="q-py-none q-px-md lt-md">
              <q-item dense class="no-padding row items-center">
                <q-item-section top avatar class="comment-avatar">
                  <q-avatar :size="$q.screen.lt.md ? 'md': 'md'" color="primary" text-color="white">
                    {{postInfo.name.substring(0,1)}}
                  </q-avatar>
                </q-item-section>
                <q-item-section top>
                  <q-item-label>
                    {{postInfo.name}}
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense class="q-mr-xs row justify-end items-center q-gutter-x-xs">
                <q-icon class="q-px-none" size="14px" name="far fa-clock" />
                <div class="text-caption">{{parsDateTime(postInfo.reg_date)}}</div>
                <div class="text-grey-5">·</div>
                <q-icon class="q-px-none" size="14px" name="far fa-eye" />
                <div class="text-caption">{{postInfo.seq}}</div>
                <div class="text-grey-5">·</div>
                <q-icon class="q-px-none" size="14px" name="far fa-comment-dots" />
                <div class="text-caption">{{postInfo.comment}}</div>
              </q-item>
            </q-list>
            <q-separator class="lt-md" />
            <div class="q-py-xs">
              <adsense v-if="$q.platform.is.mobile === true && isProduction === true"
                data-ad-client="ca-pub-5110777286519562" data-ad-slot="5160898238" width="300px" height="50px"
                :key="`acm-${key}`">
              </adsense>
              <adsense v-if="$q.platform.is.desktop === true && isProduction === true"
                data-ad-client="ca-pub-5110777286519562" data-ad-slot="5160898238" width="728px" height="90px"
                :key="`acd-${key}`">
              </adsense>
            </div>
            <div style="min-height: 81vh;" class="q-pa-md">
              <div v-if="postInfo.youtube">
                <q-video :ratio="16/9" :src="`https://www.youtube.com/embed/${getYoutubeId(postInfo.youtube)}?rel=0`" />
              </div>
              <p ref="contents" class="word-wrap contents" v-html="contents"></p>
            </div>
            <div v-if="postInfo.files && postInfo.files.length > 0">
              <q-separator />
              <div ref="attach" class="attach-back row justify-start items-center">
                <div class="col-4 text-amber-7 text-left q-pl-md"><span
                    class="lt-md">{{$t('postRead.attachments')}}</span></div>
                <div class="col text-amber-7 text-center"><span class="gt-sm">{{$t('postRead.attachments')}}</span>
                </div>
                <div class="col-4 text-right q-pr-md">
                  <q-toggle v-model="showAttach" color="amber-7" icon-color="grey-7" icon="fas fa-paperclip" />
                </div>
              </div>
              <q-separator v-show="showAttach" />
              <q-slide-transition>
                <div v-show="showAttach" class="attach row justify-start">
                  <div class="q-pa-md" v-for="attach in postInfo.files" :key="attach.fid">
                    <q-btn-dropdown flat dense no-caps auto-close menu-self="bottom right">
                      <template v-slot:label>
                        <div class="col column no-padding" :style="$q.screen.lt.md ? 'max-width:10vw' : 'width:4vw'">
                          <q-icon :name="attach.icon" class="no-padding q-ma-sm col-6" size="20px" />
                          <div class="text-caption col-6 full-width ellipsis">
                            {{ attach.origin }}</div>
                        </div>
                        <q-tooltip content-class="gt-sm bg-purple" transition-show="scale" transition-hide="scale"
                          anchor="top middle" self="bottom middle" :offset="[10, 10]">
                          {{attach.origin}}
                        </q-tooltip>
                      </template>
                      <q-list separator bordered>
                        <q-item clickable @click="action('link', attach)">
                          <q-item-section>
                            <q-item-label>{{$t('postRead.copyLink')}}</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item clickable @click="action('download', attach)">
                          <q-item-section>
                            <q-item-label>{{$t('postRead.download')}}</q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item v-if="isPost && signStatus && postInfo.auth.modify" clickable
                          @click="deleteAttach(attach)">
                          <q-item-section>
                            <q-item-label>{{$t('postRead.delete')}}</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-btn-dropdown>
                  </div>
                </div>
              </q-slide-transition>
            </div>
            <ss-comment ref="comment" :value="commentList" :auth="postInfo.auth" @refresh="refresh" @get="onLoad"
              @delete="setDelete" @modify="setModify" @reply="setReply" />

            <ss-confirm v-model="deleteAttachConfirm" icon="delete" color="negative" text-color="white"
              :message="$t('postRead.message.deleteAttachments')" @cancel="deleteAttachConfirm = false"
              @confirm="action('delete')" />
            <div class="lt-md" style="height:16vh"></div>
          </q-scroll-area>
        </q-card-section>
        <q-separator class="gt-sm" />
        <q-card-section class="gt-sm no-padding">
          <div class="fit q-px-sm row justify-between items-center q-gutter-x-xs">
            <div class="row no-padding q-gutter-x-md">
              <q-btn v-if="postInfo.files && postInfo.files.length > 0" size="sm" flat round icon="fas fa-paperclip"
                @click="goAttach" />
              <q-btn size="sm" flat round icon="far fa-comment-dots" @click="goComment" />
            </div>
            <div class="row justify-start q-gutter-x-md">
              <q-btn v-if="isPost && signStatus && postInfo.auth.del" size="sm" round flat icon="delete"
                @click="postDeleteConfirm = !postDeleteConfirm" />
              <q-btn v-if="isPost && signStatus && postInfo.auth.modify" size="sm" round flat icon="edit"
                @click="postModify" />
              <q-btn v-if="!isPost" size="sm" round flat icon="far fa-arrow-alt-circle-right"
                @click="goSome(postInfo.sname)" />
            </div>
          </div>
        </q-card-section>
        <q-card-section class="lt-md q-pa-sm fixed-bottom btn-place no-pointer-events">
          <div class=" q-px-none row justify-between items-center q-col-gutter-x-xs">
            <div class="row justify-start q-gutter-x-sm">
              <transition name="fade">
                <q-btn push round class="all-pointer-events" v-if="showTop" color="teal-4" text-color="black"
                  @click="scrollTop" icon="keyboard_arrow_up" />
              </transition>
              <q-fab class="all-pointer-events" padding="9px" dense color="brown" push icon="keyboard_arrow_right"
                direction="right" active-icon="keyboard_arrow_left" size="sm">

                <q-fab-action glossy push padding="6px" v-if="postInfo.files && postInfo.files.length > 0"
                  color="amber-7" text-color="black" @click="goAttach" icon="fas fa-paperclip" />
                <q-fab-action glossy push padding="6px" color="blue-5" text-color="black" @click="goComment"
                  icon="far fa-comment-dots" />
                <q-fab-action glossy push padding="6px" v-if="isPost && signStatus && postInfo.auth.del"
                  color="deep-purple-3" text-color="black" @click="postDeleteConfirm = !postDeleteConfirm"
                  icon="delete" />
                <q-fab-action glossy push padding="6px" v-if="isPost && signStatus && postInfo.auth.modify"
                  color="pink-3" text-color="black" @click="postModify" icon="edit" />
                <q-fab-action glossy push padding="6px" v-if="!isPost" color="purple-3" text-color="black"
                  @click="goSome(postInfo.sname)" icon="far fa-arrow-alt-circle-right" />
              </q-fab>
            </div>
            <div>
              <q-btn push class="all-pointer-events" v-close-popup round color="red-5" size="md" icon="close" />
            </div>
            <div class="col-12 platform-ios-only ios">
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <ss-confirm v-model="postDeleteConfirm" icon="delete" color="negative" text-color="white"
      :message="$t('postRead.message.deletePost')" @cancel="postDeleteConfirm = false" @confirm="postDelete" />
    <q-dialog v-model="commentWrite" position="bottom" @before-hide="cancelComment" :maximized="$q.screen.lt.md">
      <q-card :class="['column no-scroll no-padding', $q.screen.lt.md ? '' : 'post-width']">
        <q-card-section class="q-my-md full-width no-padding">
          <q-form autofocus @submit="addComment" class="row justify-end items-center q-gutter-sm">
            <div class="col-9">
              <q-input outlined hide-hint dense no-error-icon hide-bottom-space type="textarea"
                v-model="commentContents" :label="$t('postRead.comment.valid')" maxlength="200"
                :rules="[val => val && val.length > 0 && val.length <= 200]" :disable="processComment" />
            </div>
            <div class="col-2">
              <q-btn dense flat round size="md" type="submit" icon="send" :loading="processComment" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <ss-confirm v-model="deleteCommentConfirm" icon="delete" color="negative" text-color="white"
      :message="$t('postRead.message.deleteComment')" @cancel="deleteCommentConfirm = false" @confirm="deleteComment" />
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  import {
    scroll,
    copyToClipboard
  } from 'quasar'
  import hljs from 'highlight.js'
  const Confirm = () => import(/* webpackChunkName: "seras-read" */ '@/components/seras/Confirm')
  const Comment = () => import(/* webpackChunkName: "seras-read" */ '@/components/seras/Comment')
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src
        entry.target.classList.remove('io-img')
        observer.unobserve(entry.target)
      }
    })
  })

  const co = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        hljs.highlightElement(entry.target)
        observer.unobserve(entry.target)
      }
    })
  })

  const {
    getScrollTarget,
    setScrollPosition
  } = scroll

  // takes an element object
  function scrollToElement(el) {
    const target = getScrollTarget(el)
    const offset = el.offsetTop
    const duration = 200
    setScrollPosition(target, offset, duration)
  }

  export default {
    name: 'ss-post-read',
    props: {
      sname: {
        type: String,
        defaut: null
      },
      value: {
        type: String,
        defaut: null
      },
      list: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    components: {
      'ss-confirm': Confirm,
      'ss-comment': Comment
    },
    data() {
      return {
        showTop: false,
        routeName: null,
        postView: false,
        isModify: false,
        postDeleteConfirm: false,
        isPost: false,
        commentList: [],
        point: null,
        order: -1,
        skip: 0,
        limit: 20,
        showAttach: false,
        cid: null,
        rCid: null,
        tCid: null,
        commentContents: '',
        commentWrite: false,
        deleteCommentConfirm: false,
        processComment: false,
        deleteAttachConfirm: false,
        fileInfo: null,
        postInfo: null,
        key: 0,
        isProduction: process.env.NODE_ENV === 'production'
      }
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus',
        noAD: 'getNoAD'
      }),
      contents() {
        return this.postInfo.contents ? this.postInfo.contents.replace(/<p><\/p>/gi, '<p><br><p>') : ''
      }
    },
    created() {
      this.initRead(this.value)
    },
    watch: {
      value: function (val) {
        this.initRead(val)
      }
    },
    methods: {
      ...mapActions({
        deleteItem: 'deleteItem',
        deleteFile: 'deleteFile',
        clearPostInfo: 'clearPostInfo',
        setPageScroller: 'setPageScroller'
      }),
      initRead(val) {
        if (!val)
          return

        document.body.style.overflow = 'hidden'
        this.setPageScroller(false)
        this.routeName = this.$route.name
        this.isModify = false
        this.isPost = this.routeName === 'some' || this.routeName === 'post' || this.routeName === 'post-add' || this
          .routeName === 'post-modify'

        window.onpopstate = () => {
          if (this.postView === true)
            this.postView = false
        }

        if (val && this.routeName !== 'post-add' && this.routeName !== 'post-modify')
          this.postRead()

        this.resetComment()
      },
      onScroll(info) {
        this.showTop = info.verticalPosition > 150
      },
      scrollTop() {
        this.$refs.scrollArea.setScrollPosition(0, 300)
      },
      action(actionName, fileInfo) {
        if (this.fileInfo !== null)
          fileInfo = this.fileInfo

        if (actionName === 'link' && fileInfo.type === 'data') {
          copyToClipboard(`${process.env.VUE_APP_BE_HOST}/api/file/download?pid=${this.value}&fid=${fileInfo.fid}`)
            .then(() => {
              this.$q.notify({
                type: 'positive',
                color: 'positive',
                message: this.$t('postRead.message.successCopyLink')
              })
            })
            .catch(() => {
              this.$q.notify({
                type: 'negative',
                color: 'negative',
                message: this.$t('postRead.message.failedCopyClipboard')
              })
            })
        } else if (actionName === 'link' && fileInfo.type === 'image') {
          copyToClipboard(`${process.env.VUE_APP_BE_HOST}/${fileInfo.clipboard}`)
            .then(() => {
              this.$q.notify({
                type: 'positive',
                color: 'positive',
                message: this.$t('postRead.message.successImageLink')
              })
            })
            .catch(() => {
              this.$q.notify({
                type: 'negative',
                color: 'negative',
                message: this.$t('postRead.message.failedCopyClipboard')
              })
            })
        } else {
          const self = this

          this.axios({
            method: 'get',
            url: `/file/${actionName}?pid=${this.value}&fid=${fileInfo.fid}`,
            responseType: actionName === 'download' ? 'blob' : 'text'
          })
            .then(function (response) {
              if (actionName === 'download') {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]))
                var fileLink = document.createElement('a')
                fileLink.href = fileURL;
                fileLink.setAttribute('download', fileInfo.origin)
                document.body.appendChild(fileLink)
                fileLink.click();
                document.body.removeChild(fileLink)
              } else if (actionName === 'delete') {
                self.$q.notify({
                  type: 'positive',
                  color: 'positive',
                  message: self.$t('postRead.message.successDelete')
                })
                self.deleteFile(fileInfo.fid)
                self.deleteAttachConfirm = false
                self.fileInfo = null
              }
            })
            .catch(() => { })
        }
      },
      deleteAttach(fileInfo) {
        this.fileInfo = fileInfo
        this.deleteAttachConfirm = true
      },
      readClick($evt) {
        $evt.target.value = null
        this.$emit('input', $evt.target.value)
      },
      parsDateTime(date) {
        const local = new Date(date)
        const yyyy = local.getFullYear()
        const mm = local.getMonth() + 1
        const dd = local.getDate()
        const h = local.getHours()
        const m = local.getMinutes()
        const s = local.getSeconds()
        return `${yyyy}-${mm > 9 ? mm : '0' + mm}-${dd > 9 ? dd : '0' + dd} ${h > 9 ? h : '0' + h}:${m > 9 ? m : '0' + m}:${s > 9 ? s : '0' + s}`
      },
      back() {
        this.showTop = false
        this.clearPostInfo()
        this.$refs.postRead.click()
        this.resetComment()
        this.setPageScroller(true)
        document.body.style.overflow = ''

        if (this.isModify === true)
          return

        this.$emit('done')
        if (this.$router.currentRoute.path !== window.location.pathname || this.$route.params.pid)
          history.back()
      },
      goSome(sname) {
        const tempSname = sname ? sname : this.sname
        this.$nextTick(() => {
          this.$router.replace({
            name: 'some',
            params: {
              'sname': sname ? sname : tempSname
            }
          }).catch(() => { })
        })
      },
      postRead() {
        if (!this.value || this.routeName === 'post-modify')
          return

        if (this.$route.params.pid)
          history.replaceState(null, null, `/@${this.sname}`)

        history.pushState(null, null, `/@${this.sname}/${this.value}`)
        this.$emit('reading')

        const self = this
        this.axios
          .get('/seras/post/cont', {
            params: {
              'pid': this.value
            }
          })
          .then(function (response) {
            if (response.data && response.data !== null) {
              self.intersactionImage(response.data)
              self.postInfo = response.data
              document.title = (self.$route.meta.title || process.env.VUE_APP_TITLE)
              document.title = document.title.concat(' - ', self.postInfo.title)
              self.postView = true
              self.$nextTick(() => {
                const images = self.$refs.contents.querySelectorAll('.io-img')
                images.forEach((el) => io.observe(el))
                const codes = self.$refs.contents.querySelectorAll('pre code')
                codes.forEach((el) => co.observe(el))
                self.$emit('done')
                self.key++
              })
            } else {
              self.$q.notify({
                type: 'warning',
                color: 'warning',
                message: self.$t('postRead.message.noExistsPost')
              })
              self.back()
            }
          })
          .catch(() => { })
          .then(() => { })
      },
      intersactionImage(info) {
        info.contents = info.contents.replace(/(<img[^>]+)(src)([^>]+>)/gmi, '$1 class="io-img" data-src$3')
      },
      show() {
        this.postView = true
      },
      postModify() {
        this.isModify = true
        const pid = this.value
        this.clearPostInfo()
        this.postView = false
        this.$nextTick(() => {
          this.$router.push({
            name: 'post-modify',
            params: {
              'sname': this.sname,
              'pid': pid
            }
          }).catch(() => { })
        })
      },
      postDelete() {
        const self = this

        this.axios
          .post('/seras/post/delete', {
            'sname': this.sname,
            'pid': this.value
          })
          .then(function (response) {
            if (response.data) {
              self.$q.notify({
                type: 'positive',
                color: 'positive',
                message: self.$t('postRead.message.successDeletePost')
              })
              self.postDeleteConfirm = false
              self.deleteItem(self.value)
              const sname = self.sname
              self.postView = false
              self.$nextTick(() => {
                self.goSome(sname)
              })
            }
          })
          .catch(() => { })
      },
      goAttach() {
        this.showAttach = true
        scrollToElement(this.$refs.attach)
      },
      goComment() {
        scrollToElement(this.$refs.comment.$el)
      },
      resetComment() {
        this.commentList = []
        this.skip = 0
      },
      refresh() {
        this.resetComment()
        this.$refs.comment.resume()
      },
      onLoad(index, done) {
        if (this.skip === 0) {
          const gmt = new Date()
          this.point = Date.UTC(gmt.getUTCFullYear(), gmt.getUTCMonth(), gmt.getUTCDate(), gmt.getUTCHours(), gmt
            .getUTCMinutes(), gmt.getUTCSeconds())
        }

        this.getCommentList(index, done)
      },
      getCommentList(index, done) {
        const self = this
        let stop = false
        const requestPid = this.value
        let tempComment = []

        if (!requestPid)
          return

        this.axios
          .get('/seras/comment/list', {
            params: {
              'pid': requestPid,
              'point': this.point,
              'order': this.order,
              'skip': this.skip,
              'limit': this.limit
            }
          })
          .then(function (response) {
            if (response.data.length === 0)
              stop = true
            else {
              self.skip = self.skip + response.data.length
              tempComment = response.data

            }
          })
          .catch(function () {
            stop = true
          })
          .then(function () {
            done(stop)
            self.commentList = self.commentList.concat(tempComment)
          })
      },
      addComment() {
        let self = this
        const requestPid = this.value
        const isModify = this.cid !== null
        const cType = isModify ? 'edit' : 'add'

        this.axios
          .post(`/seras/comment/${cType}`, {
            pid: requestPid,
            cid: isModify ? this.cid : null,
            rcid: this.rCid,
            tcid: this.tCid,
            contents: this.commentContents
          }).then(function (response) {
            if (isModify)
              self.mutationComment(cType, self.cid, self.rCid, response.data)
            else
              self.mutationComment(cType, response.data.cid, response.data.rcid, response.data)

            self.$nextTick(() => {
              self.$refs.comment.goComment(isModify ? self.cid : response.data.cid, isModify ? self.rCid :
                response.data.rcid)
            })

            self.cancelComment()
            self.processComment = false
            self.commentWrite = false

            self.$q.notify({
              type: 'positive',
              color: 'positive',
              message: isModify ? self.$t('postRead.message.successModifyComment') : self.$t('postRead.message.successAddComment')
            })
          })
          .catch(() => { })
      },
      cancelComment() {
        this.cid = null
        this.rCid = null
        this.tCid = null
        this.commentContents = ''
      },
      deleteComment() {
        const self = this

        if (!this.cid)
          return

        this.axios
          .post('/seras/comment/delete', {
            'cid': this.cid
          })
          .then(function (response) {
            if (response.data) {
              self.$q.notify({
                type: 'positive',
                color: 'positive',
                message: self.$t('postRead.message.successDeleteComment')
              })

              self.deleteCommentConfirm = false
              self.mutationComment('delete', self.cid, self.rCid, response.data)
              self.cancelComment()
            }
          })
          .catch(() => { })
      },
      setDelete(cid, rcid) {
        this.cid = cid
        this.rCid = rcid
        this.deleteCommentConfirm = true
      },
      setModify(cid, rcid) {
        this.cancelComment()

        if (cid) {
          const findItem = this.mutationComment(null, cid, rcid)
          if (findItem !== null) {
            this.cid = cid
            this.rCid = rcid
            this.commentContents = findItem.contents
          }
        }

        this.commentWrite = true
      },
      setReply(rcid, tcid) {
        this.rCid = rcid
        this.tCid = tcid
        this.commentWrite = true
      },
      mutationComment(ctype, cid, rcid, info) {
        let findItem = this.commentList.find(c => c.cid === (rcid ? rcid : cid))

        if (ctype !== 'add' && findItem !== null && rcid)
          findItem = findItem.replies.find(c => c.cid === cid)

        switch (ctype) {
          case 'add':
            if (findItem)
              findItem.replies.push(info)
            else
              this.commentList.unshift(info)

            break
          case 'delete':
            if (findItem) {
              findItem.rname = info.rname
              findItem.contents = info.contents
              findItem.self = false
              findItem.delete = true
            }
            break
          case 'edit':
            if (findItem)
              findItem.contents = info.contents
            break
        }

        return findItem
      }
    }
  }
</script>
<style scoped>
  .post-width {
    width: 50vw !important;
    max-width: none !important;
    min-width: 1260px;
  }

  .body--light .attach-back {
    background-color: #fcfcfc !important;
  }

  .body--dark .attach-back {
    background-color: #161e36 !important;
  }

  .btn-place .ios {
    padding-bottom: 4vh;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>