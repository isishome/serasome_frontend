<template>
  <div>
    <q-ajax-bar ref="bar" position="bottom" color="red" size="4px" skip-hijack />
    <ss-post-read :sname="sname" v-model="pid" @done="done" @reading="loading = true" />
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12">
      <div class="q-mt-md">
        <div class="q-mb-sm q-px-md row justify-between items-center">
          <div class="col-12 col-md-6 row justify-start items-center">
            <q-icon name="fas fa-search" size="xs" color="amber-7" />
            <div class="font-title text-h6 text-teal-7 q-ml-sm">{{$t('search.result')}}</div>
          </div>
          <q-input dense standout outlined :label="$t('search.title')" v-model="text" input-class="text-left"
            class="col-12 col-md-4" @keyup.enter="search"
            :rules="[ val => val.length <= 20 || $t('search.message.invalidWord') ]" maxlength="20"
            :autofocus="$q.screen.gt.xs" no-error-icon>
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" />
              <q-icon v-else name="close" class="cursor-pointer" @click="text = ''" />
            </template>
          </q-input>
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
  export default {
    name: 'search',
    data() {
      return {
        loading: false,
        sname: null,
        pid: null,
        items: [],
        text: this.$route.params.text || '',
        skip: 0,
        limit: 10
      }
    },
    methods: {
      search() {
        if (this.text.trim() !== '' && this.text.trim().length <= 20) {
          this.items = []
          this.skip = 0
          if (this.$refs.some) {
            this.$refs.some.resume()
            this.$refs.some.trigger()
          }
        }
      },
      onLoad(index, done) {
        this.postList(index, done)
      },
      postList(index, done) {
        const self = this
        let stop = false
        const ajaxBar = this.$refs.bar
        const requestText = this.text
        let tempList = []

        ajaxBar.start()

        if (this.text.trim() === '' || this.text.length > 20) {
          ajaxBar.stop()
          done(true)
          return
        }

        this.axios
          .get('/seras/post/search', {
            params: {
              'text': encodeURIComponent(this.text),
              'limit': this.limit,
              'skip': this.skip
            }
          })
          .then(function (response) {
            if (requestText === self.text) {
              if (response.data.length === 0)
                stop = true
              else {
                self.skip = self.skip + response.data.length
                tempList = response.data
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
            self.items = self.items.concat(tempList)

            self.$nextTick(() => {
              if (requestText !== self.text) {
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