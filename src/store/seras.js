import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signStatus: null,
    categoryInfo: null,
    someList: [],
    currentSome: false,
    items: [],
    pageScroller: true,
    independent: false,
    noAD: false
  },
  getters: {
    getSignStatus: state => {
      return state.signStatus
    },
    getCategory: state => {
      return state.categoryInfo
    },
    getCategoryByCid: state => cid => {
      if (cid !== undefined) {
        return state.categoryInfo ? state.categoryInfo.find(c => c.cid === cid) : null
      }

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
    getNoAD: state => {
      return state.noAD
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
    setNoAD(state, payload) {
      state.noAD = payload
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
    setNoAD(context, payload) {
      context.commit('setNoAD', payload)
    }
  }
})