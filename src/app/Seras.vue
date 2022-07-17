<template>
  <div id="app">
    <q-layout view="hHh lpR lfr" v-if="!independent">
      <q-header height-hint="98" class="q-dark q-py-xs" elevated>
        <q-toolbar>
          <!-- toolbar left -->
          <div class="row justify-start items-center nunito">
            <q-btn dense flat class="lt-md" @click="drawer = !drawer">
              <q-icon name="menu" size="16px" />
            </q-btn>
            <q-btn dense flat padding="xs" size="30px" class="gt-sm" @click="home">
              <q-avatar class="ss-header">
                <img src="@/assets/images/seras.svg" />
              </q-avatar>
              <span class="col q-ml-sm text-teal-4 gt-sm font-logo">SERA<span class="text-amber-7">SOME</span></span>
            </q-btn>
          </div>
          <q-space class="lt-md" />
          <div class="lt-md nunito row justify-center">
            <q-btn flat dense class="row justify-center" @click="home">
              <q-avatar round class="ss-header">
                <img src="@/assets/images/seras.svg" />
              </q-avatar>
              <span class="q-ml-sm text-h6 text-teal-4 lt-md gt-xs font-logo">SERA<span
                  class="text-amber-7">SOME</span></span>
              <span class="q-ml-sm text-h6 text-teal-4 lt-sm font-logo">S'<span class="text-amber-7">S<span
                    class="text-caption font-logo ">ome</span></span></span>
            </q-btn>
          </div>
          <q-space />
          <!-- toolbar right -->
          <div class="row justify-end items-center q-gutter-x-sm">
            <q-input v-if="$route.name !== 'search'" color="teal-7" dark dense standout outlined
              :label="$t('btn.search')" v-model="text" input-class="text-left" class="q-ml-md gt-sm"
              @keyup.enter="search" :error="text.length > 20" hide-bottom-space no-error-icon>
              <template v-slot:append>
                <q-icon v-if="text === ''" name="search" />
                <q-icon v-else name="close" class="cursor-pointer" @click="text = ''" />
              </template>
            </q-input>
            <q-btn dense flat outline class="gt-sm" @click="goD2R">
              <q-avatar icon="stars" size="md" />
              <span class="q-ml-sm gt-lg">D2R</span>
            </q-btn>
            <q-btn dense flat class="gt-sm" to="/lotto">
              <q-icon name="swap_vertical_circle" size="sm" />
              <span class="q-ml-sm gt-lg">{{ $t('lotto.title') }}</span>
            </q-btn>
            <q-btn dense flat class="gt-sm" to="/annuity">
              <q-icon name="group_work" size="sm" />
              <span class="q-ml-sm gt-lg">{{ $t('annuity.title') }}</span>
            </q-btn>
            <q-btn dense flat v-if="signStatus" class="full-height gt-sm" to="/linked">
              <q-icon name="link" size="xs" />
              <span class="q-ml-sm gt-lg">{{ $t('link.title') }}</span>
            </q-btn>
            <q-btn v-if="signStatus" dense flat class="gt-sm" to="/info">
              <q-icon name="settings" size="24px" />
              <span class="q-ml-sm gt-lg">{{ $t('myInfo.title') }}</span>
            </q-btn>
            <q-btn dense flat :disable="processSignOut" class="gt-sm" @click="sign">
              <q-icon :name="signStatus ? 'logout' : 'account_circle'" size="20px" />
              <span class="q-ml-sm gt-lg">{{ signStatus ? $t('signOut.title') : $t('signIn.title') }}</span>
            </q-btn>
            <q-btn-dropdown class="gt-sm" dense dropdown-icon="language" no-icon-animation size="md"
              content-style="background-color:rgba(255,255,255,0.8) !important;box-shadow: 0 0 4px 0 rgba(0,0,0,1);">
              <q-list class="text-grey-10" separator>
                <q-item dense :dark="false" v-for="(option, index) in options" :key="index" clickable v-close-popup
                  @click="lang = option.value" :active="lang === option.value"
                  active-class="text-teal-8 text-weight-bold">
                  <q-item-section>
                    <q-item-label>{{ option.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <div>
              <q-toggle class="q-px-xs" dense v-model="$q.dark.mode" @input="toggleDark" color="grey-7" size="sm"
                icon-color="blue-grey-10" icon="dark_mode" />
            </div>
          </div>
        </q-toolbar>
        <!-- tabs -->
        <q-tabs class="nunito text-weight-bold gt-sm" narrow-indicator indicator-color="teal-4" active-color="teal-4"
          align="left" no-caps>

          <q-route-tab v-for="someItem in someList" :key="someItem.sid" :to="`/@${someItem.name}`">
            <q-icon :name="someItem.icon ? someItem.icon : someItem.owner === true ? 'copyright' : 'auto_awesome'"
              class="q-ma-sm" size="20px" color="amber-7" />
            <div class="ellipsis">{{ someItem.name }}</div>
          </q-route-tab>
          <q-route-tab v-if="currentSome" :to="`/@${currentSome.name}`">
            <q-icon :name="currentSome.icon ? currentSome.icon : 'help'" class="q-ma-sm" size="20px" color="amber-7" />
            <span class="ellipsis">{{ currentSome.name }}</span>
          </q-route-tab>
        </q-tabs>

      </q-header>
      <q-drawer no-swipe-open no-swipe-close no-swipe-backdrop v-model="drawer" side="left" behavior="mobile"
        :width="240" class="nunito text-weight-bold" elevated>
        <q-scroll-area class="fit">
          <q-list>
            <q-item>
              <q-item-section>
                <q-select color="teal-7" dense outlined emit-value map-options v-model="lang" behavior="menu"
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
                <q-icon size="22wpx" name="link" />
              </q-item-section>
              <q-item-section>
                {{ $t('link.title') }}
              </q-item-section>
            </q-item>
            <q-separator v-if="signStatus === true" />
            <q-item v-if="signStatus === true" to="/info" active-class="bg-teal-4">
              <q-item-section avatar>
                <q-icon size="24px" name="settings" />
              </q-item-section>
              <q-item-section>
                {{ $t('myInfo.title') }}
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item v-if="$route.name !== 'sign'" active-class="bg-teal-4" @click="sign" clickable>
              <q-item-section avatar>
                <q-icon size="24px" :name="signStatus ? 'logout' : 'account_circle'" />
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
                  :name="someItem.icon ? someItem.icon : someItem.owner === true ? 'copyright' : 'auto_awesome'" />
              </q-item-section>
              <q-item-section>
                {{ someItem.name }}
              </q-item-section>
            </q-item>
            <q-separator v-if="currentSome" />
            <q-item v-if="currentSome" :to="`/@${currentSome.name}`" active-class="bg-teal-4">
              <q-item-section avatar>
                <q-icon size="24px" :name="currentSome.icon ? currentSome.icon : 'help'" />
              </q-item-section>
              <q-item-section>
                {{ currentSome.name }}
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="goD2R">
              <q-item-section avatar>
                <q-avatar icon="stars" size="24px" font-size="24px" />
                <!-- <q-icon size="24px" name="star" class="text-d2r d2r-logo-w" /> -->
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
                {{ $t('lotto.title') }}
              </q-item-section>
            </q-item>
            <q-item to="/annuity" active-class="bg-teal-4">
              <q-item-section avatar>
                <q-icon size="24px" name="group_work" />
              </q-item-section>
              <q-item-section>
                {{ $t('annuity.title') }}
              </q-item-section>
            </q-item>
            <q-separator :bordered="categoryInfo !== null" />
            <q-expansion-item :value="!signStatus">
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon color="yellow-14" name="star" />
                </q-item-section>
                <q-item-section>
                  {{ $t('main.category') }}
                </q-item-section>
              </template>
              <q-item :inset-level="0.5" v-for="category in categoryInfo" :key="category.cid"
                :to="`/category/${category.cid}`" v-ripple active-class="bg-teal-4">
                <q-item-section avatar>
                  <q-icon size="24px" :name="category.icon" :color="category.color" />
                </q-item-section>
                <q-item-section>
                  {{ category.name }}
                </q-item-section>
              </q-item>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <router-view name="carousel" />
        <div :class="['row q-mx-sm', $q.screen.lt.md ? 'q-mt-sm' : 'q-mt-lg']">
          <div class="gt-sm col row justify-end" style="padding:90px 6px 0 0;">
            <adsense v-if="noAD === false && $q.screen.gt.md === true && isProduction === true" class="overflow-hidden"
              data-ad-client="ca-pub-5110777286519562" data-ad-slot="7331759838"
              :width="$q.screen.gt.md ? '160px' : '120px'" height="600px" horizontal="right" :key="`al-${key}`">
            </adsense>
          </div>
          <q-page class="col-xl-6 col-lg-8 col-md-10 col-12">
            <router-view />
          </q-page>
          <div class="gt-sm col row items-start" style="padding:90px 0 0 6px;">
            <adsense v-if="noAD === false && $q.screen.gt.md === true && isProduction === true"
              data-ad-client="ca-pub-5110777286519562" data-ad-slot="7962315221"
              :width="$q.screen.gt.md ? '160px' : '120px'" height="600px" fixed horizontal="left" :key="`ar-${key}`">
            </adsense>
          </div>
        </div>
        <div class="platform-ios-only q-py-md"></div>
        <q-page-sticky v-show="pageScroller" v-if="writeCheck" position="bottom-right" :offset="[0, 10]"
          style="z-index: 1;">
          <q-btn push :style="$q.screen.gt.lg ? 'right:23vw' : $q.screen.gt.md ? 'right:14vw' : 'right:10px'" round
            :size="$q.screen.gt.md ? 'md' : 'sm'" icon="edit" color="orange" :to="`/@${$route.params.sname}/a`" />
          <div class="full-width platform-ios-only q-py-sm"></div>
        </q-page-sticky>
        <q-page-scroller v-show="pageScroller" position="bottom-left" :scroll-offset="150" :offset="[0, 10]"
          style="z-index: 1;">
          <q-btn push :style="$q.screen.gt.lg ? 'left:23vw' : $q.screen.gt.md ? 'left:14vw' : 'left:10px'" round
            :size="$q.screen.gt.md ? 'md' : 'sm'" icon="keyboard_arrow_up" color="teal-4" />
          <div class="full-width platform-ios-only q-py-sm"></div>
        </q-page-scroller>
      </q-page-container>
      <q-footer v-if="$q.screen.gt.sm" :class="$q.dark.isActive ? 'q-dark' : 'bg-grey-2 text-grey-7'"
        class="ss-footer row justify-between items-center" height-hint="56">
        <div class="col-4 gt-sm"></div>
        <div class="col q-ma-none col-md-4 row justify-center items-center q-gutter-x-xs text-caption">
          <q-avatar size="md">
            <img src="@/assets/images/seras.svg" />
          </q-avatar>
          <div>SeraSome @2022</div>
          <div class="absolute-right q-mr-lg row items-center">
            <a class="mailto" href="mailto:serasomething@gmail.com">{{ $t('mailto') }}</a>
          </div>
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
      isProduction: process.env.NODE_ENV === 'production',
      slide: 'first',
      language: this.$te('language', navigator.language || 'ko'),
      routeName: this.$route.name,
      drawer: false,
      text: '',
      processSignOut: false,
      scrollVisible: false,
      lang: this.$q.cookies.has(process.env.VUE_APP_LANGUAGE_NAME) ? this.$q.cookies.get(process.env.VUE_APP_LANGUAGE_NAME) : this.$q.lang.getLocale().substring(0, 2) || 'ko',
      options: [
        { label: '한국어', value: 'ko' },
        { label: 'ENGLISH', value: 'en' }
      ],
      key: 0
    }
  },
  watch: {
    '$route': function (to, old) {
      if (to !== old && old.name !== null) {
        this.checkStatus()
        this.key++
      }

      this.routeName = to.name
      this.drawer = false
      this.getCategory()

      if (!to.params.sname)
        this.setCurrentSome(false)
    },
    lang: function (val, old) {
      if (val !== old) {
        this.$q.cookies.set(process.env.VUE_APP_LANGUAGE_NAME, val, { path: '/', expires: '7300d' })
        this.$router.go()
      }
    },
    '$q.screen.gt.md': function (val, old) {
      if (val !== old)
        this.key++
    }
  },
  computed: {
    ...mapGetters({
      signStatus: 'getSignStatus',
      categoryInfo: 'getCategory',
      someList: 'getSomeList',
      currentSome: 'getCurrentSome',
      pageScroller: 'getPageScroller',
      independent: 'getIndependent',
      noAD: 'getNoAD',
    }),
    writeCheck() {
      return this.routeName === 'some' && this.signStatus === true && this.someList.find(s => s.name === this.$route.params.sname) && this.someList.find(s => s.name === this.$route.params.sname).auth.write
    }
  },
  created() {
    this.checkStatus()
    const cookieIsDark = this.$q.cookies.has(process.env.VUE_APP_DARK_NAME) ? this.$q.cookies.get(process.env.VUE_APP_DARK_NAME) : false
    this.$q.dark.set(cookieIsDark)
  },
  methods: {
    ...mapActions({
      setCategory: 'setCategory',
      setCurrentSome: 'setCurrentSome',
      setSignStatus: 'setSignStatus',
      setSomeList: 'setSomeList'
    }),
    checkStatus() {
      const vm = this
      if (this.signStatus === null || this.someList.length === 0) {
        this.axios
          .get('/seras/account/signstatus',
            {
              params: {
                t: Date.now()
              }
            })
          .then(function (response) {
            vm.setSignStatus(response.data.status)
            vm.setSomeList(response.data.someList)
          })
          .catch(function () { })
          .then(function () { })
      }
    },
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
    getCategory() {
      const vm = this
      if (this.categoryInfo !== null)
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
    },
    goD2R() {
      document.location.href = process.env.VUE_APP_D2R_URL
    }
  }
}
</script>
<style scoped>
</style>