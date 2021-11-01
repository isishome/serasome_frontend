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

const Adsense = () => import(/* webpackChunkName: "etc-component" */ '@/components/etc/AdSense')
const Logo = () => import(/* webpackChunkName: "seras-logo-component" */ '@/components/seras/Logo')
const PostList = () => import(/* webpackChunkName: "seras-postlist-component" */ '@/components/seras/PostList')
const PostRead = () => import(/* webpackChunkName: "seras-read-component" */ '@/components/seras/PostRead')
const Confirm = () => import(/* webpackChunkName: "seras-confirm-component" */ '@/components/seras/Confirm')
const Prompt = () => import(/* webpackChunkName: "seras-prompt-component" */ '@/components/seras/Prompt')
const Comment = () => import(/* webpackChunkName: "seras-comment-component" */ '@/components/seras/Comment')
const CommentDate = () => import(/* webpackChunkName: "seras-commentdate-component" */ '@/components/seras/CommentDate')
import { Quasar, Notify, Cookies, Dark, Loading } from 'quasar'
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

router.onError((error) => {
  if (error.name === 'ChunkLoadError') {
    window.location.reload()
  }
})

router.beforeEach((to, from, next) => {
  Loading.hide()
  const lang = Cookies.has(process.env.VUE_APP_LANGUAGE_NAME) ? Cookies.get(process.env.VUE_APP_LANGUAGE_NAME) : Quasar.lang.getLocale().substring(0, 2) || 'ko'
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

  const findNoAD = to.matched.find(route => route.meta.noAD)
  store.dispatch('setNoAD', findNoAD !== undefined)

  const cookieDark = Cookies.has(process.env.VUE_APP_DARK_NAME) && Cookies.get(process.env.VUE_APP_DARK_NAME) === true
  if (cookieDark !== Dark.isActive)
    Dark.set(cookieDark)

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
  const lang = Cookies.has(process.env.VUE_APP_LANGUAGE_NAME) ? Cookies.get(process.env.VUE_APP_LANGUAGE_NAME) : Quasar.lang.getLocale().substring(0, 2) || 'ko'
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
Vue.component('adsense', Adsense)
Vue.component('ss-logo', Logo)
Vue.component('ss-post-list', PostList)
Vue.component('ss-post-read', PostRead)
Vue.component('ss-confirm', Confirm)
Vue.component('ss-prompt', Prompt)
Vue.component('ss-comment', Comment)
Vue.component('ss-comment-date', CommentDate)
//Vue.component('v-facebook-login', VFacebookLogin)

Vue.mixin(mixin)
Vue.use(vuePlugin)
new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')