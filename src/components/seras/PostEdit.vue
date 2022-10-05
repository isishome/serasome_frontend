<template>
  <div>
    <q-ajax-bar ref="uploadBar" position="bottom" color="primary" size="4px" skip-hijack />
    <q-dialog v-model="editView" :maximized="$q.screen.lt.md" full-height transition-show="show" transition-hide="hide"
      @before-hide="beforeHide" @before-show="resetPost" persistent>
      <q-card :class="$q.screen.gt.sm ? 'dialog-width' : ''">
        <q-inner-loading :showing="value && postInfo.title === null">
          <q-spinner-bars size="200px" color="teal-8" />
        </q-inner-loading>
        <q-form ref="form" @submit="onSubmit" class="column full-height">
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
          <q-card-section class="col">
            <div class="column q-gutter-y-xs full-height">
              <q-input dense outlined hide-bottom-space :disable="processPosting" maxlength="200" type="text"
                v-model="postInfo.title" :label="$t('post.title')" :rules="[val => !!val && val.trim() !== '' || '']" />
              <div class="col column relative-position" :class="fullScreen === true ? 'full-screen' : ''">
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
                <q-scroll-area class="col contents editor-contents"
                  :class="postInfo.contents === null ? '' : isBlankContents ? 'invalid-contents' : 'valid-contents'"
                  :thumb-style="thumbStyle">
                  <editor-content spellcheck="false" :editor="editor" class="full-height q-pa-sm" />
                </q-scroll-area>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="row q-gutter-y-sm full-width">
            <q-list separator dense class="col-12">
              <q-item class="no-padding">
                <q-item-section>
                  <q-input dense outlined hide-bottom-space :disable="processPosting" type="text"
                    v-model="postInfo.youtube" :label="$t('post.youtubeUrl')"
                    :rules="[val => (val.trim() === '' || getYoutubeId(val) !== null) || '']" />
                </q-item-section>
              </q-item>
            </q-list>
            <q-uploader class="col-12" style="max-height:20vh" ref="uploader" :disable="processPosting"
              :accept="limitFileCnt !== -1 ? 'image/*' : '.exe, .zip, .tar, .jar, .7z, .rar, .bat, .cmd, .hwp, .txt, .doc, .docx, .ppt, .pptx, .xls, .xlss, image/*, video/*, audio/*'"
              :factory="factoryFn"
              :label="limitFileCnt !== -1 ? `attach image (10m * ${limitFileCnt})` : 'attach file (10m)'"
              :filter="checkFiles" @added="uploadAdded" @removed="uploadRemoved" @start="uploadStart"
              @finish="uploadFinish" @uploaded="uploaded" @failed="uploadFailed" flat bordered multiple hide-upload-btn
              batch>
              <template v-slot:list="scope">
                <q-list separator>
                  <q-item dense v-for="file in scope.files" :key="file.name">
                    <q-item-section v-if="file.__img" style="width:20%" thumbnail>
                      <q-img :src="file.__img.src" :ratio="3/2" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label lines="2">
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
            <q-list v-if="postInfo.files && postInfo.files.length > 0" style="max-height:15vh" class="col-12 scroll"
              bordered separator dense>
              <template v-for="file in postInfo.files">
                <q-item v-if="file.deleted !== true" :key="file.fid">
                  <q-item-section v-if="file.type === 'image'" style="width:20%" thumbnail>
                    <q-img :src="file.clipboard" :ratio="3/2" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label lines="2">
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
          </q-card-section>
          <q-card-actions>
            <q-btn push class="gt-sm full-width" dense :loading="processPosting" color="teal-4" type="submit" size="lg"
              :label="$route.name === 'post-modify' ? $t('btn.modify') :$t('btn.posting')" />
          </q-card-actions>
          <q-card-section class="platform-ios-only"></q-card-section>
          <q-page-sticky v-if="fullScreen === false" class="lt-md" position="bottom-right" :offset="[10, 10]"
            style="z-index: 1;">
            <div class="q-px-none row justify-end items-center q-gutter-x-sm">
              <q-btn class="all-pointer-events" v-close-popup round color="blue-grey-8" size="sm" icon="close" />
              <q-btn class="all-pointer-events" round color="positive" size="sm" icon="check" type="submit" />
            </div>
            <div class="full-width platform-ios-only q-py-sm"></div>
          </q-page-sticky>
        </q-form>
      </q-card>
    </q-dialog>
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
  mapActions
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
  name: 'ss-post-edit',
  components: {
    'ss-prompt': Prompt,
    EditorContent,
    EditorMenuBar
  },
  props: {
    value: {
      type: String,
      default: null
    },
    limitFileCnt: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      editView: true,
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
          this.postInfo.contents = getHTML()
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
          { label: 'Bash', value: 'bash' }
        ]
      },
      rules: [],
      fullScreen: false,
      postInfo: {
        sname: this.$route.params.sname,
        title: null,
        contents: null,
        youtube: null,
        files: [],
        deleteList: [],
      },
      fileCnt: 0,
      blobList: [],
      processPosting: false,
      limitFileSize: 10485760
    }
  },
  created() {
    if (this.value)
      this.postCont()
  },
  computed: {
    isSelectionEmpty() {
      const { view } = this.editor;
      const { selection } = view.state;
      return selection.empty;
    },
    isBlankContents() {
      return !this.postInfo.contents || this.postInfo.contents.replace(/\s/gi, '').replace(/<\/?p>/gi, '') === ''
    },
    removeWithOptions() {
      return [...this.codeBlock.options, { label: 'Remove', value: 'remove' }]
    },
    isModify() {
      return this.value !== null
    }
  },
  methods: {
    ...mapActions({
      addItem: 'addItem',
      modifyItem: 'modifyItem'
    }),
    showLink(command, attrs) {
      if (!this.isSelectionEmpty) {
        this.command = command
        this.rules = [val => (!val || new RegExp('^https?://(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([\\\\-a-zA-Z0-9()@:%_+.~#?&/=]*)$', 'i').test(val)) || this.$t('post.message.invalidLink')]
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
      this.rules = [val => new RegExp('^(blob:)?https?://(?:localhost|(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6})\\b([\\\\-a-zA-Z0-9()@:%_+.~#?&/=]*)$', 'i').test(val) || this.$t('post.message.invalidImage')]
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
    factoryFn() {
      return {
        url: `${this.axios.defaults.baseURL}/seras/post/write`,
        method: 'POST',
        withCredentials: true,
        formFields: [
          {
            'name': 'sname',
            'value': encodeURIComponent(this.postInfo.sname)
          },
          {
            'name': 'pid',
            'value': this.value
          },
          {
            'name': 'title',
            'value': encodeURIComponent(this.postInfo.title)
          },
          {
            'name': 'contents',
            'value': encodeURIComponent(this.postInfo.contents)
          },
          {
            'name': 'youtube',
            'value': encodeURIComponent(this.postInfo.youtube)
          },
          {
            'name': 'deleteList',
            'value': encodeURIComponent(JSON.stringify(this.postInfo.deleteList))
          }
        ]
      }
    },
    uploaded(info) {
      this.processPosting = false
      this.editor.setOptions({
        editable: true
      })

      if (this.isModify)
        this.modifyItem(JSON.parse(info.xhr.response))
      else
        this.addItem(JSON.parse(info.xhr.response))

      this.$q.notify({
        type: 'positive',
        color: 'positive',
        message: this.isModify ? this.$t('post.message.completeModify') : this.$t('post.message.completePosting')
      })

      this.blobList = []
      this.editView = false
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
          }
        }
      })
    },
    uploadRemoved(files) {
      files.filter((file) => {
        if (file.__img) {
          const findIndex = this.blobList.findIndex(f => f.blob === file.__img.src)

          if (findIndex !== -1) {
            const newContents = this.postInfo.contents.replace(file.__img.src, 'remove_image').replace(new RegExp('<(\\w+)\\s[^>]*src=\\"remove_image\\"[^>]*>', 'igm'), '')
            this.blobList.splice(findIndex, 1)
            this.editor.setContent(newContents, true)
          }
        }
      })
    },
    deleteFile(file) {
      const findIndex = this.postInfo.files.findIndex(f => f.fid === file.fid)

      if (findIndex !== -1) {
        const newContents = this.postInfo.contents.replace(file.clipboard, 'remove_image').replace(new RegExp('<(\\w+)\\s[^>]*src=\\"remove_image\\"[^>]*>', 'igm'), '')
        file.deleted = true
        this.postInfo.deleteList.push(file.fid)
        this.postInfo.files.splice(findIndex, 1)
        this.editor.setContent(newContents, true)
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
      this.postInfo.title = null
      this.postInfo.contents = null
      this.editor.clearContent()
      this.postInfo.youtube = ''
      this.postInfo.deleteList = []
      this.postInfo.files = []
      this.fileCnt = 0
      this.blobList = []
      this.fullScreen = false

      if (this.$refs.editor && this.$refs.editor.refreshToolbar)
        this.$refs.editor.refreshToolbar()

      if (this.$refs.form && this.$refs.form.reset)
        this.$refs.form.reset()
    },
    postCont() {
      const self = this
      this.axios
        .get('/seras/post/cont', {
          params: {
            'pid': this.value
          }
        })
        .then(function (response) {
          if (response.data && response.data !== null) {
            self.postInfo.sname = response.data.sname
            self.postInfo.title = response.data.title
            self.editor.setContent(response.data.contents, true)
            self.postInfo.youtube = response.data.youtube
            self.postInfo.files = response.data.files
            self.postInfo.fileCnt = response.data.files ? response.data.files.length : 0
          }
        })
        .catch(() => { })
    },
    post() {
      let self = this
      this.axios
        .post('/seras/post/write', {
          sname: encodeURIComponent(this.postInfo.sname),
          pid: this.value,
          title: encodeURIComponent(this.postInfo.title),
          contents: encodeURIComponent(this.postInfo.contents),
          youtube: encodeURIComponent(this.postInfo.youtube),
          deleteList: encodeURIComponent(JSON.stringify(this.postInfo.deleteList))
        }).then(function (response) {
          self.uploaded({ 'xhr': { 'response': JSON.stringify(response.data) } })
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
        this.postInfo.contents = ''
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
    beforeHide() {
      this.$nextTick(() => {
        this.$router.replace({ name: 'some', params: { sname: this.postInfo.sname } }).catch(() => { })
      })
    }
  },
  beforeDestroy() {
    this.editor.destroy()
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

.editor-contents {
  transition: all 0.1s;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .12);
  position: relative !important;
  z-index: 1000 !important;
  padding: 2px;
}

.body--dark .editor-contents {
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.28);
}

.editor-contents.invalid-contents {
  box-shadow: inset 0 0 0 1px rgba(204, 0, 0, 1);
}

.editor-contents.valid-contents {
  box-shadow: inset 0 0 0 1px var(--q-color-primary);
}

.editor-contents:focus-within {
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, .12);
}

.body--dark .editor-contents:focus-within {
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.28);
}

.editor-contents.invalid-contents:focus-within {
  box-shadow: inset 0 0 0 2px rgba(204, 0, 0, 1);
}

.editor-contents.valid-contents:focus-within {
  box-shadow: inset 0 0 0 2px var(--q-color-primary);
}

.full-screen .editor-menu-bar {
  position: relative !important;
}

.editor-menu-bar {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: rgb(240, 240, 240) !important;
  z-index: 1;
  border-radius: 4px 4px 0 0;
}

.body--dark .editor-menu-bar {
  background-color: rgb(18, 29, 58) !important;
}

.editor-menu-bar .is-active {
  background-color: rgba(0, 0, 0, 0.2);
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

.body--light .full-screen {
  background-color: #FFFFFF;
}

.body--dark .full-screen {
  background-color: #17213b;
}
</style>