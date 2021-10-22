<template>
  <div>
    <q-ajax-bar ref="bar" position="bottom" color="red" size="4px" skip-hijack />
    <ss-post-read :sname="sname" v-model="pid" @done="done" @reading="loading = true" />
    <div v-for="category in categoryInfo" :key="category.cid"
      class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
      <div v-if="category.cid === cid" class="q-mt-md">
        <div class="q-mb-sm q-px-md row no-wrap justify-start items-center">
          <q-icon :name="category.icon" size="xs" :color="category.color" />
          <div class="font-title text-h6 text-teal-7 q-ml-sm">{{category.name}}</div>
        </div>
        <q-separator inset spaced />
        <q-infinite-scroll ref="some" @load="onLoad" class="q-mt-md">
          <ss-post-list :list="items" :loading="loading" :pid="pid" @view="view"></ss-post-list>
          <template v-slot:loading>
            <div class="row justify-center items-center q-my-md">
              <q-spinner-dots color="primary" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
        <q-space class="q-my-xl" />
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'Category',
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
        categoryInfo: 'getCategory'
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
            self.timer1 = setTimeout(() => {
              done(stop)
              self.items = self.items.concat(tempItems)
            }, 1000)
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
    },
    beforeDestroy() {
      clearTimeout(this.timer1)
    }
  }
</script>
<style scoped>
</style>