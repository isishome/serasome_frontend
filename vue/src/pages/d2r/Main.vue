<template>
  <div class="q-pa-sm">
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
      })
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
  .title {
    margin-top: 30px;
    padding: 10px;
    min-height: 40px;
    border-radius: 4px 4px 0 0;
  }

  .body--light .title {
    color: #bd9331;
    background-color: rgba(50, 50, 50, 0.8);
    box-shadow: 1px 1px 0 0 rgba(200, 200, 200, 0.5) inset;
  }

  .body--dark .title {
    color: #b89d5c;
    background-color: rgba(80, 0, 0, 0.8);
    box-shadow: 1px 1px 0 0 rgba(200, 0, 0, 0.5) inset;
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