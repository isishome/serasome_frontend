<template>
  <div>
    <q-ajax-bar ref="bar" position="bottom" color="red" size="4px" skip-hijack />
    <ss-post-read ref="postRead" :sname="sname" v-model="pid" @done="done" @reading="loading = true" />
    <ss-post-edit v-if="postAddModify" v-model="pid" :limit-file-cnt="limitFileCnt" />
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 q-mt-md relative-position">
      <div v-if="some" class="row justify-between items-center q-px-md">
        <div class="row items-center">
          <q-icon
            :name="some.icon ? some.icon : some.owner === true ? 'fas fa-cube' : some.linked === true ? 'fas fa-cubes' : 'fas fa-question'"
            class="q-ma-sm" size="20px" color="amber-7" />
          <div class="font-title text-h5 text-teal-7 q-ml-xs">{{ some.name }}</div>
        </div>
        <div>
          <q-btn dense round flat size="sm" v-if="postingAvailable && signStatus && !owner"
            :icon="linked === true ? 'fas fa-unlink' : 'fas fa-link'" :color="linked ? 'red-10' : 'green-10'"
            class="q-pa-xs" @click="link">
          </q-btn>
        </div>
      </div>
      <q-separator inset spaced />
      <ss-post-list class="q-pa-sm q-mt-md" ref="some" v-if="routeName !== 'post' && some" :list="items" :pid="pid"
        :loading="loading" @view="view" @load="onLoad"></ss-post-list>
    </div>
  </div>
</template>

<script>
  const PostList = () => import(/* webpackChunkName: "seras-post-list" */ '@/components/seras/PostList')
  const PostRead = () => import(/* webpackChunkName: "seras-post-read" */ '@/components/seras/PostRead')
  const PostEdit = () => import(/* webpackChunkName: "seras-post-edit" */ '@/components/seras/PostEdit')

  import {
    mapGetters, mapActions
  } from 'vuex'

  export default {
    name: 'post',
    components: {
      'ss-post-read': PostRead,
      'ss-post-list': PostList,
      'ss-post-edit': PostEdit
    },
    data() {
      return {
        loading: false,
        routeName: null,
        some: null,
        postingAvailable: false,
        postAddModify: false,
        owner: false,
        linked: false,
        write: false,
        type: 0,
        point: null,
        order: -1,
        skip: 0,
        limit: 10,
        fromSname: null,
        sname: null,
        pid: null,
        limitFileCnt: 5
      }
    },
    created() {
      this.initItem()
      this.routeName = this.$route.name
      this.sname = this.$route.params.sname
      this.pid = this.$route.params.pid || null
      this.someInfo()
      this.postInit()
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    },
    watch: {
      '$route': function (to, from) {
        this.routeName = this.$route.name
        this.fromSname = from.params.sname
        this.sname = to.params.sname
        this.pid = to.params.pid || null

        if (to.params.sname !== from.params.sname) {
          this.someInfo()
          this.initItem()
          this.skip = 0
          if (this.$refs.some) {
            this.$refs.some.resume()
            this.$refs.some.trigger()
          }
        }
        else if (this.signStatus === false)
          this.someInfo()

        if (!this.pid)
          this.postAddModify = false

        this.postInit()
      }
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus',
        someList: 'getSomeList',
        currentSome: 'getCurrentSome',
        items: 'getItems'
      })
    },
    methods: {
      ...mapActions({
        setSomeList: 'setSomeList',
        setCurrentSome: 'setCurrentSome',
        initItem: 'initItem',
        concatItem: 'concatItem'
      }),
      postInit() {
        this.loading = !(!this.pid)

        if (this.routeName === 'some') {
          this.postAddModify = false
          this.postingAvailable = true
        }
        else if (this.routeName === 'post-add') {
          this.$nextTick(() => {
            this.postAddModify = true
            this.postingAvailable = false
          })
        }
        else if (this.routeName === 'post-modify') {
          this.$nextTick(() => {
            this.postAddModify = true
            this.postingAvailable = false
          })
        }
      },
      resetSomeInfo() {
        this.some = null
        this.write = null
        this.owner = null
        this.linked = null
        this.type = null
      },
      someInfo() {
        const self = this

        if ((this.sname && this.sname !== this.fromSname) || (this.signStatus === false && this.sname !== undefined)) {
          this.axios
            .get('/seras/some/info', {
              params: {
                'sname': this.sname
              }
            })
            .then(function (response) {
              if (response && response.data) {
                self.some = response.data
                self.write = response.data.auth.write
                self.owner = response.data.owner
                self.linked = response.data.linked
                self.type = response.data.type

                self.timer = setTimeout(() => {
                  self.setCurrentSome(response.data.linked ? false : response.data)
                }, 0);

                if (self.type === 99 && self.owner === true)
                  self.limitFileCnt = -1
                else
                  self.limitFileCnt = 5
              }
              else
                self.resetSomeInfo()
            })
            .catch(() => {
              self.resetSomeInfo()
            })
        }
      },
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
        const requestSname = this.sname
        this.loading = true
        let tempList = []

        ajaxBar.start()

        this.axios
          .get('/seras/post/list', {
            params: {
              'sname': this.sname,
              'point': this.point,
              'order': this.order,
              'skip': this.skip,
              'limit': this.limit
            }
          })
          .then(function (response) {
            if (requestSname === self.$route.params.sname) {
              stop = response.data.length === 0 || response.data.length < self.limit
              if (response.data.length > 0) {
                self.skip = self.skip + response.data.length
                tempList = response.data
              }
            } else
              stop = true

          })
          .catch(function () {
            stop = true
          })
          .then(function () {
            ajaxBar.stop()

            done(stop)
            self.concatItem(tempList)

            self.$nextTick(() => {
              if (requestSname !== self.$route.params.sname) {
                self.someInfo()
                self.initItem()
                self.skip = 0
                if (self.$refs.some) {
                  self.$refs.some.resume()
                  self.$refs.some.trigger()
                }
              }
            })
            self.loading = false
          })
      },
      link() {
        const self = this
        const sname = this.$route.params.sname
        this.axios
          .post(this.linked === true ? '/seras/some/unlink' : '/seras/some/link', {
            sname: sname
          })
          .then(function (response) {
            self.linked = !self.linked
            if (response.data !== null) {
              if (self.linked === true) {
                let someListClone = [...self.someList]
                someListClone.push(response.data)
                self.setSomeList(someListClone)
                self.setCurrentSome(false)
                self.write = response.data.auth.write
              }
              else {
                let someListClone = [...self.someList]
                for (const some of someListClone) {
                  if (some.sid === response.data.sid) {
                    someListClone.splice(someListClone.indexOf(some), 1)
                    break
                  }
                }
                self.setSomeList(someListClone)
                self.setCurrentSome(response.data)
                self.write = false
              }
            }
          })
          .catch(() => { })
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