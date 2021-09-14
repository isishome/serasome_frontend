<template>
  <div :class="wrapClass">
    <q-layout view="hHh lpR lfr">
      <q-header ref="header" class="q-py-xs d2r-back text-grey-5 text-weight-bold d2r-header font-kodia" elevated>
        <q-toolbar class="row justify-start q-col-gutter-x-sm">
          <!-- toolbar 1 -->
          <div class="row justify-start">
            <q-btn dense flat class="lt-md" @click="drawer = !drawer">
              <q-icon name="fas fa-bars" size="16px" />
            </q-btn>
            <q-btn @click="home" flat class="gt-sm">
              <q-avatar flat class="text-d2r d2r-logo-b" icon="fas fa-star-of-david" size="lg" />
              <div class="column q-ml-sm">
                <div class="d2r-flame text-h5">DIABLO<span class="text-h6 vertical-top">®</span> II
                </div>
                <div class="text-left d2r-sub-title text-caption">Resurrected</div>
              </div>
            </q-btn>
          </div>
          <!-- toolbar 2 -->
          <q-tabs class="gt-sm title-size" switch-indicator active-color="title" align="left">
            <q-route-tab v-for="sec in section" :to="`/d2r/bbs/${sec.value}`" :key="sec.name">
              <q-icon :name="sec.icon" class="q-ma-sm" size="20px" />
              <div class="text-h7">{{sec.label}}</div>
            </q-route-tab>
            <q-route-tab to="/d2r/knowledge">
              <q-icon name="fas fa-book" class="q-ma-sm" size="20px" />
              <div class="text-h7">{{$t('d2r.knowledge.title')}}</div>
            </q-route-tab>
            <q-route-tab v-if="signStatus" to="/d2r/storage">
              <q-icon name="inventory_2" class="q-ma-sm" size="20px" />
              <div class="text-h7">{{$t('d2r.storage.title')}}</div>
            </q-route-tab>
          </q-tabs>
          <div class="lt-md absolute-center">
            <q-btn @click="home" flat dense class="row justify-center items-center" size="22px">
              <q-avatar flat class="text-d2r d2r-logo-b" icon="fas fa-star-of-david" size="30px" />
              <div class="q-ml-sm q-pt-xs lt-md gt-xs">
                <span class="d2r-flame">DIA II-R</span>
              </div>
              <div class="q-ml-sm q-pt-xs lt-sm">
                <span class="d2r-flame">DIIR</span>
              </div>
            </q-btn>
          </div>
          <!-- toolbar 3 -->
          <div class="absolute-right col-xl-4 col-lg-3 col-md-2 row justify-end items-center q-gutter-x-sm">
            <q-btn dense flat class="gt-sm" to="/">
              <q-avatar class="ss-logo" size="30px">
                <img src="@/assets/images/logo.svg" />
              </q-avatar>
              <span class="q-ml-xs gt-lg">SS</span>
            </q-btn>
            <q-btn v-if="signStatus" dense flat class="gt-sm" to="/d2r/account">
              <q-icon name="settings" size="xs" />
              <span class="q-ml-sm gt-lg">{{$t('d2r.account.title')}}</span>
            </q-btn>
            <q-btn dense flat :disable="processSignOut" class="gt-sm" @click="sign">
              <q-icon :name="signStatus ? 'fas fa-sign-out-alt' : 'fas fa-user-circle'" size="20px" />
              <span class="q-ml-sm gt-lg">{{ signStatus ? $t('signOut.title') : $t('signIn.title') }}</span>
            </q-btn>
            <q-btn-dropdown class="gt-sm" dense dropdown-icon="language" no-icon-animation size="md"
              content-style="background-color:rgba(200,200,200,0.1) !important;box-shadow: 0 0 4px 0 rgba(200,200,200,0.6)">
              <q-list class="text-grey-7" dark separator>
                <q-item dense v-for="(option, index) in options" :key="index" clickable v-close-popup
                  @click="lang = option.value" :active="lang === option.value"
                  active-class="text-grey-2 text-weight-bold">
                  <q-item-section>
                    <q-item-label>{{option.label}}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-input v-if="$route.name !== 'd2r-search'" dark dense standout outlined color="yellow-10"
              :label="$t('btn.search')" v-model="text" input-class="text-left" input-style="width:50vw"
              class="col-6 q-ml-md gt-md" @keyup.enter="search" :error="text.length > 20" hide-bottom-space
              no-error-icon>
              <template v-slot:append>
                <q-icon v-if="text === ''" name="search" />
                <q-icon v-else name="close" class="cursor-pointer" @click="text = ''" />
              </template>
            </q-input>
          </div>
        </q-toolbar>
      </q-header>
      <q-drawer dark no-swipe-open no-swipe-close v-model="drawer" side="left" behavior="mobile" class="font-kodia"
        content-class="d2r-drawer text-title" :width="240" elevated>
        <q-scroll-area class="fit">
          <q-list>
            <q-item>
              <q-item-section>
                <q-select dark dense outlined separator emit-value map-options color="title" behavior="menu"
                  v-model="lang" :options="options" popup-content-class="font-kodia bg-black"
                  popup-content-style="opacity:.9" :label="$t('language')" />
              </q-item-section>
            </q-item>
            <q-item v-if="$route.name !== 'd2r-search'">
              <q-item-section>
                <q-input dark dense standout outlined :label="$t('btn.search')" color="title" v-model="text"
                  input-class="text-left" @keyup.enter="search" :error="text.length > 20" hide-bottom-space
                  no-error-icon>
                  <template v-slot:append>
                    <q-icon v-if="text === ''" name="search" />
                    <q-icon v-else name="close" class="cursor-pointer" @click="text = ''" />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-item to="/" active-class="none">
              <q-item-section avatar>
                <q-avatar class="ss-d2r" size="30px">
                  <img src="@/assets/images/logo.svg" style="width:30px !important;" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                SeraSome
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item active-class="bg-teal-4" @click="sign" clickable>
              <q-item-section avatar>
                <q-icon size="24px" :name="signStatus ? 'fas fa-sign-out-alt' : 'fas fa-user-circle'" />
              </q-item-section>
              <q-item-section>
                {{ signStatus ? $t('signOut.title') : $t('signIn.title') }}
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item v-if="signStatus" to="/d2r/account">
              <q-item-section avatar>
                <q-icon size="24px" name="settings" />
              </q-item-section>
              <q-item-section>
                {{$t('d2r.account.title')}}
              </q-item-section>
            </q-item>
            <q-separator v-if="signStatus === true" />
            <q-expansion-item exact default-opened to="/d2r" exact-active-class="active text-transparent">
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon size="24px" name="fas fa-star-of-david" class="text-d2r d2r-logo-w" />
                </q-item-section>
                <q-item-section>
                  D2R
                </q-item-section>
              </template>
              <q-item v-for="sec in section" :key="sec.name" :inset-level="0.5" :to="`/d2r/bbs/${sec.value}`"
                active-class="active">
                <q-item-section avatar>
                  <q-icon size="20px" :name="sec.icon" />
                </q-item-section>
                <q-item-section>
                  {{sec.label}}
                </q-item-section>
              </q-item>
              <q-item :inset-level="0.5" to="/d2r/knowledge" active-class="active">
                <q-item-section avatar>
                  <q-icon size="20px" name="fas fa-book" />
                </q-item-section>
                <q-item-section>
                  {{$t('d2r.knowledge.title')}}
                </q-item-section>
              </q-item>
              <q-item v-if="signStatus" :inset-level="0.5" to="/d2r/storage" active-class="active">
                <q-item-section avatar>
                  <q-icon size="20px" name="inventory_2" />
                </q-item-section>
                <q-item-section>
                  {{$t('d2r.storage.title')}}
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <q-page-sticky v-if="$route.meta.progress" style="z-index: 1;" expand position="top" class="desktop-only">
          <q-linear-progress :value="progress" color="d2r" size="xs" />
          <q-scroll-observer debounce="100" @scroll="onScroll" />
        </q-page-sticky>
        <div :class="['row q-mx-sm', $q.screen.lt.md ? 'q-mt-sm' : 'q-mt-lg']">
          <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-xs-12">
            <router-view />
            <q-dialog v-model="d2rInfo.beginner" transition-show="rotate" transition-hide="rotate" persistent>
              <q-card class="full-width non-selectable bg-grey-3">
                <q-card-section class="no-padding">
                  <q-toolbar class="glossy text-h7 text-weight-bold bg-grey-5">
                    <div>{{$t('d2r.beginner.title')}}</div>
                  </q-toolbar>
                </q-card-section>
                <q-card-section class="no-padding" style="padding:10px !important;">
                  <q-carousel keep-alive animated transition-prev="scale" transition-next="scale" v-model="step"
                    ref="carousel" :height="carouselHeight" class="bg-transparent">
                    <q-carousel-slide :name="1" class="no-scroll no-padding text-center">
                      <p>{{$t('d2r.beginner.welcome')}}</p>
                      <p>{{$t('d2r.beginner.notice')}}</p>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" class="no-scroll no-padding row justify-center">
                      <div class="col-12 col-sm-8">
                        <q-input ref="nickname" autofocus bg-color="white" outlined v-model="basicInfo.nickname"
                          :label="$t('d2r.beginner.nickname')" :hint="$t('d2r.beginner.hint')" :error="basicInfo.error"
                          @input="enter()" :error-message="basicInfo.message" no-error-icon>
                          <template v-slot:append>
                            <q-icon v-if="!basicInfo.duplicate" name="check" color="green-6" />
                          </template>
                        </q-input>
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="3" class="no-padding">
                      <q-uploader class="full-width" ref="uploader" :disable="loading" accept="image/*"
                        :factory="postWithAvatar" :label="$t('d2r.account.avatar')" @added="added" @removed="removed"
                        @uploaded="complete" @failed="failed" @start="start" @finish="finish" hide-upload-btn>
                        <template v-slot:list="scope">
                          <q-list separator>
                            <q-item v-for="file in scope.files" :key="file.name">
                              <q-item-section>
                                <q-item-label class="full-width ellipsis">
                                  {{ file.name }}
                                </q-item-label>
                                <q-item-label caption>
                                  Status: {{ file.__status }}
                                </q-item-label>
                                <q-item-label caption>
                                  {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                                </q-item-label>
                              </q-item-section>
                              <q-item-section v-if="file.__img" thumbnail>
                                <img :src="file.__img.src">
                              </q-item-section>
                              <q-item-section top side>
                                <q-btn size="12px" flat dense round icon="delete" @click="scope.removeFile(file)" />
                              </q-item-section>
                            </q-item>
                          </q-list>
                        </template>
                      </q-uploader>
                    </q-carousel-slide>
                    <template v-slot:control>
                      <q-carousel-control position="bottom-right" :offset="[18, 4]"
                        class="q-gutter-xs row q-px-xs justify-between items-center full-width corousel-control">
                        <div>
                          <q-btn v-if="step !== 1" dense glossy padding="0 10px" color="grey-1" text-color="black"
                            :label="$t('d2r.beginner.prev')" @click="$refs.carousel.previous()" />
                        </div>
                        <div class="row justify-end q-gutter-x-sm">
                          <div v-if="step === 2">
                            <q-btn v-if="checkValidate && basicInfo.duplicate" dense glossy padding="0 10px"
                              :ripple="false" color="green-8" :label="$t('d2r.beginner.check')"
                              @click="checkDuplicate()" />
                          </div>
                          <div v-if="step !== 3">
                            <q-btn dense glossy padding="0 10px" :ripple="false" color="light-blue-8"
                              :label="$t('d2r.beginner.next')" @click="next()" />
                          </div>
                          <div v-else>
                            <q-btn dense glossy padding="0 10px" color="green-6" text-color="white" icon="done"
                              :label="$t('d2r.beginner.submit')" @click="onSubmit()" />
                          </div>
                        </div>
                      </q-carousel-control>
                    </template>
                  </q-carousel>
                </q-card-section>
              </q-card>
            </q-dialog>
          </div>
        </div>
        <div class="platform-ios-only" style="padding-bottom: 12vh;"></div>
        <q-page-scroller position="bottom-left" :scroll-offset="150" :offset="[0, 0]"
          style="position: absolute;z-index: 2;">
          <q-btn push :style="$q.screen.lt.md ? 'left:10px;bottom:30px' : 'left:20vw;bottom:20px'" round size="md"
            icon="keyboard_arrow_up" color="d2r" />
        </q-page-scroller>
      </q-page-container>
      <q-footer class="ss-footer row justify-between items-center" height-hint="56">
        <div class="col-4 gt-sm"></div>
        <div class="col q-ma-none col-md-4 row justify-center items-center q-gutter-x-xs text-caption">
          <q-avatar size="md">
            <img src="@/assets/images/logo.svg" />
          </q-avatar>
          <div class="row justify-start items-center q-gutter-x-xs">
            <div class="lt-sm font-kodia">D2R</div>
            <div class="gt-xs font-kodia">Diablo® II Resurrected</div>
            <div>by SeraSome @2021</div>
          </div>
        </div>
        <div class="col gt-sm row justify-end q-ma-sm">
        </div>
      </q-footer>
    </q-layout>
    <d2r-zoom :images="images"></d2r-zoom>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    name: 'd2r-layout',
    data() {
      return {
        progress: 0,
        loading: false,
        wrapClass: ['d2r-body'],
        tempDark: false,
        drawer: false,
        basicInfo: {
          nickname: null,
          error: false,
          duplicate: true,
          message: '',
          fileList: []
        },
        text: '',
        processSignOut: false,
        lang: this.$q.cookies.has(process.env.VUE_APP_LANGUAGE_NAME) ? this.$q.cookies.get(process.env.VUE_APP_LANGUAGE_NAME) : 'ko',
        options: [
          { label: '한국어', value: 'ko' },
          { label: 'ENGLISH', value: 'en' }
        ],
        step: 1
      }
    },
    created() {
      this.initD2R(true)
    },
    watch: {
      '$route': function () {
        this.initD2R()
      },
      lang: function (val, old) {
        if (val !== old) {
          this.$i18n.loadLanguageAsync(val).then(() => {
            this.$router.go()
          })
        }
      }
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus',
        section: 'getSection',
        d2rInfo: 'getD2RInfo',
        images: 'getD2RImages'
      }),
      checkValidate() {
        return /^[0-9a-zA-Z]{1,32}$/mi.test(this.basicInfo.nickname || '')
      },
      carouselHeight() {
        const sm = this.$q.screen.lt.md
        return sm ? [0, '130px', '130px', '170px', '200px'][this.step] : [0, '90px', '140px', '190px'][this.step]
      }
    },
    methods: {
      ...mapActions({
        setBeginner: 'setBeginner',
        setD2RInfo: 'setD2RInfo'
      }),
      onScroll(info) {
        let scrollTop = info.position
        let docHeight = document.body.offsetHeight
        let winHeight = window.innerHeight
        let scrollPercent = scrollTop / (docHeight - winHeight) || 0
        let scrollPercentRounded = Math.round(scrollPercent * 100) / 100
        this.progress = scrollPercentRounded
      },
      initD2R(enter) {
        if (this.$q.dark.isActive)
          this.$q.dark.set(false)

        document.body.classList.add('d2r-black')

        if (enter)
          this.timer = setTimeout(() => {
            if (this.wrapClass.indexOf('show') === -1)
              this.wrapClass.push('show')
          }, 500)
        else {
          if (this.wrapClass.indexOf('show') === -1)
            this.wrapClass.push('show')
        }
      },
      home() {
        if (this.$router.currentRoute.path.replace(/\//gi, '') === 'd2r')
          this.$router.go()
        else
          this.$router.push({ name: 'd2r-main' }).catch(() => { })

      },
      search() {
        if (this.text.trim() !== '' && this.text.trim().length <= 20)
          this.$router.push({ name: 'd2r-search', params: { text: this.text } }).catch(() => { })
      },
      sign() {
        const vm = this
        if (this.signStatus === true) {
          this.processSignOut = true
          this.axios
            .get('/seras/account/signout')
            .then(function () {
            })
            .catch(function () { })
            .then(function () {
              vm.processSignOut = false
              vm.$router.go()
            })
        } else
          vm.$router.push({ name: 'sign', params: { redirect: encodeURIComponent(vm.$route.path) } }).catch(() => { })
      },
      check() {
        if (this.checkValidate === false) {
          this.basicInfo.error = true
          this.basicInfo.message = this.$t('d2r.beginner.invalid')
          return false
        }
        else if (this.basicInfo.duplicate === true) {
          this.basicInfo.error = true
          this.basicInfo.message = this.$t('d2r.beginner.requireCheck')
          return false
        }

        this.basicInfo.error = false
        return true
      },
      checkDuplicate() {
        const vm = this
        this.loading = true
        this.axios
          .get('/d2r/account/nickname', {
            params: {
              nickname: encodeURIComponent(this.basicInfo.nickname)
            }
          })
          .then(function (response) {
            const status = response.data.result !== 0
            vm.basicInfo.duplicate = status
            vm.basicInfo.error = status
            vm.basicInfo.message = response.data.result > 0 ? vm.$t('d2r.beginner.inUse') : response.data.result === -1 ? vm.$t('d2r.beginner.reserved') : vm.basicInfo.message
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      enter() {
        this.basicInfo.duplicate = true
        this.check()
      },
      next() {
        if (this.step === 2) {
          if (this.check() === true)
            this.$refs.carousel.next()
          else {
            this.$refs.nickname.focus()
          }
        }
        else
          this.$refs.carousel.next()
      },
      added(files) {
        const exists = this.basicInfo.fileList.map(f => f.name)
        const addFiles = (files.filter(f => !exists.includes(f.name)))
        this.basicInfo.fileList = [...this.basicInfo.fileList, ...addFiles]
      },
      removed(files) {
        const exists = this.basicInfo.fileList.map(f => f.name)
        const filter = files.filter(f => exists.includes(f.name))
        filter.forEach(f => {
          if (f.__img) {
            const findIndex = this.basicInfo.fileList.findIndex(fi => fi.__img.src === f.__img.src)

            if (findIndex !== -1)
              this.basicInfo.fileList.splice(findIndex, 1)
          }
        })
      },
      onSubmit() {
        if (this.basicInfo.fileList.length > 0)
          this.$refs.uploader.upload()
        else
          this.post()
      },
      postWithAvatar() {
        return {
          url: `${this.axios.defaults.baseURL}/d2r/account/insert`,
          method: 'POST',
          withCredentials: true,
          formFields: [
            {
              'name': 'basicInfo',
              'value': encodeURIComponent(JSON.stringify({
                nickname: this.basicInfo.nickname
              }))
            }
          ]
        }
      },
      post() {
        const vm = this
        this.loading = true
        this.axios
          .post('/d2r/account/insert', {
            basicInfo: encodeURIComponent(JSON.stringify({
              nickname: this.basicInfo.nickname
            }))
          }).then(function (response) {
            vm.complete({
              xhr: {
                response: JSON.stringify(response.data)
              }
            })
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      complete(info) {
        this.setD2RInfo(JSON.parse(info.xhr.response))
        this.$router.go()
      },
      failed(info) {
        this.$q.notify({
          type: 'negative',
          color: 'negative',
          message: this.$t('d2r.account.message.failed').concat(' (', info.xhr.response, ')')
        })
      },
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    }
  }
</script>
<style>
  .d2r-black {
    background-color: #000000 !important;
  }

  .text-d2r {
    color: #660000 !important;
  }

  @font-face {
    font-family: 'Kodia';
    src: url('/static/fonts/kodia.woff') format('woff');
    font-weight: bolder;
  }

  .font-kodia {
    font-family: 'Kodia';
  }

  .bg-d2r {
    background-color: #660000 !important;
  }

  .d2r-body .q-btn {
    color: #AAAAAA;
  }

  .d2r-logo-b {
    text-shadow: 0 -1px 2px rgb(255, 255, 255, 0.4);
  }

  .d2r-logo-w {
    text-shadow: 0 1px 2px rgb(0, 0, 0, 0.6);
  }

  .text-title {
    color: #b89c5b !important;
  }

  .bg-title {
    background-color: #b89c5b !important;
  }

  .title-size {
    font-size: 1.2em;
  }

  .d2r-drawer {
    background-color: rgba(10, 13, 13, .9) !important;
  }

  .d2r-drawer .q-separator {
    background-color: rgba(28, 32, 32, 1);
  }

  .d2r-drawer .active {
    color: rgba(10, 13, 13, 1) !important;
    background-color: rgba(184, 156, 91, 0.7) !important;
    font-weight: bold;
  }
</style>
<style scoped>
  .d2r-body,
  .d2r-back {
    background-color: rgba(0, 0, 0, 1) !important;
  }

  .d2r-body::before {
    content: '';
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(5, 5, 5, 0.93) 80%, rgba(10, 10, 10, 1)), url('/static/images/d2r_back.jpg') repeat !important;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: opacity 1s ease;
  }

  .d2r-body.show::before {
    opacity: 1;
  }

  .d2r-body .q-page-container,
  .d2r-body .q-page-container {
    color: #CCCCCC;
  }

  .d2r-header {
    box-shadow: 0 -1px 4px 1px rgba(50, 50, 50, 0.5) inset;
  }

  .d2r-flame {
    font-size: 27px;
    font-weight: bolder !important;
    text-shadow: 1px 1px 1px rgb(0, 0, 0), 0 0 3px rgb(251, 255, 0), 0 -1px 5px rgb(255, 136, 0), 0 -3px 10px rgb(255, 38, 0);
    color: #000000 !important;
  }

  .d2r-sub-title {
    font-weight: 500 !important;
    font-size: 16px;
    line-height: 16px;
    color: rgb(240, 156, 0);
    text-shadow: 0 0 1px rgb(251, 255, 0), 0 -1px 2px rgb(255, 136, 0), 0 -3px 8px rgb(255, 38, 0);
  }

  .text-h7 {
    font-size: 1em;
  }

  .ss-logo img {
    width: 30px !important;
    height: 30px !important;
    filter: brightness(80%) grayscale(100%);
  }

  .corousel-control a {
    text-decoration: none;
  }

  .ss-footer {
    background-color: rgba(21, 21, 21, 0.6) !important;
    color: #666666;
  }

  .ss-footer img {
    filter: brightness(70%) hue-rotate(210deg) !important;
  }

  .ss-d2r {
    filter: hue-rotate(50deg) invert(100%);
  }
</style>