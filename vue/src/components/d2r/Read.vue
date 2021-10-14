<template>
  <div>
    <q-card v-if="data" class="read-card">
      <q-card-section class="row justify-between items-center text-weight-bold">
        <div>
          <q-chip class="lt-md" size="md" square :icon="secInfo.icon" color="transparent" text-color="grey-6">
            {{secInfo.label}}
          </q-chip>
        </div>
        <q-chip class="glossy" square size="sm" color="grey-4" text-color="black" icon="article">
          {{classifyName(sec, data.classify)}}
        </q-chip>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        <div style="word-break: break-all;" :class="$q.screen.gt.sm ? 'text-h5' : 'text-h6'">
          {{data.title}}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle2 text-title">
          <q-avatar rounded color="brown-10" text-color="white" class="q-mr-xs" size="30px">
            <q-img basic v-if="data.avatar" :src="data.avatar" :ratio="1">
              <template #error>
                <div class="bg-d2r absolute-center">
                  {{data.writer.substr(0,1)}}
                </div>
              </template>
            </q-img>
            <template v-else>{{data.writer.substr(0,1)}}</template>
          </q-avatar>
          {{data.writer}}
        </div>
        <div class="text-right text-subtitle2 row justify-end items-center q-gutter-x-md">
          <div class="row justify-end items-center">
            <q-icon name="visibility" class="q-mr-xs" />{{data.seq}}
          </div>
          <div class="row justify-end items-center">
            <q-icon name="schedule" class="q-mr-xs" />{{parsDateTime(data.upd_date)}}
          </div>
        </div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="read-contents">
        <div v-if="data && data.youtube">
          <q-video :ratio="16/9" :src="`https://www.youtube.com/embed/${getYoutubeId(data.youtube)}?rel=0`" />
        </div>
        <p v-if="data" ref="contents" class="word-wrap contents" v-html="viewContents">
        </p>
        <div class="row justify-center items-center" v-if="contLoaded && isProduction">
          <Adsense data-ad-client="ca-pub-5110777286519562" data-ad-slot="9230987257" data-ad-format="auto"
            ins-style="display:inline-block;min-width:320px;max-width:780px;height:250px;" :key="`t_${key}`">
          </Adsense>
        </div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-actions class="row justify-between">
        <div class="row justify-end q-gutter-x-sm">
          <q-btn v-if="authority(sec, 'delete') || data.owner === true" dense push class="bg-grey-5 text-grey-10"
            :disable="loading" :label="$t('btn.delete')" @click="showConfirm('delete')" />
          <q-btn
            v-if="(authority(sec, 'delete') || data.owner === true) && sec === 'trade' && data.classify !== 'notice'"
            dense push class="bg-grey-9 text-grey-4" :disable="loading" :label="$t('btn.finish')"
            @click="showConfirm('finish')" />
        </div>
        <div class="row justify-end q-gutter-x-sm">
          <q-btn v-if="authority(sec, 'delete') || data.owner === true" dense push class="bg-grey-5 text-grey-10"
            :disable="loading" :label="$t('btn.modify')"
            :to="`/d2r/bbs/${sec}/write/${pid}?page=${$route.query.page || 1}`" />
          <q-btn dense push class="bg-grey-9 text-grey-4" :disable="loading" :label="$t('btn.list')"
            :to="`/d2r/bbs/${sec}?page=${$route.query.page || 1}`" />
        </div>
      </q-card-actions>
      <q-card-section class="comments-wrap row justify-between items-center">
        <d2r-comments ref="comments" v-if="data.classify !== 'notice'" :loading="loading" :data="comments"
          :authority="authority(sec, 'comments')" :owner="data.owner" :all="pagination.all" @process="processComments"
          @all="getList" @refresh="refresh" />
      </q-card-section>
    </q-card>
    <d2r-confirm v-model="confirm.show" :icon="confirm.icon" :color="confirm.color" :text-color="confirm.textColor"
      :message="confirm.message" @cancel="cancelConfirm" @confirm="processConfirm" />
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  import { uid } from 'quasar'

  import hljs from 'highlight.js'

  export default {
    name: 'd2r-read',
    props: {
      sec: {
        type: String,
        required: true
      },
      pid: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        loading: false,
        data: null,
        comments: [],
        pagination: {
          baseRegDate: null,
          all: false,
          limit: 5
        },
        confirm: {
          type: null,
          show: false,
          icon: null,
          color: 'd2r',
          textColor: 'white',
          message: null
        },
        key: uid(),
        isProduction: process.env.NODE_ENV === 'production',
        contLoaded: false
      }
    },
    computed: {
      ...mapGetters({
        section: 'getSection',
        getSecInfo: 'getSecInfo',
        classifyName: 'getClassifyName',
        authority: 'getAuthority'
      }),
      secInfo() {
        return this.getSecInfo(this.sec)
      },
      viewContents() {
        let dom = document.createElement('contents')
        dom.innerHTML = this.data.contents
        dom.querySelectorAll('pre code').forEach((el) => {
          hljs.highlightElement(el)
        })
        return dom.innerHTML.replace(/<p><\/p>/gi, '<p><br><p>')
      }
    },
    created() {
      const vm = this
      this.loading = true

      this.axios
        .get('/d2r/board/cont', {
          params: {
            sec: this.sec,
            pid: this.pid
          }
        }).then(function (response) {
          vm.key = uid()
          vm.data = response.data
          document.title = (vm.$route.meta.title || document.title)
          document.title = document.title.concat(' - ', vm.data.title)

          vm.$nextTick(() => {
            const images = vm.$refs.contents.getElementsByTagName('img')
            vm.setImages([...images].map(i => { return { 'element': i, 'src': i.src } }))
            vm.contLoaded = true
          })
        })
        .catch(function () { })
        .then(function () {
          vm.getList()
        })
    },
    methods: {
      ...mapActions({
        setImages: 'setD2RImages'
      }),
      getList() {
        const vm = this
        this.loading = true

        this.axios
          .get('/d2r/comments/list', {
            params: {
              pid: this.pid,
              limit: this.pagination.limit,
              baseRegDate: this.pagination.baseRegDate || null
            }
          }).then(function (response) {
            const cids = vm.comments.map(d => d.cid)
            vm.comments = response.data.comments.filter(c => cids.includes(c.cid) === false).concat(vm.comments)
            vm.pagination.baseRegDate = vm.comments.length > 0 ? vm.comments[0].reg_date : null
            vm.pagination.all = response.data.listCount > vm.comments.length
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      showConfirm(type) {
        this.confirm.type = type
        this.confirm.icon = type === 'delete' ? 'delete' : 'check_circle_outline'
        this.confirm.color = type === 'delete' ? 'd2r' : 'green'
        this.confirm.message = type === 'delete' ? this.$t('d2r.bbs.message.deletePost') : this.$t('d2r.bbs.message.finishTran')
        this.confirm.show = true
      },
      cancelConfirm() {
        this.confirm.type = null
        this.confirm.show = false
      },
      processConfirm() {
        const vm = this
        vm.loading = true
        this.axios
          .post(`/d2r/board/${this.confirm.type}`, {
            pid: this.pid
          }).then(function () {
            vm.$q.notify({
              type: 'positive',
              color: 'positive',
              message: vm.$t(`d2r.bbs.message.success${vm.confirm.type.charAt(0).toUpperCase() + vm.confirm.type.slice(1)}`)
            })
            vm.$router.push({ path: `/d2r/bbs/${vm.sec}`, query: { page: vm.$route.query.page } }).catch(() => { })
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      processComments(info, isDesktop) {
        this.loading = true
        const vm = this
        this.axios
          .post(`/d2r/comments/${info.mode}`, {
            pid: this.pid,
            cid: info.cid,
            pcid: info.pcid,
            tcid: info.tcid,
            contents: encodeURIComponent(info.contents),
            secret: info.secret
          }).then(function (response) {
            vm.complete(response.data, isDesktop)
          })
          .catch(function () {
          })
          .then(function () {
            vm.loading = false
          })
      },
      complete(info, isDesktop) {
        if (info) {
          switch (info.mode) {
            case 'leave':
              this.comments.push(info)
              break
            case 'delete':
            case 'modify': {
              let findComment = null

              if (info.pcid) {
                const findTarget = this.comments.find(c => c.cid === info.pcid)

                if (findTarget)
                  findComment = findTarget.replies.find(c => c.cid === info.cid)
              }
              else
                findComment = this.comments.find(c => c.cid === info.cid)

              if (findComment) {
                findComment.contents = info.contents
                findComment.secret = info.secret
                findComment.name = info.name
                findComment.upd_date = info.upd_date
                findComment.delete = info.delete
              }
              break
            }
            case 'reply':
              if (info.pcid) {
                const findTarget = this.comments.find(c => c.cid === info.pcid)

                if (findTarget)
                  findTarget.replies.push(info)
              }
              break
          }

          if (isDesktop)
            this.$refs.comments.resetDesktop()
          else
            this.$refs.comments.reset()
        }
      },
      refresh() {
        this.comments = []
        if (this.pagination.all === false)
          this.pagination.baseRegDate = Date.now()
        else
          this.pagination.baseRegDate = null

        this.getList()
      }
    }
  }
</script>
<style scoped>
  .read-card {
    box-shadow: 0 0 0 1px rgba(45, 45, 45, 1);
    background-color: rgba(5, 5, 5, 1) !important;
    border-radius: 4px;
    color: #CCCCCC;
  }

  .read-card .q-card__section {
    padding: 10px 20px;
  }

  .read-card .read-contents {
    min-height: calc(80vh - 220px);
  }

  .read-card hr {
    background-color: rgba(100, 100, 100, 0.4);
  }

  @media screen and (max-width:599px) {
    .comments-wrap {
      padding: 0 !important;
    }
  }
</style>