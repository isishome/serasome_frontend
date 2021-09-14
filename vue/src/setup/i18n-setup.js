import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/lang/ko'
import { Cookies } from 'quasar'
const numberFormats = {
  'ko': {
    currency: {
      style: 'currency',
      currency: 'KRW',
      currencyDisplay: '₩'
    }
  },
  'en': {
    currency: {
      style: 'currency',
      currency: 'USD',
      currencyDisplay: '$'
    }
  },
  'zh': {
    currency: {
      style: 'currency',
      currency: 'CNY',
      currencyDisplay: '¥'
    }
  }
}
const loadedLanguages = ['ko'] // our default language that is preloaded

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ko', // set locale
  fallbackLocale: 'en',
  messages,
  numberFormats
})

i18n.setI18nLanguage = function (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  Cookies.set(process.env.VUE_APP_LANGUAGE_NAME, lang, { path: '/', expires: '7300d' })
  return lang
}

i18n.loadLanguageAsync = function (lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(i18n.setI18nLanguage(lang))
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(i18n.setI18nLanguage(lang))
  }

  // If the language hasn't been loaded yet
  return import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang.replace(/-[A-Z]{2}/gim, '')}.js`).then(
    messages => {
      i18n.setLocaleMessage(lang, messages.default)
      loadedLanguages.push(lang)
      return i18n.setI18nLanguage(lang)
    }
  )
}

export default i18n