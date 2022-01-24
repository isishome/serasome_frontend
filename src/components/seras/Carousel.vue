<template>
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
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        slide: 'first'
      }
    },
    computed: {
      carouselHeight() {
        const sm = this.$q.screen.lt.md
        return sm ? [0, '130px', '130px', '170px', '200px'][this.step] : [0, '90px', '140px', '190px'][this.step]
      },
      ltmd() {
        return this.$q.screen.lt.sm ? '1024_' : this.$q.screen.lt.md ? '1440_' : this.$q.screen.lt.lg ? '1920_' : ''
      },
      textFlame() {
        return this.$q.screen.lt.sm ? 'font-size:22px;line-height:23px;' : 'font-size:48px;'
      },
      textSub() {
        return this.$q.screen.lt.sm ? 'font-size:12px;line-height:16px;' : 'font-size:20px;'
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