import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signStatus: null,
    pageScroller: true,
    independent: false,
    d2rInfo: null,
    d2rClass: [],
    d2rImages: []
  },
  getters: {
    getSignStatus: state => {
      return state.signStatus
    },
    getPageScroller: state => {
      return state.pageScroller
    },
    getIndependent: state => {
      return state.independent
    },
    getSection: state => {
      return state.d2rInfo ? state.d2rInfo.section : []
    },
    getSecInfo: state => (sec) => {
      let result = {
        name: null,
        icon: null,
        classifies: [],
        authority: {}
      }

      if (state.d2rInfo && state.d2rInfo.section && Array.isArray(state.d2rInfo.section)) {
        const findSec = state.d2rInfo.section.find(s => s.value === sec)
        if (findSec)
          result = findSec
      }

      return result
    },
    getClassifyName: (state, getters) => (sec, classify) => {
      const findClassify = getters.getSecInfo(sec).classifies.find(c => c.value === classify)
      return findClassify ? findClassify.label.toUpperCase() : ''
    },
    getD2RInfo: state => {
      return state.d2rInfo
    },
    getAuthority: (state, getters) => (sec, action) => {
      const findSection = getters.getSecInfo(sec)
      if (findSection.name !== null)
        return findSection.authority[action] <= state.d2rInfo.grade
      else
        return false
    },
    getD2RClass: state => {
      return state.d2rClass
    },
    getD2RImages: state => {
      return state.d2rImages
    }
  },
  mutations: {
    setSignStatus(state, payload) {
      if (payload === false || payload === null) {
        state.someList = null
      }

      state.signStatus = payload
    },
    setPageScroller(state, payload) {
      state.pageScroller = payload
    },
    setIndependent(state, payload) {
      state.independent = payload
    },
    setD2RInfo(state, payload) {
      state.d2rInfo = payload
    },
    setBeginner(state, payload) {
      state.d2rInfo.beginner = payload
    },
    setD2RClass(state, payload) {
      state.d2rClass = payload
    },
    setD2RImages(state, payload) {
      state.d2rImages = payload
    }
  },
  actions: {
    setSignStatus(context, payload) {
      context.commit('setSignStatus', payload)
    },
    setPageScroller(context, payload) {
      context.commit('setPageScroller', payload)
    },
    setIndependent(context, payload) {
      context.commit('setIndependent', payload)
    },
    setD2RInfo(context, payload) {
      context.commit('setD2RInfo', payload)
    },
    setBeginner(context, payload) {
      context.commit('setBeginner', payload)
    },
    setD2RClass(context, payload) {
      context.commit('setD2RClass', payload)
    },
    setD2RImages(context, payload) {
      context.commit('setD2RImages', payload)
    }
  }
})