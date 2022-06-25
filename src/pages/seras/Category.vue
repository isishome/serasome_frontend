<template>
  <div>
    <q-ajax-bar ref="bar" position="bottom" color="red" size="4px" skip-hijack />
    <ss-post-read :sname="sname" v-model="pid" @done="done" @reading="loading = true" />
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
      <div v-if="categoryInfo(cid)" class="q-mt-md">
        <div class="q-mb-sm q-px-md row no-wrap justify-start items-center">
          <q-icon :name="categoryInfo(cid).icon" size="xs" :color="categoryInfo(cid).color" />
          <div class="font-title text-h6 text-teal-7 q-ml-sm">{{categoryInfo(cid).name}}</div>
        </div>
        <q-separator inset spaced />
        <ss-post-list class="q-pa-sm q-mt-md" ref="some" :list="items" :loading="loading" :pid="pid" @view="view"
          @load="onLoad"></ss-post-list>
      </div>
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
    name: 'Category',
    components: {
      'ss-post-list': PostList,
      'ss-post-read': PostRead
    },
    data() {
      return {
        loading: false,
        sname: null,
        pid: null,
        cid: null,
        items: [],
        point: null,
        skip: 0,
        limit: 15
      }
    },
    created() {
      this.cid = parseInt(this.$route.params.cid, 10) || 0
    },
    watch: {
      '$route': function (to, from) {
        if (to.params.cid !== from.params.cid) {
          this.cid = parseInt(this.$route.params.cid, 10) || 0
          this.items = []
          this.skip = 0
          if (this.$refs.some) {
            this.$refs.some.resume()
            this.$refs.some.trigger()
          }
        }
      }
    },
    computed: {
      ...mapGetters({
        categoryInfo: 'getCategoryByCid'
      })
    },
    methods: {
      onLoad(index, done) {
        if (this.skip === 0) {
          const gmt = new Date()
          this.point = Date.UTC(gmt.getUTCFullYear(), gmt.getUTCMonth(), gmt.getUTCDate(), gmt.getUTCHours(), gmt.getUTCMinutes(), gmt.getUTCSeconds())
        }
        this.postList(index, done)
      },
      postList(index, done) {
        const self = this
        let stop = false
        const ajaxBar = this.$refs.bar
        const requestCid = this.cid
        let tempItems = []

        ajaxBar.start()

        this.axios
          .get('/seras/post/category', {
            params: {
              'cid': this.cid,
              'point': this.point,
              'skip': this.skip,
              'limit': this.limit
            }
          })
          .then(function (response) {
            if (requestCid === parseInt(self.$route.params.cid, 10) || 0) {
              if (response.data.length === 0)
                stop = true
              else {
                self.skip = self.skip + response.data.length
                tempItems = response.data
              }
            }
            else
              stop = true
          })
          .catch(function () {
            stop = true
          })
          .then(function () {
            ajaxBar.stop()
            done(stop)
            self.items = self.items.concat(tempItems)
            self.$nextTick(() => {
              if (requestCid !== parseInt(self.$route.params.cid, 10) || 0) {
                self.items = []
                self.skip = 0
                if (self.$refs.some) {
                  self.$refs.some.resume()
                  self.$refs.some.trigger()
                }
              }
            })
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