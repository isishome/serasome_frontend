<template>
  <div>
    <q-ajax-bar ref="bar" position="bottom" color="red" size="4px" skip-hijack />
    <q-ajax-bar ref="uploadBar" position="bottom" color="primary" size="4px" skip-hijack />
    <ss-post-read ref="postRead" :sname="sname" v-model="pid" @done="done" @reading="loading = true" />
    <q-dialog v-model="postAddModify" :maximized="$q.screen.lt.md" full-height transition-show="show"
      transition-hide="hide" @before-hide="beforeHide" @hide="hide" no-esc-dismiss no-backdrop-dismiss>
      <q-card :class="['column no-padding no-scroll', $q.screen.gt.sm ? 'dialog-width' : '']">
        <q-card-section class="gt-sm no-padding full-width">
          <div class="row justify-between items-center q-pa-sm q-gutter-x-xs">
            <div class="col font-title">
              {{$t('post.thing')}}
            </div>
            <div class="col-1 text-right">
              <q-btn flat round v-close-popup size="sm" icon="close" :disable="processPosting" />
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-scroll-area class="col full-width" :thumb-style="thumbStyle">
          <q-card-section>
            <q-form ref="form" @submit="onSubmit" class="column full-width q-gutter-y-xs">
              <div class="full-width">
                <q-input dense outlined hide-bottom-space :disable="processPosting" maxlength="200" type="text"
                  v-model="title" :label="$t('post.title')" :rules="[val => !!val && val.trim() !== '' || '']" />
              </div>
              <div class="column full-width relative-position" :class="fullScreen === true ? 'full-screen' : ''">
                <editor-menu-bar class="editor-menu-bar" :editor="editor"
                  v-slot="{ commands, isActive, getMarkAttrs, getNodeAttrs }">
                  <q-toolbar class="bg-transparent no-padding row justify-between items-start"
                    v-show="processPosting === false">
                    <div class="row justify-start q-gutter-sm">
                      <div>
                        <q-btn flat dense size="sm" icon="format_bold" :class="{ 'is-active': isActive.bold() }"
                          @click="commands.bold" />
                        <q-btn flat dense size="sm" icon="format_italic" :class="{ 'is-active': isActive.italic() }"
                          @click="commands.italic" />
                        <q-btn flat dense size="sm" icon="strikethrough_s" :class="{ 'is-active': isActive.strike() }"
                          @click="commands.strike" />
                        <q-btn flat dense size="sm" icon="format_underlined"
                          :class="{ 'is-active': isActive.underline() }" @click="commands.underline" />
                        <q-btn flat dense size="sm" icon="texture" :class="{ 'is-active': isActive.code() }"
                          @click="commands.code" />
                        <q-btn flat dense size="sm" label="h1"
                          :class="{ 'is-active': isActive.heading({ level: 1 }), 'text-weight-bolder':true}"
                          @click="commands.heading({ level: 1 })" />
                        <q-btn flat dense size="sm" label="h2"
                          :class="{ 'is-active': isActive.heading({ level: 2 }), 'text-weight-bolder':true}"
                          @click="commands.heading({ level: 2 })" />
                        <q-btn flat dense size="sm" label="h3"
                          :class="{ 'is-active': isActive.heading({ level: 3 }), 'text-weight-bolder':true}"
                          @click="commands.heading({ level: 3 })" />
                      </div>
                      <div>
                        <q-btn flat dense size="sm" icon="format_align_left"
                          :class="{ 'is-active': isActive.alignment({ align: 'left' }) }"
                          @click="commands.alignment({ align: 'left' })" />
                        <q-btn flat dense size="sm" icon="format_align_center"
                          :class="{ 'is-active': isActive.alignment({ align: 'center' }) }"
                          @click="commands.alignment({ align: 'center' })" />
                        <q-btn flat dense size="sm" icon="format_align_right"
                          :class="{ 'is-active': isActive.alignment({ align: 'right' }) }"
                          @click="commands.alignment({ align: 'right' })" />
                        <q-btn flat dense size="sm" icon="format_align_justify"
                          :class="{ 'is-active': isActive.alignment({ align: 'justify' }) }"
                          @click="commands.alignment({ align: 'justify' })" />
                      </div>
                      <div>
                        <q-btn flat dense size="sm" icon="format_quote" :class="{ 'is-active': isActive.blockquote() }"
                          @click="commands.blockquote" />
                        <q-btn flat dense size="sm" icon="border_horizontal" @click="commands.horizontal_rule" />
                        <q-btn flat dense size="sm" icon="format_list_numbered"
                          :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list" />
                        <q-btn flat dense size="sm" icon="format_list_bulleted"
                          :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list" />
                      </div>
                      <div>
                        <q-btn flat dense size="sm" icon="link"
                          @click="showLink(commands.link, getMarkAttrs('link'))" />
                        <q-btn flat dense size="sm" icon="image" @click="showImage(commands.image)" />
                        <q-btn flat dense size="sm" icon="code" :class="{ 'is-active': isActive.ccb() }">
                          <q-popup-proxy ref="codeBlockProxy" :breakpoint="599">
                            <q-list :dark="false" class="bg-grey-1">
                              <q-item :dark="false" dense clickable
                                v-for="opt in isActive.ccb() ? removeWithOptions : codeBlock.options" :key="opt.value"
                                :class="opt.value === 'remove' ? 'bg-red-12 text-white' : ''"
                                @click="codeBlock.class = opt; $refs.codeBlockProxy.hide();codeBlockUpdate(commands.ccb, getNodeAttrs('ccb'), opt)">
                                <q-item-section>
                                  <q-item-label>{{opt.label}}
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </q-popup-proxy>
                        </q-btn>
                        <q-btn flat dense size="sm" icon="border_all"
                          @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })" />
                        <template v-if="isActive.table()">
                          <q-btn-group class="table-options" flat>
                            <q-btn flat dense size="sm" icon="border_clear" @click="commands.deleteTable" />
                            <q-btn flat dense size="sm" icon="border_left" @click="commands.addColumnBefore" />
                            <q-btn flat dense size="sm" icon="border_right" @click="commands.addColumnAfter" />
                            <q-btn flat dense size="sm" icon="border_vertical" @click="commands.deleteColumn" />
                            <q-btn flat dense size="sm" icon="border_top" @click="commands.addRowBefore" />
                            <q-btn flat dense size="sm" icon="border_bottom" @click="commands.addRowAfter" />
                            <q-btn flat dense size="sm" icon="border_horizontal" @click="commands.deleteRow" />
                            <q-btn flat dense size="sm" icon="border_outer" @click="commands.toggleCellMerge" />
                          </q-btn-group>
                        </template>
                      </div>
                    </div>
                    <div class="col-3 row justify-end">
                      <q-btn flat dense size="sm" icon="undo" @click="commands.undo" />
                      <q-btn flat dense size="sm" icon="redo" @click="commands.redo" />
                      <q-btn flat dense size="sm" :icon="!fullScreen ? 'fullscreen' : 'fullscreen_exit'"
                        @click="fullScreen = !fullScreen" />
                    </div>
                  </q-toolbar>
                </editor-menu-bar>
                <q-scroll-area class="full-width contents editor-contents q-pa-md"
                  :class="[!fullScreen ? 'contents-area' : '', contents === null ? '' : isBlankContents ? 'invalid-contents' : 'valid-contents']"
                  :thumb-style="thumbStyle">
                  <editor-content spellcheck="false" :editor="editor" class="full-height" />
                </q-scroll-area>
              </div>
              <q-list separator class="q-pa-sm">
                <q-item dense>
                  <q-item-section side>
                    <q-radio dense :disable="getYoutubeId(youtube) === null" v-model="thumb" :val="youtube" size="xs" />
                  </q-item-section>
                  <q-item-section>
                    <q-input dense outlined hide-bottom-space :disable="processPosting" type="text" v-model="youtube"
                      :label="$t('post.youtubeUrl')"
                      :rules="[val => (val.trim() === '' || getYoutubeId(val) !== null) || '']" @input="validYoutube" />
                  </q-item-section>
                </q-item>
              </q-list>
              <div class="full-width">
                <q-uploader class="full-width" style="max-height:25vh" ref="uploader" :disable="processPosting"
                  :accept="limitFileCnt !== -1 ? 'image/*' : '.exe, .zip, .tar, .jar, .7z, .rar, .bat, .cmd, .hwp, .txt, .doc, .docx, .ppt, .pptx, .xls, .xlss, image/*, video/*, audio/*'"
                  :factory="factoryFn"
                  :label="limitFileCnt !== -1 ? `attach image (10m * ${limitFileCnt})` : 'attach file (10m)'"
                  :filter="checkFiles" @added="uploadAdded" @removed="uploadRemoved" @start="uploadStart"
                  @finish="uploadFinish" @uploaded="uploaded" @failed="uploadFailed" flat bordered multiple
                  hide-upload-btn batch>
                  <template v-slot:list="scope">
                    <q-list separator>
                      <q-item dense v-for="file in scope.files" :key="file.name">
                        <q-item-section side v-if="file.__img">
                          <q-radio dense v-if="file.__img" v-model="thumb" :val="file.name" size="xs" />
                        </q-item-section>
                        <q-item-section v-if="file.__img" style="width:10%" thumbnail>
                          <q-img :src="file.__img.src" width="100%" :ratio="3/2" />
                        </q-item-section>
                        <q-item-section class="gt-xs">
                          <q-item-label class="ellipsis">
                            {{ file.name }}
                          </q-item-label>
                          <q-item-label caption>
                            Status: {{ file.__status }}
                          </q-item-label>
                          <q-item-label caption>
                            {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                          </q-item-label>
                        </q-item-section>
                        <q-item-section top side>
                          <q-btn v-if="file.__img" size="md" flat round dense icon="link"
                            @click="copyThumbnail(file.__img.src)" />
                          <q-btn size="md" flat round dense icon="delete" @click="scope.removeFile(file)" />
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </template>
                </q-uploader>
              </div>
              <div v-if="files && files.length > 0" class="full-width scroll" style="max-height: 25vh;">
                <q-list bordered separator class="q-pa-sm">
                  <template v-for="file in files">
                    <q-item dense v-if="file.deleted !== true" :key="file.fid">
                      <q-item-section v-if="file.type === 'image'" side>
                        <q-radio dense v-model="thumb" :val="file.origin" size="xs" />
                      </q-item-section>
                      <q-item-section v-if="file.type === 'image'" style="width:10%" thumbnail>
                        <q-img :src="file.clipboard" width="100%" :ratio="3/2" />
                      </q-item-section>
                      <q-item-section class="gt-xs">
                        <q-item-label class="ellipsis">
                          {{file.origin}}
                        </q-item-label>
                      </q-item-section>
                      <q-item-section top side>
                        <q-btn v-if="file.type === 'image'" flat round dense icon="link"
                          @click="copyThumbnail(file.clipboard)" />
                        <q-btn size="md" flat round dense icon="delete" @click="deleteFile(file)" />
                      </q-item-section>
                    </q-item>
                  </template>
                </q-list>
              </div>
              <div>
                <q-btn push class="full-width" dense :loading="processPosting" color="teal-4" type="submit" size="lg"
                  :label="$route.name === 'post-modify' ? $t('btn.modify') :$t('btn.posting')" />
              </div>
            </q-form>
          </q-card-section>
          <div class="lt-md" style="height:16vh"></div>
        </q-scroll-area>
        <q-separator />
        <q-card-section v-if="fullScreen === false" class="lt-md q-pa-sm fixed-bottom btn-place no-pointer-events">
          <div class="q-px-none row justify-end items-center q-gutter-x-xs">
            <div>
              <q-btn class="all-pointer-events" v-close-popup round color="red-5" size="md" icon="close" />
            </div>
            <div class="col-12 platform-ios-only ios">
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 q-mt-md relative-position">
      <div v-if="some" class="row justify-between items-center q-px-md">
        <div class="row items-center">
          <q-icon
            :name="some.icon ? some.icon : some.owner === true ? 'fas fa-cube' : some.linked === true ? 'fas fa-cubes' : 'fas fa-question'"
            class="q-ma-sm" size="20px" color="amber-7" />
          <div class="font-title text-h5 text-teal-7 q-ml-xs">{{ some.name }}</div>
        </div>
        <div>
          <q-btn dense round flat size="sm" v-if="postingAvailable && signStatus && !owner"
            :icon="linked === true ? 'fas fa-unlink' : 'fas fa-link'" :color="linked ? 'red-10' : 'green-10'"
            class="q-pa-xs" @click="link">
          </q-btn>
        </div>
      </div>
      <q-separator inset spaced />
      <q-infinite-scroll ref="some" @load="onLoad" class="q-mt-md relative-position">
        <ss-post-list v-if="some" :list="items" :pid="pid" :loading="loading" @view="view"></ss-post-list>
        <template v-slot:loading>
          <div class="row justify-center items-center q-my-md">
            <q-spinner-dots :color="$q.dark.isActive ? 'grey-4' : 'teal-4'" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
    <ss-prompt v-model="linkPop" :title="$t('post.link')" :contents="url" :rules="rules" @ok="setLink"
      @cancel="cancelPrompt" />
    <ss-prompt v-model="imagePop" :title="$t('post.image')" :contents="url" :rules="rules" @ok="setImage"
      @cancel="cancelPrompt" />
  </div>
</template>

<script>
  import {
    copyToClipboard
  } from 'quasar'

  import {
    mapGetters, mapActions
  } from 'vuex'

  import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
  import {
    Bold,
    Italic,
    Strike,
    Underline,
    Code,
    Heading,
    Blockquote,
    HorizontalRule,
    ListItem,
    OrderedList,
    BulletList,
    History,
    HardBreak,
    Table,
    TableHeader,
    TableCell,
    TableRow
  } from 'tiptap-extensions'
  const Prompt = () => import(/* webpackChunkName: "group-component" */ '@/components/seras/Prompt')
  import CustomLink from '@/plugin/tiptap/CustomLink'
  import Alignment from '@/plugin/tiptap/Alignment'
  import CustomImage from '@/plugin/tiptap/CustomImage'
  import CustomCodeBlock from '@/plugin/tiptap/CustomCodeBlock'

  export default {
    name: 'post',
    components: {
      'ss-prompt': Prompt,
      EditorContent,
      EditorMenuBar
    },
    data() {
      return {
        loading: false,
        editor: new Editor({
          content: null,
          extensions: [
            new Bold(),
            new Italic(),
            new Strike(),
            new Underline(),
            new Code(),
            new Heading({ levels: [1, 2, 3] }),
            new Blockquote(),
            new HorizontalRule(),
            new ListItem(),
            new OrderedList(),
            new BulletList(),
            new CustomLink(),
            new Alignment(),
            new CustomImage(),
            new CustomCodeBlock(),
            new History(),
            new HardBreak(),
            new Table({
              resizable: true,
            }),
            new TableHeader(),
            new TableCell(),
            new TableRow()
          ],
          onUpdate: ({ getHTML }) => {
            this.contents = getHTML()
          }
        }),
        linkPop: false,
        url: null,
        imagePop: false,
        command: null,
        codeBlock: {
          class: '',
          options: [
            { label: 'Javascript', value: 'javascript' },
            { label: 'HTML', value: 'html' },
            { label: 'CSS', value: 'css' },
            { label: 'DOS', value: 'dos' },
            { label: 'Bash', value: 'bash' },
            { label: 'Auto', value: 'auto' }
          ]
        },
        rules: [],
        routeName: null,
        some: null,
        fullScreen: false,
        title: null,
        contents: null,
        youtube: '',
        deleteList: [],
        files: [],
        fileCnt: 0,
        blobList: [],
        processPosting: false,
        postingAvailable: false,
        postAddModify: false,
        owner: false,
        linked: false,
        write: false,
        type: 0,
        point: null,
        order: -1,
        skip: 0,
        limit: 10,
        fromSname: null,
        sname: null,
        pid: null,
        tempPid: null,
        loadFailed: false,
        limitFileSize: 10485760,
        limitFileCnt: 5,
        thumb: null
      }
    },
    created() {
      this.initItem()
      this.routeName = this.$route.name
      this.sname = this.$route.params.sname
      this.pid = this.$route.params.pid || null
      this.someInfo()
      this.postInit()
    },
    beforeDestroy() {
      this.editor.destroy()
      clearTimeout(this.timer)
    },
    watch: {
      '$route': function (to, from) {
        this.routeName = this.$route.name
        this.fromSname = from.params.sname
        this.sname = to.params.sname
        this.pid = to.params.pid || null
        this.tempPid = to.params.tempPid

        if (to.params.sname !== from.params.sname) {
          this.someInfo()
          this.initItem()
          this.skip = 0
          if (this.$refs.some) {
            this.$refs.some.resume()
            this.$refs.some.trigger()
          }
        }
        else if (this.signStatus === false)
          this.someInfo()

        if (!this.pid)
          this.postAddModify = false

        this.postInit()
      }
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus',
        someList: 'getSomeList',
        currentSome: 'getCurrentSome',
        items: 'getItems'
      }),
      isSelectionEmpty() {
        const { view } = this.editor;
        const { selection } = view.state;
        return selection.empty;
      },
      isBlankContents() {
        return !this.contents || this.contents.replace(/\s/gi, '').replace(/<\/?p>/gi, '') === ''
      },
      removeWithOptions() {
        return [...this.codeBlock.options, { label: 'Remove', value: 'remove' }]
      },
      isModify() {
        return this.routeName === 'post-modify'
      }
    },
    methods: {
      ...mapActions({
        setSomeList: 'setSomeList',
        setCurrentSome: 'setCurrentSome',
        initItem: 'initItem',
        concatItem: 'concatItem',
        addItem: 'addItem',
        modifyItem: 'modifyItem',
        deleteItem: 'deleteItem'
      }),
      showLink(command, attrs) {
        if (!this.isSelectionEmpty) {
          this.command = command
          this.rules = [val => (!val || new RegExp('^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$', 'i').test(val)) || this.$t('post.message.invalidLink')]
          this.url = attrs.href
          this.linkPop = true
        }
      },
      setLink(url) {
        if (this.command !== null)
          this.command({ href: url === '' ? null : url })

        this.cancelPrompt()
      },
      showImage(command) {
        this.command = command
        this.rules = [val => new RegExp('^(blob:)?https?:\\/\\/(?:localhost|(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6})\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$', 'i').test(val) || this.$t('post.message.invalidImage')]
        this.imagePop = true
      },
      setImage(src) {
        if (this.command !== null) {
          this.command({ 'src': src })
        }

        this.cancelPrompt()
      },
      cancelPrompt() {
        this.url = null
        this.command = null
        this.rules = []
        this.linkPop = false
        this.imagePop = false
      },
      codeBlockUpdate(command, attrs, selected) {
        if (attrs.value === selected.value)
          return
        else if (attrs.value !== selected.value && selected.value !== 'remove')
          command(selected)
        else
          command()
      },
      postInit() {
        this.loading = !(!this.pid)

        if (this.routeName === 'some') {
          this.postAddModify = false
          this.postingAvailable = true
        }
        else if (this.routeName === 'post-add') {
          this.resetPost()
          this.$nextTick(() => {
            this.postAddModify = true
            this.postingAvailable = false
          })
        }
        else if (this.routeName === 'post-modify') {
          this.resetPost()
          this.postCont()
          this.$nextTick(() => {
            this.postAddModify = true
            this.postingAvailable = false
          })
        }
      },
      imgError() {
        this.loadFailed = true
      },
      validYoutube() {
        if (this.getYoutubeId(this.youtube) !== null && (this.thumb === null || this.getYoutubeId(this.thumb) !== null))
          this.thumb = this.youtube
        else if (this.getYoutubeId(this.youtube) === null && this.getYoutubeId(this.thumb) !== null)
          this.thumb = null
      },
      beforeHide() {
        this.$nextTick(() => {
          this.$router.replace({ name: 'some', params: { sname: this.sname, tempPid: this.pid } }).catch(() => { })
        })
      },
      hide() {
        if (this.tempPid) {
          this.pid = this.tempPid
          this.tempPid = null
        }
      },
      resetSomeInfo() {
        this.some = null
        this.write = null
        this.owner = null
        this.linked = null
        this.type = null
      },
      someInfo() {
        const self = this

        if ((this.sname && this.sname !== this.fromSname) || (this.signStatus === false && this.sname !== undefined)) {
          this.axios
            .get('/seras/some/info', {
              params: {
                'sname': this.sname
              }
            })
            .then(function (response) {
              if (response && response.data) {
                self.some = response.data
                self.write = response.data.auth.write
                self.owner = response.data.owner
                self.linked = response.data.linked
                self.type = response.data.type

                self.timer = setTimeout(() => {
                  self.setCurrentSome(response.data.linked ? false : response.data)
                }, 0);

                if (self.type === 99 && self.owner === true)
                  self.limitFileCnt = -1
                else
                  self.limitFileCnt = 5
              }
              else
                self.resetSomeInfo()
            })
            .catch(() => {
              self.resetSomeInfo()
            })
        }
      },
      onLoad(index, done) {
        if (this.skip === 0) {
          const gmt = new Date()
          this.point = Date.UTC(gmt.getUTCFullYear(), gmt.getUTCMonth(), gmt.getUTCDate(), gmt.getUTCHours(), gmt.getUTCMinutes(), gmt.getUTCSeconds())
        }

        this.postList(index, done)
      },
      postList(index, done) {
        const self = this
        let stop = false
        const ajaxBar = this.$refs.bar
        const requestSname = this.sname
        this.loading = true
        let tempList = []

        ajaxBar.start()

        this.axios
          .get('/seras/post/list', {
            params: {
              'sname': this.sname,
              'point': this.point,
              'order': this.order,
              'skip': this.skip,
              'limit': this.limit
            }
          })
          .then(function (response) {
            if (requestSname === self.$route.params.sname) {
              if (response.data.length === 0)
                stop = true
              else {
                self.skip = self.skip + response.data.length
                tempList = response.data
              }
            } else
              stop = true

          })
          .catch(function () {
            stop = true
          })
          .then(function () {
            ajaxBar.stop()

            done(stop)
            self.concatItem(tempList)

            self.$nextTick(() => {
              if (requestSname !== self.$route.params.sname) {
                self.someInfo()
                self.initItem()
                self.skip = 0
                if (self.$refs.some) {
                  self.$refs.some.resume()
                  self.$refs.some.trigger()
                }
              }
            })
            self.loading = false
          })
      },
      postCont() {
        if (!this.pid) {
          this.pid = null

          return
        }

        const self = this
        this.axios
          .get('/seras/post/cont', {
            params: {
              'pid': this.pid
            }
          })
          .then(function (response) {
            if (response.data && response.data !== null) {
              self.title = response.data.title
              self.editor.setContent(response.data.contents, true)
              self.youtube = response.data.youtube
              self.files = response.data.files
              self.thumb = response.data.thumb
              self.fileCnt = response.data.files ? response.data.files.length : 0
            }
          })
          .catch(() => { })
      },
      factoryFn() {
        return {
          url: `${this.axios.defaults.baseURL}/seras/post/write`,
          method: 'POST',
          withCredentials: true,
          formFields: [
            {
              'name': 'sname',
              'value': encodeURIComponent(this.sname)
            },
            {
              'name': 'pid',
              'value': this.pid
            },
            {
              'name': 'title',
              'value': encodeURIComponent(this.title)
            },
            {
              'name': 'contents',
              'value': encodeURIComponent(this.contents)
            },
            {
              'name': 'youtube',
              'value': encodeURIComponent(this.youtube)
            },
            {
              'name': 'thumb',
              'value': encodeURIComponent(this.thumb)
            },
            {
              'name': 'deleteList',
              'value': encodeURIComponent(JSON.stringify(this.deleteList))
            }
          ]
        }
      },
      uploaded(info) {
        if (this.isModify)
          this.modifyItem(JSON.parse(info.xhr.response))
        else
          this.addItem(JSON.parse(info.xhr.response))

        this.blobList = []
        this.postAddModify = false
        this.processPosting = false
        this.editor.setOptions({
          editable: true
        })

        this.$refs.uploadBar.stop()
      },
      copyThumbnail(thumbnailSrc) {
        copyToClipboard(thumbnailSrc)
          .then(() => {
            this.$q.notify({
              type: 'positive',
              color: 'positive',
              message: this.$t('post.message.successClipboard')
            })
          })
          .catch(() => {
            this.$q.notify({
              type: 'negative',
              color: 'negative',
              message: this.$t('post.message.failedClipboard')
            })
          })
      },
      checkFiles(files) {
        let msgs = []
        const uploadObj = this.$refs.uploader

        const limitFileCnt = this.limitFileCnt - this.fileCnt
        let currentFileCnt = uploadObj.files.length

        files = files.filter((file) => {
          let result = false

          if (this.limitFileCnt !== -1 && currentFileCnt + 1 > limitFileCnt) {
            const uploadedFileMsg = this.fileCnt > 0 ? `<br />${this.$t('post.alreadyAttachCount')} : ${this.fileCnt}` : ''
            msgs.push(`${file.name}<br />${this.$t('post.currentAttachCount')} : ${currentFileCnt}개${uploadedFileMsg}<br />→ [${this.$t('post.limitNumber')}(${this.limitFileCnt})]`)
          }
          else if (file.size > this.limitFileSize)
            msgs.push(`${file.name}<br />${this.$t('post.fileSize')} : ${file.size} bytes<br />→ [${this.$t('post.limitSize')}(${this.limitFileSize} bytes)].`)
          else {
            currentFileCnt++
            result = true
          }

          return result
        })

        if (msgs.length > 0) {
          this.$q.notify({
            type: 'warning',
            color: 'warning',
            html: true,
            message: msgs.join('<br/>'),
          })
        }

        return files
      },
      uploadAdded(files) {
        files.filter((file) => {
          if (file.__img) {
            const findBlob = this.blobList.find(f => f.blob === file.__img.src)

            if (!findBlob) {
              this.blobList.push({ 'blob': file.__img.src, 'name': file.name })
              this.editor.commands.image({ 'src': file.__img.src, 'name': file.name })
              this.editor.commands.hard_break()

              if (this.thumb === null)
                this.thumb = file.name
            }
          }
        })
      },
      uploadRemoved(files) {
        files.filter((file) => {
          if (file.__img) {
            const findIndex = this.blobList.findIndex(f => f.blob === file.__img.src)

            if (findIndex !== -1) {
              const newContents = this.contents.replace(file.__img.src, 'remove_image').replace(new RegExp('<(\\w+)\\s[^>]*src=\\"remove_image\\"[^>]*>', 'igm'), '')
              this.blobList.splice(findIndex, 1)
              this.editor.setContent(newContents, true)

              if (this.thumb === file.name) {
                if (this.blobList.length > 0)
                  this.thumb = this.blobList[0].name
                else
                  this.thumb = null
              }
            }
          }
        })
      },
      deleteFile(file) {
        const findIndex = this.files.findIndex(f => f.fid === file.fid)

        if (findIndex !== -1) {
          const newContents = this.contents.replace(file.clipboard, 'remove_image').replace(new RegExp('<(\\w+)\\s[^>]*src=\\"remove_image\\"[^>]*>', 'igm'), '')
          file.deleted = true
          this.deleteList.push(file.fid)
          this.files.splice(findIndex, 1)
          this.editor.setContent(newContents, true)

          if (this.thumb === file.origin)
            this.thumb = null
        }
      },
      uploadStart() {
        this.$refs.uploadBar.start()
      },
      uploadFinish() {
        this.$refs.uploadBar.stop()
      },
      uploadFailed(info) {
        this.processPosting = false
        this.editor.setOptions({
          editable: true
        })
        if (info.xhr.response)
          this.$q.notify({
            type: 'negative',
            color: 'negative',
            message: info.xhr.response
          })
        else
          this.$q.notify({
            type: 'negative',
            color: 'negative',
            message: info.xhr
          })
      },
      resetPost() {
        this.title = null
        this.contents = null
        this.editor.clearContent()
        this.youtube = ''
        this.deleteList = []
        this.files = []
        this.fileCnt = 0
        this.blobList = []
        this.thumb = null
        this.fullScreen = false

        if (this.$refs.editor && this.$refs.editor.refreshToolbar)
          this.$refs.editor.refreshToolbar()

        if (this.$refs.form && this.$refs.form.reset) {
          this.$refs.form.reset()
        }

      },
      post() {
        let self = this
        this.axios
          .post('/seras/post/write', {
            sname: encodeURIComponent(this.$route.params.sname),
            pid: this.pid,
            title: encodeURIComponent(this.title),
            contents: encodeURIComponent(this.contents),
            youtube: encodeURIComponent(this.youtube),
            thumb: encodeURIComponent(this.thumb),
            deleteList: encodeURIComponent(JSON.stringify(this.deleteList))
          }).then(function (response) {
            if (self.isModify)
              self.modifyItem(response.data)
            else
              self.addItem(response.data)

            self.$q.notify({
              type: 'positive',
              color: 'positive',
              message: self.isModify ? self.$t('post.message.completeModify') : self.$t('post.message.completePosting')
            })

            self.blobList = []
            self.postAddModify = false
          })
          .catch(function () { })
          .then(function () {
            self.processPosting = false
            self.editor.setOptions({
              editable: true
            })
          })
      },
      onSubmit() {
        if (this.isBlankContents) {
          this.contents = ''
          this.editor.view.dom.focus()
          return
        }

        this.processPosting = true
        this.editor.setOptions({
          editable: false
        })
        const uploadObj = this.$refs.uploader

        if (uploadObj.files.length > 0 && uploadObj.canUpload)
          uploadObj.upload()
        else
          this.post()

      },
      link() {
        const self = this
        const sname = this.$route.params.sname
        this.axios
          .post(this.linked === true ? '/seras/some/unlink' : '/seras/some/link', {
            sname: sname
          })
          .then(function (response) {
            self.linked = !self.linked
            if (response.data !== null) {
              if (self.linked === true) {
                let someListClone = [...self.someList]
                someListClone.push(response.data)
                self.setSomeList(someListClone)
                self.setCurrentSome(false)
                self.write = response.data.auth.write
              }
              else {
                let someListClone = [...self.someList]
                for (const some of someListClone) {
                  if (some.sid === response.data.sid) {
                    someListClone.splice(someListClone.indexOf(some), 1)
                    break
                  }
                }
                self.setSomeList(someListClone)
                self.setCurrentSome(response.data)
                self.write = false
              }
            }
          })
          .catch(() => { })
      },
      view(sname, pid) {
        this.loading = true
        this.sname = sname
        this.pid = pid
      },
      done() {
        this.loading = false
      }
    }
  }
</script>
<style scoped>
  .dialog-width {
    width: 1280px;
    max-width: 90vw;
  }

  .editor-content {
    height: calc(100% - 50px);
    border: solid 1px #BBBBBB;
    border-radius: 4px;
    padding: 4px;
  }

  .contents-area {
    height: calc(67vh - 130px);
  }

  .editor-menu-bar {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    background-color: #fafafa !important;
    border-radius: 4px;
  }

  .body--dark .editor-menu-bar {
    background-color: #151939 !important;
  }

  .body--light .editor-menu-bar .is-active {
    background-color: #DDDDDD;
  }

  .body--dark .editor-menu-bar .is-active {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .full-screen {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    height: 100vh !important;
    z-index: 9999;
  }

  .full-screen .editor-menu-bar {
    position: relative !important;
    height: 10vh;
  }

  .full-screen .editor-contents {
    height: 89vh !important;
  }

  .body--light .full-screen {
    background-color: #FFFFFF;
  }

  .body--dark .full-screen {
    background-color: #17213b;
  }

  .btn-place .ios {
    padding-bottom: 4vh;
  }

  .editor-contents {
    padding: 12px;
    transition: all 0.1s;
    border: solid 1px #DDDDDD;
    box-sizing: border-box;
    border-radius: 4px;
  }

  .editor-contents.invalid-contents {
    border-color: #CC0000;
  }

  .editor-contents.valid-contents {
    border-color: #027BE3;
  }
</style>