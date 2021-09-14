import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signStatus: null,
    categoryInfo: null,
    someList: null,
    currentSome: false,
    items: [],
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
    getCategory: state => {
      return state.categoryInfo
    },
    getSomeList: state => {
      return state.someList
    },
    getItems: state => {
      return state.items
    },
    getCurrentSome: state => {
      return state.currentSome
    },
    getPageScroller: state => {
      return state.pageScroller
    },
    getIndependent: state => {
      return state.independent
    },
    getSection: state => {
      return state.d2rInfo.section
    },
    getSecInfo: state => (sec) => {
      let result = {
        name: null,
        icon: null,
        classifies: [],
        authority: {}
      }

      if (Array.isArray(state.d2rInfo.section)) {
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
    getAuthority: state => (sec, action) => {
      const findSection = state.d2rInfo.section.find(s => s.value === sec)
      if (findSection)
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
    setCategory(state, payload) {
      state.categoryInfo = payload
    },
    setSomeList(state, payload) {
      state.someList = payload
    },
    setCurrentSome(state, payload) {
      state.currentSome = payload
    },
    initItem(state) {
      state.items = []
    },
    concatItem(state, payload) {
      state.items = state.items.concat(payload)
    },
    addItem(state, payload) {
      state.items.unshift(payload)
    },
    modifyItem(state, payload) {
      for (let item of state.items) {
        if (item.pid === payload.pid) {
          item.title = payload.title
          item.contents = payload.contents
          item.youtube = payload.youtube
          item.files = payload.files
          item.thumbnail = payload.thumbnail
          item.thumb = payload.thumb
          item.auth = payload.auth
          item.seq = payload.seq
          break
        }
      }
    },
    deleteItem(state, payload) {
      const findItem = state.items.find(p => p.pid === payload)

      if (findItem !== null)
        state.items.splice(state.items.indexOf(findItem), 1)
    },
    clearPostInfo(state) {
      state.postInfo = null
    },
    deleteFile(state, payload) {
      if (state.postInfo !== null && Array.isArray(state.postInfo.files)) {
        const findFile = state.postInfo.files.find(f => f.fid === payload)

        if (findFile !== null)
          state.postInfo.files.splice(state.postInfo.files.indexOf(findFile), 1)
      }
    },
    setPageScroller(state, payload) {
      state.pageScroller = payload
    },
    setIndependent(state, payload) {
      state.independent = payload
    },
    setSection(state, payload) {
      state.d2rInfo.section = payload
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
    setCategory(context, payload) {
      context.commit('setCategory', payload)
    },
    setSomeList(context, payload) {
      context.commit('setSomeList', payload)
    },
    setCurrentSome(context, payload) {
      context.commit('setCurrentSome', payload)
    },
    initItem(context) {
      context.commit('initItem')
    },
    concatItem(context, payload) {
      context.commit('concatItem', payload)
    },
    addItem(context, payload) {
      context.commit('addItem', payload)
    },
    modifyItem(context, payload) {
      context.commit('modifyItem', payload)
    },
    deleteItem(context, payload) {
      context.commit('deleteItem', payload)
    },
    clearPostInfo(context, payload) {
      context.commit('clearPostInfo', payload)
    },
    deleteFile(context, payload) {
      context.commit('deleteFile', payload)
    },
    setPageScroller(context, payload) {
      context.commit('setPageScroller', payload)
    },
    setIndependent(context, payload) {
      context.commit('setIndependent', payload)
    },
    setSection(context, payload) {
      context.commit('setSection', payload)
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