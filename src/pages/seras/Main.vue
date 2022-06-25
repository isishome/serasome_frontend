<template>
  <div>
    <q-ajax-bar ref="bar" position="bottom" color="red" size="4px" skip-hijack />
    <ss-post-read :sname="sname" v-model="pid" @done="done" @reading="loading = true" />
    <q-circular-progress v-if="!popular" indeterminate size="50px" color="teal-4" class="absolute-center" />
    <div class="q-mb-md ">
      <div class="q-mb-sm q-px-md row no-wrap justify-start items-center">
        <q-icon name="view_list" size="sm" color="amber-7" />
        <div class="font-title text-h6 text-teal-7 q-ml-sm">{{$t('main.category')}}</div>
      </div>
      <q-separator />
      <q-bar class="bg-transparent fit scroll">
        <q-btn flat class="no-padding no-margin column" v-for="category in categoryInfo" :key="category.cid"
          :to="`/category/${category.cid}`" :style="$q.screen.gt.sm ? 'min-width:9%' : ''">
          <q-icon :name="category.icon" class="no-padding q-ma-sm col-6" size="20px" :color="category.color" />
          <div class="text-body2 col-6 full-width ellipsis">{{ category.name }}</div>
        </q-btn>
      </q-bar>
      <q-separator />
    </div>
    <div v-for="section in popular" :key="section.name">
      <template v-if="section.data.length > 0">
        <div class="q-mb-sm q-px-md row no-wrap justify-start items-center">
          <q-icon name="poll" size="sm" color="amber-7" />
          <div class="font-title text-h6 text-teal-7 q-ml-sm">{{$t(`main.${section.name}`)}}</div>
        </div>
        <q-separator inset spaced />
        <ss-post-list :list="section.data" :loading="loading" :pid="pid" @view="view" limited></ss-post-list>
        <q-space class="q-my-xl" />
      </template>
    </div>
  </div>
</template>
<script>
  const PostRead = () => import(/* webpackChunkName: "seras-post-read" */ '@/components/seras/PostRead')
  const PostList = () => import(/* webpackChunkName: "seras-post-list" */ '@/components/seras/PostList')
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'Main',
    components: {
      'ss-post-list': PostList,
      'ss-post-read': PostRead
    },
    data() {
      return {
        loading: false,
        popular: [],
        sname: null,
        pid: null
      }
    },
    mounted() {
      this.postPopular()
    },
    computed: {
      ...mapGetters({
        categoryInfo: 'getCategory'
      })
    },
    methods: {
      postPopular() {
        const self = this
        const ajaxBar = this.$refs.bar
        let complete = 0

        ajaxBar.start()
        this.axios
          .get('/seras/post/today')
          .then(function (response) {
            if (response.data !== null) {
              self.popular.push({ name: 'popularToday', data: response.data })
            }
          })
          .catch(function () { })
          .then(function () {
            complete++
            if (complete === 3)
              ajaxBar.stop()
          })

        this.axios
          .get('/seras/post/pastweek')
          .then(function (response) {
            if (response.data !== null) {
              self.popular.push({ name: 'popularLastWeek', data: response.data })
            }
          })
          .catch(function () { })
          .then(function () {
            complete++
            if (complete === 3)
              ajaxBar.stop()
          })

        this.axios
          .get('/seras/post/weekago')
          .then(function (response) {
            if (response.data !== null) {
              self.popular.push({ name: 'popularWeekOld', data: response.data })
            }
          })
          .catch(function () { })
          .then(function () {
            complete++
            if (complete === 3)
              ajaxBar.stop()
          })
      },
      view(sname, pid) {
        this.loading = true
        this.sname = sname
        this.pid = pid
      },
      done() {
        this.loading = false
      }
    }
  }
</script>
<style scoped>

</style>