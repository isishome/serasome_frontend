<template>
  <div>
    <q-ajax-bar ref="bar" position="bottom" color="red" size="4px" skip-hijack />
    <ss-post-read :sname="sname" v-model="pid" @done="done" @reading="loading = true" />
    <div>
      <q-carousel keep-alive arrows navigation infinite autoplay animated transition-prev="slide-down"
        transition-next="slide-up" v-model="slide" class="bg-transparent" :height="$q.screen.lt.md ? '150px' : '300px'">
        <q-carousel-slide name="first" :img-src="require('@/assets/images/main_01.jpg')">
          <div class="absolute-top custom-caption">
            <div class="text-h5">{{$t('main.carousel.1.title')}}</div>
            <div class="text-subtitle1">{{$t('main.carousel.1.cont')}}</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" :img-src="require('@/assets/images/main_02.jpg')">
          <div class="absolute-top custom-caption">
            <div class="text-h5">{{$t('main.carousel.2.title')}}</div>
            <div class="text-subtitle1">{{$t('main.carousel.2.cont')}}</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="third" :img-src="require('@/assets/images/main_03.jpg')">
          <div class="absolute-top custom-caption">
            <div class="text-h5">{{$t('main.carousel.3.title')}}</div>
            <div class="text-subtitle1">{{$t('main.carousel.3.cont')}}</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="fourth" class="text-center" :img-src="require('@/assets/images/board.jpg')">
          <img src="@/assets/images/main_04.png" class="lt-md " style="max-width:70%" />
          <img src="@/assets/images/main_04.png" class="gt-sm q-pa-xl" />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="row">
      <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-xs-12 q-mt-md">
        <q-circular-progress v-if="!popular" indeterminate size="50px" color="teal-4" class="absolute-center" />
        <div class="q-mb-xl">
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
          <div class="q-mb-sm q-px-md row no-wrap justify-start items-center">
            <q-icon name="poll" size="sm" color="amber-7" />
            <div class="font-title text-h6 text-teal-7 q-ml-sm">{{$t(`main.${section.name}`)}}</div>
          </div>
          <q-separator inset spaced />
          <ss-post-list :list="section.data" :loading="loading" :pid="pid" @view="view"></ss-post-list>
          <q-space class="q-my-xl" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'Main',
    data() {
      return {
        loading: false,
        slide: 'first',
        popular: false,
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

        ajaxBar.start()
        this.axios
          .get('/seras/post/popular')
          .then(function (response) {
            if (response.data !== null) {
              self.popular = response.data
            }
          })
          .catch(function () { })
          .then(function () {
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
  .custom-caption {
    text-align: center;
    padding: 12px;
    color: white;
    background-color: rgba(0, 0, 0, .3);
  }
</style>