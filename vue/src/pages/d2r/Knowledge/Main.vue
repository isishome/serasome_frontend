<template>
  <div>
    <div class="lt-md">
      <div class="row items-center">
        <q-icon name="fas fa-book" class="q-ma-sm" size="20px" color="title" />
        <div class="font-title q-ml-xs text-uppercase font-kodia">{{$t('d2r.knowledge.title')}}</div>
      </div>
      <q-separator class="q-mb-sm" />
    </div>
    <div class="know-wrap" :class="!leftTabs ? 'no-left-tabs' : ''">
      <div class="row justify-start bg-knowledge">
        <q-btn stack :size="$q.screen.lt.md ? 'sm' : 'md'" v-for="tab in list"
          :class="section === tab.value ? `active` : 'bg-knowledge'" :key="tab.value"
          class="overflow-hidden col-4 col-sm q-py-md tab-btn font-kodia" :icon="tab.icon" :label="tab.name"
          @click="swapSection(tab.value)" :disable="loading" />
      </div>
      <q-tab-panels class="bg-knowledge tab-panels" :class="!leftTabs ? 'no-left-tabs' : ''" v-model="section" animated
        vertical :transition-prev="$q.screen.lt.sm ? 'none' : 'jump-right'"
        :transition-next="$q.screen.lt.sm ? 'none' : 'jump-left'">
        <q-tab-panel v-for="tab in list" :key="tab.value" :name="tab.value"
          class="no-padding row justify-start items-start no-scroll">
          <component :is="sectionComponent" @no-left-tabs="leftTabs = false">
          </component>
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <div style="height:10vh"></div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    props: {
      section: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        pageLoad: false,
        list: this.$t('d2r.knowledge.list'),
        loading: false,
        sectionComponent: null,
        leftTabs: true
      }
    },
    computed: {
      ...mapGetters({
        d2rClass: 'getD2RClass'
      })
    },
    watch: {
      '$route': function (to, from) {
        if (to.params.section !== from.params.section)
          this.init()
      },
      sectionComponent: function (val, old) {
        if (val !== old)
          this.loading = false
      }
    },
    beforeMount() {
      this.pageLoad = true
    },
    mounted() {
      if (this.d2rClass.length === 0)
        this.getClass()
      else
        this.init()
    },
    methods: {
      ...mapActions({
        setD2RClass: 'setD2RClass'
      }),
      init() {
        if (this.section)
          this.load()
        else
          this.$router.replace({ name: 'd2r-knowledge-section', params: { section: 'Classes' } }).catch(() => { })
      },
      getClass() {
        const vm = this
        this.axios
          .get('/d2r/info/class')
          .then(function (response) {
            vm.setD2RClass(response.data)
          })
          .catch(function () { })
          .then(function () {
            vm.init()
          })
      },
      load() {
        this.leftTabs = true
        this.sectionComponent = () => import(/* webpackChunkName: "group-d2r-knowledge" */ `./Partial/${this.section}`)
      },
      swapSection(val) {
        this.$router.push({ name: 'd2r-knowledge-section', params: { section: val } }).catch(() => { })
      }
    }
  }
</script>
<style>
  .bg-knowledge {
    background-color: transparent !important;
  }

  .knowledge p {
    margin: 10px 0;
    line-height: 1.8em;
    word-break: keep-all;
    font-size: 1.2em;
    word-spacing: 3px;
    text-indent: 1em;
  }

  @media screen and (max-width:599px) {

    .knowledge p,
    .knowledge th,
    .knowledge td {
      font-size: 1em !important;
    }

    .knowledge .text-sub {
      font-size: 1.4em !important;
    }
  }
</style>
<style scoped>
  .tab-pannels {
    margin-left: 100px;
  }

  .know-wrap {
    margin-left: 122px;
    box-shadow: 1px 0 0 0 rgba(163, 106, 0, 0.4), -1px 0 0 0 rgba(163, 106, 0, 0.4), 0 1px 0 0 rgba(163, 106, 0, 0.4);
    background-color: rgba(5, 5, 5, 1);
    border-radius: 10px;
  }

  .body--light .know-wrap {
    box-shadow: 1px 0 0 0 rgba(5, 5, 5, .2), -1px 0 0 0 rgba(5, 5, 5, .2), 0 1px 0 0 rgba(5, 5, 5, .2) !important;
    background-color: rgba(245, 245, 245, 1);
  }

  .tab-panels {
    margin-left: -122px;
  }

  .no-left-tabs {
    margin-left: 0 !important;
  }

  .tab-btn {
    filter: grayscale(30%);
    padding: 4px 2px;
    opacity: .5;
    background: linear-gradient(to bottom, rgba(70, 70, 70, .9) 10%, rgba(20, 20, 20, 0.9) 60%, rgba(0, 0, 0, 1)), url('/static/images/d2r_back.jpg') repeat !important;
    box-shadow: inset 0 1px 1px 0 rgba(214, 139, 0, .7), inset 0 -1px 1px 0 rgba(214, 139, 0, .7), inset 0 -2px 1px 0 rgba(65, 44, 6, 0.7), inset 0 0 10px 3px rgba(0, 0, 0, 1);
    color: #b89c5b !important;
    font-weight: bold;
    font-size: 1em !important;
    border-radius: 10px 10px 0 0 !important;
  }

  .body--light .tab-btn {
    opacity: .2;
    background: linear-gradient(to bottom, rgba(150, 150, 150, .9) 10%, rgba(200, 200, 200, 0.9) 60%, rgba(245, 245, 245, 1)), url('/static/images/d2r_back.jpg') repeat !important;
    box-shadow: inset 0 1px 1px 0 rgba(50, 50, 50, .7), inset 0 -1px 1px 0 rgba(50, 50, 50, .7), inset 0 -2px 1px 0 rgba(20, 20, 20, .7), inset 0 0 10px 3px rgba(0, 0, 0, 1);
    color: rgba(5, 5, 5, 1) !important;
  }

  .tab-btn.active {
    box-shadow: 1px 0 1px 0 rgba(214, 139, 0, .2);
    filter: grayscale(0);
    opacity: 1;
  }

  @media screen and (max-width:599px) {
    .know-wrap {
      margin-left: 0;
      box-shadow: 0 1px 0 1px rgba(163, 106, 0, .4);
    }

    .tab-panels {
      margin-left: 0;
    }

    .tab-btn {
      z-index: 1;
      padding: 4px !important;
      font-size: 0.8em !important;
      background-size: 80vw !important;
      border-radius: 4px;
    }

    .tab-btn.active {
      box-shadow: inset 0 0 1px 1px rgba(214, 139, 0, 0.7);
    }
  }

  .bg-line {
    background-color: #212121;
  }
</style>