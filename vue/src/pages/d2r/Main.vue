<template>
  <div class="q-pa-sm">
    <q-responsive :ratio="1" class="absolute-top" :style="$q.screen.gt.xs ? 'height:400px' : 'height:200px'">
      <q-carousel class="bg-black" dark animated :autoplay="10000" infinite v-model="slide">
        <q-carousel-slide v-for="(no, index) in $t('d2r.main.carousel')" :key="index" :name="no.name"
          :img-src="require(`@/assets/images/d2r/${ltmd}${no.img}.jpg`)">
          <div class="full-width bg-transparent custom-caption"
            :class="$q.screen.lt.sm ? 'absolute-center no-padding q-mt-lg' : 'absolute-center'">
            <div class="d2r-flame q-mb-sm word-keep" :style="textFlame">{{no.title}}</div>
            <div class="row justify-center">
              <div class="d2r-sub-title col-6 col-xs-10 word-keep" :style="textSub">{{no.sub}}</div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-responsive>
    <div :style="$q.screen.lt.sm ? 'margin-top: 200px;' : 'margin-top: 400px;'"></div>
    <q-toolbar class="title">
      <q-toolbar-title>
        <div class="title-text font-kodia">
          {{$t('d2r.main.recentPosts')}}
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <d2r-summary :data="lastest" more @more-click="more" @item-click="boardItem" blank="blank.png"
      :loading="loading.lastest" />
    <q-toolbar class="title">
      <q-toolbar-title>
        <div class="title-text font-kodia">
          {{$t('d2r.main.topPosts')}}
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <d2r-summary :data="top" @item-click="boardItem" blank="blank.png" :loading="loading.top" />
    <template v-if="signStatus">
      <q-toolbar class="title">
        <q-toolbar-title>
          <div class="title-text font-kodia">
            {{$t('d2r.main.storage')}}
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <d2r-summary :data="storage" @item-click="storageItem" blank="account.png" :loading="loading.storage" />
    </template>
    <div style="padding-bottom: 6vh;"></div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'd2r-layout',
    data() {
      return {
        loading: {
          lastest: false,
          top: false,
          storage: false
        },
        slide: 'first',
        lastest: [],
        top: [],
        storage: []
      }
    },
    mounted() {
    },
    created() {
      this.getLastest()
      this.getTop()
      if (this.signStatus)
        this.getStorage()
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus'
      }),
      ltmd() {
        return this.$q.screen.lt.sm ? '1024_' : this.$q.screen.lt.md ? '1440_' : this.$q.screen.lt.lg ? '1920_' : ''
      },
      textFlame() {
        return this.$q.screen.lt.sm ? 'font-size:22px;line-height:23px;' : 'font-size:48px;'
      },
      textSub() {
        return this.$q.screen.lt.sm ? 'font-size:12px;line-height:16px;' : 'font-size:20px;'
      }
    },
    methods: {
      getLastest() {
        const vm = this
        this.loading.lastest = true
        this.axios
          .get('/d2r/board/lastest').then(function (response) {
            vm.lastest = response.data
          })
          .catch(function () { })
          .then(function () {
            vm.loading.lastest = false
          })
      },
      getTop() {
        const vm = this
        this.loading.top = true
        this.axios
          .get('/d2r/board/top').then(function (response) {
            vm.top = response.data
          })
          .catch(function () { })
          .then(function () {
            vm.loading.top = false
          })
      },
      getStorage() {
        const vm = this
        this.loading.storage = true
        this.axios
          .get('/d2r/storage/summary').then(function (response) {
            vm.storage = response.data
          })
          .catch(function () { })
          .then(function () {
            vm.loading.storage = false
          })
      },
      more(item) {
        this.$router.push({ name: 'd2r-bbs', params: { 'sec': item } }).catch(() => { })
      },
      boardItem(item) {
        this.$router.push({ name: 'd2r-read', params: { 'sec': item.sec, 'pid': item.pid } }).catch(() => { })
      },
      storageItem(item) {
        if (item.aid && item.cid)
          this.$router.push({ name: 'd2r-storage-character', params: { 'aid': item.aid, 'cid': item.cid } }).catch(() => { })
        else if (item.aid)
          this.$router.push({ name: 'd2r-storage-account', params: { 'aid': item.aid } }).catch(() => { })
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

  .d2r-flame {
    font-family: 'Kodia';
    /* font-family: 'New Rocker', 'Do Hyeon', cursive; */
    font-weight: bolder;
    color: #000000 !important;
    text-shadow: 1px 1px 1px rgb(0, 0, 0), 0 0 3px rgb(251, 255, 0), 0 -1px 5px rgb(255, 136, 0), 0 -3px 10px rgb(255, 38, 0);
    filter: invert(90%);
  }

  @media screen and (max-width:599px) {
    .d2r-flame {
      text-shadow: 0 0 1px rgb(0, 0, 0), 1px 0 1px rgb(251, 255, 0), -1px -1px 1px rgb(255, 102, 0), 1px -1px 1px rgb(255, 38, 0);
    }
  }

  .d2r-sub-title {
    font-family: 'Kodia';
    /* font-family: 'Nosifer', 'Black Han Sans', cursive; */
    font-weight: bolder;
    text-shadow: 0 0 8px rgba(0, 0, 0, 1);
    color: rgb(240, 156, 0);
    text-shadow: 2px 0 3px rgb(0, 0, 0), 0 2px 3px rgb(0, 0, 0), 0 -2px 3px rgb(0, 0, 0), 0 -2px 3px rgb(0, 0, 0);
  }

  .title {
    color: #b89d5c;
    margin-top: 30px;
    padding: 10px;
    min-height: 40px;
    background-color: rgba(80, 0, 0, 0.8);
    box-shadow: 1px 1px 0 0 rgba(200, 0, 0, 0.5) inset;
    border-radius: 4px 4px 0 0;
  }

  .title-text::before {
    content: '\e3f1';
    font-family: 'Material Icons';
    vertical-align: middle;
    margin-right: 5px;
  }

  .title-text {
    font-size: 16px;
    font-weight: bold;
  }
</style>