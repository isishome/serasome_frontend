import Vue from 'vue'
import App from '@/app/Seras.vue'
import '@/quasar'
import i18n from '@/setup/i18n-setup'
import mixin from '@/setup/mixin'
import VueRouter from 'vue-router'
import routes from '@/router/seras'
import store from '@/store/seras'
import axios from 'axios'
import vuePlugin from "@/plugin/highlight"
import { Quasar, Notify, Cookies } from 'quasar'
//import VFacebookLogin from 'vue-facebook-login-component'
import GAuth from 'vue-google-oauth2'

const Adsense = () => import(/* webpackChunkName: "etc-component" */ '@/components/etc/AdSense')
const Logo = () => import(/* webpackChunkName: "seras-component" */ '@/components/seras/Logo')
const PostList = () => import(/* webpackChunkName: "seras-component" */ '@/components/seras/PostList')
const PostRead = () => import(/* webpackChunkName: "seras-component" */ '@/components/seras/PostRead')

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
  i18n.loadLanguageAsync(lang).then(() => next())
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

  const findNoAD = to.matched.find(route => route.meta.noAD)
  store.dispatch('setNoAD', findNoAD !== undefined)

  const requireAuth = to.matched.some(route => route.meta.requireAuth)
  const signedIn = Cookies.has(process.env.VUE_APP_STATUS_NAME) && Cookies.get(process.env.VUE_APP_STATUS_NAME) === true
  const checkForgot = to.matched.some(route => route.name.indexOf('forgot') !== -1)
  if (requireAuth && !signedIn) {
    Notify.create({
      type: 'negative',
      color: 'negative',
      message: i18n.t('system.message.requireSignIn')
    })

    router.replace({ name: 'sign', params: { redirect: encodeURIComponent(to.path) } }).catch(() => { })
  }
  else if (signedIn && checkForgot)
    router.replace({ name: 'main' }).catch(() => { })

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

  if (statusCode === 203) {
    Notify.create({
      type: 'negative',
      color: 'negative',
      message: i18n.t('system.message.unavailableService')
    })

    document.location = process.env.VUE_APP_D2R_URL
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
Vue.component('adsense', Adsense)
Vue.component('ss-logo', Logo)
Vue.component('ss-post-list', PostList)
Vue.component('ss-post-read', PostRead)
//Vue.component('v-facebook-login', VFacebookLogin)

Vue.mixin(mixin)
Vue.use(vuePlugin)
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')