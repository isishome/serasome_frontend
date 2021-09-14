import Vue from 'vue'
import App from './App.vue'
import './quasar'
import i18n from './setup/i18n-setup'
import mixin from './setup/mixin'
import VueRouter from 'vue-router'
import routes from './router/routes'
import store from './store/'
import axios from 'axios'
import vuePlugin from "./plugin/highlight"
const Logo = () => import(/* webpackChunkName: "group-component" */ '@/components/seras/Logo')
const PostList = () => import(/* webpackPrefetch: true */ '@/components/seras/PostList')
const PostRead = () => import(/* webpackPrefetch: true */ '@/components/seras/PostRead')
const Confirm = () => import(/* webpackChunkName: "group-component" */ '@/components/seras/Confirm')
const Prompt = () => import(/* webpackChunkName: "group-component" */ '@/components/seras/Prompt')
const d2rTable = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Table')
const d2rTh = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Th')
const d2rList = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/List')
const d2rRead = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Read')
const d2rWrite = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Write')
const d2rConfirm = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Confirm')
const d2rItem = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Item')
const d2rComments = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Comments')
const d2rSummary = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Summary')
const d2rTapPanel = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/TapPanel')
const d2rZoom = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Zoom')
import { Notify, Cookies, Dark, Loading } from 'quasar'
//import VFacebookLogin from 'vue-facebook-login-component'
import GAuth from 'vue-google-oauth2'

// Vue Router --------------------------------------------------------------------------------------------------------------------------------------------
const router = new VueRouter({
  mode: 'history',
  routes
  ,
  scrollBehavior(to, from, savedPosition) {
    const findTopScroll = to.matched.find(route => route.meta.topScroll)
    if (findTopScroll)
      return { x: 0, y: 0 }
    else if (savedPosition)
      return savedPosition
    else
      return
  }
})

router.beforeEach((to, from, next) => {
  Loading.hide()
  const lang = Cookies.has(process.env.VUE_APP_LANGUAGE_NAME) ? Cookies.get(process.env.VUE_APP_LANGUAGE_NAME) : 'ko'
  if (lang !== i18n.locale)
    i18n.loadLanguageAsync(lang).then(() => { }).catch(() => { }).then(() => { next() })
  else
    next()
})

router.beforeEach((to, from, next) => {
  const findTitle = to.matched.find(route => route.meta.title)
  document.title = findTitle ? findTitle.meta.title : process.env.VUE_APP_TITLE

  const findIndependent = to.matched.find(route => route.meta.independent)
  if (findIndependent && !findIndependent.components.independent) {
    findIndependent.components.independent = findIndependent.components.default
    delete findIndependent.components.default
  }
  store.dispatch('setIndependent', findIndependent !== undefined)

  if (store.getters.getPageScroller !== true)
    store.dispatch('setPageScroller', true)

  const preventScroll = to.matched.some(route => route.meta.preventScroll)
  document.body.style.overflow = preventScroll ? 'hidden' : ''

  const cookieDark = Cookies.has(process.env.VUE_APP_DARK_NAME) && Cookies.get(process.env.VUE_APP_DARK_NAME) === true
  if (cookieDark !== Dark.isActive)
    Dark.set(cookieDark)

  const requireAuth = to.matched.some(route => route.meta.requireAuth)
  const signedIn = Cookies.has(process.env.VUE_APP_STATUS_NAME) && Cookies.get(process.env.VUE_APP_STATUS_NAME) === true
  if (requireAuth && !signedIn) {
    Notify.create({
      type: 'negative',
      color: 'negative',
      message: i18n.t('system.message.requireSignIn')
    })

    router.replace({ name: 'sign', params: { redirect: encodeURIComponent(to.path) } }).catch(() => { })
  }

  next()
})

const getD2RInfo = function () {
  return new Promise((resolve, reject) => {
    if (store.getters.getD2RInfo === null) {
      axiosObject
        .get('/d2r/account/info')
        .then(function (response) {
          store.dispatch('setD2RInfo', response.data)
        })
        .catch(function () {
          reject()
        })
        .then(function () {
          resolve()
        })
    }
    else
      resolve()
  })
}

router.beforeEach((to, from, next) => {
  const checkD2R = to.matched.some(route => route.name.indexOf('d2r') !== -1)
  if (!checkD2R)
    next()
  else {
    Promise.all([getD2RInfo()]).then(function () {
      const checkGrade = to.matched.some(route => route.meta.checkGrade)
      const authority = store.getters.getAuthority(to.params.sec, to.meta.checkGrade)
      if (checkGrade && !authority) {
        Notify.create({
          type: 'negative',
          color: 'negative',
          message: i18n.t('d2r.message.noPermission')
        })
        if (from.name === 'sign' || from.name === null)
          router.replace('/d2r')
        else
          next(false)
      }
      else
        next()
    }).catch(() => {
      next(false)
    })
  }
})
// Vue Router --------------------------------------------------------------------------------------------------------------------------------------------

// Axios -------------------------------------------------------------------------------------------------------------------------------------------------
let axiosObject = axios.create({
  baseURL: `${process.env.VUE_APP_BE_HOST ? process.env.VUE_APP_BE_HOST : window.location.protocol.concat('//', window.location.hostname, ':', process.env.VUE_APP_BE_PORT)}`,
  timeout: 180000,
  withCredentials: true
})

axiosObject.interceptors.request.use((config) => {
  const lang = Cookies.has(process.env.VUE_APP_LANGUAGE_NAME) ? Cookies.get(process.env.VUE_APP_LANGUAGE_NAME) : 'ko'
  config.headers.common['Accept-Language'] = lang
  return config
})

axiosObject.interceptors.response.use((response) => {
  const statusCode = typeof (response) === 'object' ? response.status : null;
  const signStatus = Cookies.has(process.env.VUE_APP_STATUS_NAME) && Cookies.get(process.env.VUE_APP_STATUS_NAME) === true

  if (store.getters.getSignStatus !== signStatus)
    store.dispatch('setSignStatus', signStatus)

  if (statusCode === 202)
    store.dispatch('setBeginner', true)

  if (statusCode === 203) {
    Notify.create({
      type: 'negative',
      color: 'negative',
      message: i18n.t('system.message.unavailableService')
    })

    router.push({ name: 'd2r' }).catch(() => { })
    return
  }

  return response
}, (error) => {
  const statusCode = typeof (error.response) === 'object' ? error.response.status : null;
  let msg = i18n.t('system.message.occurErrorRequest')

  if (typeof (error.response) === 'object' && error.response && error.response.data && typeof (error.response.data) === 'string')
    msg = error.response.data
  else if (error.message && typeof (error.message) === 'string')
    msg = error.message

  Notify.create({
    type: 'negative',
    color: 'negative',
    message: msg
  })

  if (statusCode === 401) {
    store.dispatch('setSignStatus', false)
    store.dispatch('setSomeList', null)
    store.dispatch('setCurrentSome', false)
    router.push({ name: statusCode === 401 ? 'sign' : 'join' }).catch(() => { })
  }
  else if (statusCode === 303) {
    if (router.currentRoute.name !== 'main')
      router.push({ name: 'main' }).catch(() => { })
  }

  return Promise.reject(error);
})
// Axios -------------------------------------------------------------------------------------------------------------------------------------------------

// ThumbStyle --------------------------------------------------------------------------------------------------------------------------------------------
Vue.prototype.thumbStyle = {
  right: '4px',
  backgroundColor: '#777777',
  width: '3px',
  transform: 'scaleY(0.96)',
  opacity: 0.5,
  zIndex: 3000
}
// ThumbStyle --------------------------------------------------------------------------------------------------------------------------------------------

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(GAuth, { clientId: process.env.VUE_APP_GOOGLE_CLIENTID, scope: 'profile email' })
Vue.prototype.axios = axiosObject
Vue.component('ss-logo', Logo)
Vue.component('ss-post-list', PostList)
Vue.component('ss-post-read', PostRead)
Vue.component('ss-confirm', Confirm)
Vue.component('ss-prompt', Prompt)
Vue.component('d2r-table', d2rTable)
Vue.component('d2r-th', d2rTh)
Vue.component('d2r-list', d2rList)
Vue.component('d2r-read', d2rRead)
Vue.component('d2r-write', d2rWrite)
Vue.component('d2r-confirm', d2rConfirm)
Vue.component('d2r-item', d2rItem)
Vue.component('d2r-comments', d2rComments)
Vue.component('d2r-summary', d2rSummary)
Vue.component('d2r-tap-panel', d2rTapPanel)
Vue.component('d2r-zoom', d2rZoom)
//Vue.component('v-facebook-login', VFacebookLogin)

Vue.mixin(mixin)
Vue.use(vuePlugin)
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')