import Vue from 'vue'
import App from '@/app/D2R.vue'
import '@/quasar'
import i18n from '@/setup/i18n-setup'
import mixin from '@/setup/mixin'
import VueRouter from 'vue-router'
import routes from '@/router/d2r'
import store from '@/store/d2r'
import axios from 'axios'
import vuePlugin from "@/plugin/highlight"

const Adsense = () => import(/* webpackChunkName: "etc-component" */ '@/components/etc/AdSense')
const Prompt = () => import(/* webpackChunkName: "group-component" */ '@/components/seras/Prompt')
const d2rTable = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Table')
const d2rTh = () => import(/* webpackChunkName: "d2r-component" */'@/components/d2r/Th')
const d2rList = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/List')
const d2rRead = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Read')
const d2rWrite = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Write')
const d2rConfirm = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Confirm')
const d2rItem = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Item')
const d2rComments = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Comments')
const d2rSummary = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Summary')
const d2rTapPanel = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/TapPanel')
const d2rZoom = () => import(/* webpackChunkName: "d2r-component" */ '@/components/d2r/Zoom')
import { Quasar, Notify, Cookies, Loading, Dark } from 'quasar'

const lang = Cookies.has(process.env.VUE_APP_LANGUAGE_NAME) ? Cookies.get(process.env.VUE_APP_LANGUAGE_NAME) : Quasar.lang.getLocale().substring(0, 2) || 'ko'

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

router.onError((error) => {
  if (error.name === 'ChunkLoadError') {
    window.location.reload()
  }
})

router.beforeEach((to, from, next) => {
  Loading.hide()
  i18n.loadLanguageAsync(lang).then(() => next())
})

router.beforeEach((to, from, next) => {
  const findTitle = to.matched.find(route => route.meta.title)
  document.title = findTitle ? findTitle.meta.title : process.env.VUE_APP_D2R_TITLE

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

  const findNoAD = to.matched.find(route => route.meta.noAD)
  store.dispatch('setNoAD', findNoAD !== undefined)

  const cookieDark = Cookies.has(process.env.VUE_APP_D2R_DARK_NAME) && Cookies.get(process.env.VUE_APP_D2R_DARK_NAME) === true
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

    document.location.href = '/sign'
  }

  next()
})
// Vue Router --------------------------------------------------------------------------------------------------------------------------------------------

// Axios -------------------------------------------------------------------------------------------------------------------------------------------------
let axiosObject = axios.create({
  baseURL: `${process.env.VUE_APP_BE_HOST ? process.env.VUE_APP_BE_HOST : window.location.protocol.concat('//', window.location.hostname, ':', process.env.VUE_APP_BE_PORT)}`,
  timeout: 180000,
  withCredentials: true
})

axiosObject.interceptors.request.use((config) => {
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

    router.push({ name: 'd2r-main' }).catch(() => { })
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
    document.location.href = statusCode === 401 ? '/sign' : '/join'
  }
  else if (statusCode === 303) {
    if (router.currentRoute.name !== 'd2r-main')
      router.push({ name: 'd2r-main' }).catch(() => { })
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
Vue.prototype.axios = axiosObject
Vue.component('adsense', Adsense)
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

Vue.mixin(mixin)
Vue.use(vuePlugin)
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')