<template>
  <div id="app">
    <q-layout view="hHh lpR lfr" v-if="!independent">
      <q-header height-hint="98" class="q-dark q-py-xs" elevated>
        <q-toolbar class="row justify-start items-center q-gutter-x-sm">
          <!-- toolbar 1 -->
          <div class="row justify-start items-center nunito">
            <q-btn dense flat class="lt-md" @click="drawer = !drawer">
              <q-icon name="fas fa-bars" size="16px" />
            </q-btn>
            <q-btn dense flat padding="xs" size="30px" class="gt-sm" @click="home">
              <q-avatar class="ss-header">
                <img src="@/assets/images/logo.svg" />
              </q-avatar>
              <span class="col q-ml-sm text-teal-4 gt-sm font-logo">SERA<span class="text-amber-7">SOME</span></span>
            </q-btn>
          </div>
          <!-- toolbar 2 -->
          <q-tabs class="nunito text-weight-bold gt-sm" switch-indicator indicator-color="teal-4" active-color="teal-4"
            align="left">
            <q-route-tab v-for="someItem in someList" :key="someItem.sid" :to="`/@${someItem.name}`" no-caps>
              <q-icon :name="someItem.icon ? someItem.icon : someItem.owner === true ? 'fas fa-cube' : 'fas fa-cubes'"
                class="q-ma-sm" size="20px" color="amber-7" />
              <div class="ellipsis">{{ someItem.name }}</div>
            </q-route-tab>
            <q-route-tab v-if="currentSome" :to="`/@${currentSome.name}`" no-caps>
              <q-icon :name="currentSome.icon ? currentSome.icon : 'fas fa-question'" class="q-ma-sm" size="20px"
                color="amber-7" />
              <span class="ellipsis">{{ currentSome.name }}</span>
            </q-route-tab>
          </q-tabs>
          <div class="absolute-center lt-md nunito">
            <q-btn flat dense size="30px" class="row justify-center" @click="home">
              <q-avatar round class="ss-header">
                <img src="@/assets/images/logo.svg" />
              </q-avatar>
              <span class="q-ml-sm text-h6 text-teal-4 lt-md gt-xs font-logo">SERA<span
                  class="text-amber-7">SOME</span></span>
              <span class="q-ml-sm text-h6 text-teal-4 lt-sm font-logo">S'<span class="text-amber-7">S<span
                    class="text-caption font-logo ">ome</span></span></span>
            </q-btn>
          </div>
          <!-- toolbar 3 -->
          <div class="absolute-right col-xl-5 col-lg-4 col-md-4 row justify-end items-center q-gutter-x-sm">
            <q-btn dense flat class="gt-sm" to="/d2r">
              <q-icon name="fas fa-star-of-david" size="22px" color="d2r" />
              <span class="q-ml-sm gt-lg">D2R</span>
            </q-btn>
            <q-btn dense flat class="gt-sm" to="/lotto">
              <q-icon name="swap_vertical_circle" size="sm" />
              <span class="q-ml-sm gt-lg">{{$t('lotto.title')}}</span>
            </q-btn>
            <q-btn dense flat class="gt-sm" to="/annuity">
              <q-icon name="group_work" size="sm" />
              <span class="q-ml-sm gt-lg">{{$t('annuity.title')}}</span>
            </q-btn>
            <q-btn dense flat v-if="signStatus" class="full-height gt-sm" to="/linked">
              <q-icon name="fas fa-link" size="xs" />
              <span class="q-ml-sm gt-lg">{{$t('link.title')}}</span>
            </q-btn>
            <q-btn v-if="signStatus" dense flat class="gt-sm" to="/info">
              <q-icon name="settings" size="24px" />
              <span class="q-ml-sm gt-lg">{{$t('myInfo.title')}}</span>
            </q-btn>
            <q-btn dense flat :disable="processSignOut" class="gt-sm" @click="sign">
              <q-icon :name="signStatus ? 'fas fa-sign-out-alt' : 'fas fa-user-circle'" size="20px" />
              <span class="q-ml-sm gt-lg">{{ signStatus ? $t('signOut.title') : $t('signIn.title') }}</span>
            </q-btn>
            <q-btn-dropdown class="gt-sm" dense dropdown-icon="language" no-icon-animation stretch size="md"
              content-style="background-color:rgba(255,255,255,0.8) !important;box-shadow: 0 0 4px 0 rgba(0,0,0,1);">
              <q-list class="text-grey-10" separator>
                <q-item dense :dark="false" v-for="(option, index) in options" :key="index" clickable v-close-popup
                  @click="lang = option.value" :active="lang === option.value"
                  active-class="text-teal-8 text-weight-bold">
                  <q-item-section>
                    <q-item-label>{{option.label}}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-input v-if="$route.name !== 'search'" color="teal-7" dark dense standout outlined
              :label="$t('btn.search')" v-model="text" input-class="text-left" class="col-2 q-ml-md gt-md"
              @keyup.enter="search" :error="text.length > 20" hide-bottom-space no-error-icon>
              <template v-slot:append>
                <q-icon v-if="text === ''" name="search" />
                <q-icon v-else name="close" class="cursor-pointer" @click="text = ''" />
              </template>
            </q-input>
            <div>
              <q-toggle class="q-px-xs" dense v-model="$q.dark.mode" @input="toggleDark" color="grey-7" size="sm"
                icon-color="blue-grey-10" icon="fas fa-adjust" />
            </div>
          </div>
        </q-toolbar>
      </q-header>
      <q-drawer no-swipe-open no-swipe-close no-swipe-backdrop v-model="drawer" side="left" behavior="mobile"
        :width="240" class="nunito text-weight-bold" elevated>
        <q-scroll-area class="fit">
          <q-list>
            <q-item>
              <q-item-section>
                <q-select color="teal-7" dense outlined emit-value map-options behavior="menu" v-model="lang"
                  :options="options" :label="$t('language')" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item v-if="$route.name !== 'search'">
              <q-item-section>
                <q-input dense standout outlined :label="$t('btn.search')" color="teal-7" v-model="text"
                  input-class="text-left" @keyup.enter="search" :error="text.length > 20" hide-bottom-space
                  no-error-icon>
                  <template v-slot:append>
                    <q-icon v-if="text === ''" name="search" />
                    <q-icon v-else name="close" class="cursor-pointer" @click="text = ''" />
                  </template>
                </q-input>
              </q-item-section>
            </q-item>
            <q-separator v-if="signStatus === true" />
            <q-item v-if="signStatus === true" to="/linked" active-class="bg-teal-4">
              <q-item-section avatar>
                <q-icon size="22wpx" name="fas fa-link" />
              </q-item-section>
              <q-item-section>
                {{$t('link.title')}}
              </q-item-section>
            </q-item>
            <q-separator v-if="signStatus === true" />
            <q-item v-if="signStatus === true" to="/info" active-class="bg-teal-4">
              <q-item-section avatar>
                <q-icon size="24px" name="settings" />
              </q-item-section>
              <q-item-section>
                {{$t('myInfo.title')}}
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item v-if="$route.name !== 'sign'" active-class="bg-teal-4" @click="sign" clickable>
              <q-item-section avatar>
                <q-icon size="24px" :name="signStatus ? 'fas fa-sign-out-alt' : 'fas fa-user-circle'" />
              </q-item-section>
              <q-item-section>
                {{ signStatus ? $t('signOut.title') : $t('signIn.title') }}
              </q-item-section>
            </q-item>
            <q-separator v-if="signStatus === true" />
            <q-item v-for="someItem in someList" :key="someItem.sid" :to="`/@${someItem.name}`"
              active-class="bg-teal-4">
              <q-item-section avatar>
                <q-icon size="24px"
                  :name="someItem.icon ? someItem.icon : someItem.owner === true ? 'fas fa-cube' : 'fas fa-cubes'" />
              </q-item-section>
              <q-item-section>
                {{ someItem.name }}
              </q-item-section>
            </q-item>
            <q-separator v-if="currentSome" />
            <q-item v-if="currentSome" :to="`/@${currentSome.name}`" active-class="bg-teal-4">
              <q-item-section avatar>
                <q-icon size="24px" :name="currentSome.icon ? currentSome.icon : 'fas fa-question'" />
              </q-item-section>
              <q-item-section>
                {{ currentSome.name }}
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item to="/d2r">
              <q-item-section avatar>
                <q-icon size="24px" name="fas fa-star-of-david" class="text-d2r d2r-logo-w" />
              </q-item-section>
              <q-item-section>
                D2R
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item to="/lotto" active-class="bg-teal-4">
              <q-item-section avatar>
                <q-icon size="24px" name="swap_vertical_circle" />
              </q-item-section>
              <q-item-section>
                {{$t('lotto.title')}}
              </q-item-section>
            </q-item>
            <q-item to="/annuity" active-class="bg-teal-4">
              <q-item-section avatar>
                <q-icon size="24px" name="group_work" />
              </q-item-section>
              <q-item-section>
                {{$t('annuity.title')}}
              </q-item-section>
            </q-item>
            <q-separator :bordered="categoryInfo !== null" />
            <q-expansion-item :value="!signStatus">
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon color="yellow-14" name="star" />
                </q-item-section>
                <q-item-section>
                  {{$t('main.category')}}
                </q-item-section>
              </template>
              <q-item :inset-level="0.5" v-for="category in categoryInfo" :key="category.cid"
                :to="`/category/${category.cid}`" v-ripple active-class="bg-teal-4">
                <q-item-section avatar>
                  <q-icon size="24px" :name="category.icon" :color="category.color" />
                </q-item-section>
                <q-item-section>
                  {{category.name}}
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <router-view name="default" />
        <div class="platform-ios-only q-py-md"></div>
        <q-page-scroller v-show="pageScroller" position="bottom-left" :scroll-offset="150" :offset="[0, 0]">
          <q-btn push :style="$q.screen.lt.md ? 'left:10px;bottom:30px' : 'left:20vw;bottom:20px'" round size="md"
            icon="keyboard_arrow_up" color="teal-4" />
        </q-page-scroller>
        <q-page-sticky v-show="pageScroller" v-if="$route.name === 'some' && signStatus" position="bottom-right"
          :offset="[0, 0]">
          <q-btn push :style="$q.screen.lt.md ? 'right:10px;bottom:30px' : 'right:20vw;bottom:20px'" round size="md"
            icon="edit" color="orange" :to="`/@${$route.params.sname}/a`" />
        </q-page-sticky>
      </q-page-container>
      <q-footer :class="['gt-sm', $q.dark.isActive ? 'q-dark' : 'bg-grey-2 text-grey-7']"
        class="ss-footer row justify-between items-center" height-hint="56">
        <div class="col-4 gt-sm"></div>
        <div class="col q-ma-none col-md-4 row justify-center items-center q-gutter-x-xs text-caption">
          <q-avatar size="md">
            <img src="@/assets/images/logo.svg" />
          </q-avatar>
          <div>SeraSome @2020</div>
        </div>
        <div class="col gt-sm row justify-end q-ma-sm">
        </div>
      </q-footer>
    </q-layout>
    <router-view name="independent" v-else />
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        language: this.$te('language', navigator.language || 'ko'),
        routeName: '',
        drawer: false,
        text: '',
        processSignOut: false,
        scrollVisible: false,
        lang: this.$q.cookies.has(process.env.VUE_APP_LANGUAGE_NAME) ? this.$q.cookies.get(process.env.VUE_APP_LANGUAGE_NAME) : this.$q.lang.getLocale().substring(0, 2) || 'ko',
        options: [
          { label: '한국어', value: 'ko' },
          { label: 'ENGLISH', value: 'en' }
        ]
      }
    },
    watch: {
      '$route': function (to) {
        this.checkSignStatus()
        this.routeName = to.name
        this.drawer = false
        this.getCategory()
        document.body.classList.remove('d2r-black')

        if (!to.params.sname)
          this.setCurrentSome(false)
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
        categoryInfo: 'getCategory',
        someList: 'getSomeList',
        currentSome: 'getCurrentSome',
        pageScroller: 'getPageScroller',
        independent: 'getIndependent'
      })
    },
    created() {
      document.body.classList.remove('d2r-black')
    },
    methods: {
      ...mapActions({
        setSignStatus: 'setSignStatus',
        setSomeList: 'setSomeList',
        setCategory: 'setCategory',
        setCurrentSome: 'setCurrentSome'
      }),
      toggleDark() {
        this.$q.cookies.set(process.env.VUE_APP_DARK_NAME, !this.$q.dark.isActive, { path: '/', expires: '7300d' })
        this.$q.dark.set(!this.$q.dark.isActive)
      },
      home() {
        if (this.$router.currentRoute.path === '/')
          this.$router.go()
        else
          this.$router.push({ name: 'main' }).catch(() => { })

      },
      search() {
        if (this.text.trim() !== '' && this.text.trim().length <= 20)
          this.$router.push({ name: 'search', params: { text: this.text } }).catch(() => { })
      },
      forcedMove() {
        if ((this.signStatus === true && this.routeName === 'sign') || (this.signStatus !== true && (this.routeName === 'info' || this.routeName === 'post-add' || this.routeName === 'post-modify')))
          this.$router.push('/').catch(() => { })
      },
      checkSignStatus() {
        const vm = this
        if (this.signStatus === null || this.someList === null) {
          this.axios
            .get('/seras/account/signstatus')
            .then(function (response) {
              vm.setSignStatus(response.data.status)
              vm.setSomeList(response.data.someList)
            })
            .catch(function () { })
            .then(function () {
              vm.forcedMove()
            })
        }
      },
      getCategory() {
        const vm = this
        const checkD2R = this.$route.matched.some(route => route.name.indexOf('d2r') !== -1)
        if (this.categoryInfo !== null || checkD2R)
          return

        this.axios
          .get('/seras/category/list')
          .then(function (response) {
            if (response && response.data) {
              vm.setCategory(response.data)
            }
          })
          .catch(() => { })
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
      }
    }
  }
</script>