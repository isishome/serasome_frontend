<template>
  <div class="full-width">
    <d2r-tap-panel v-if="$route.params.part" :part="$route.params.part">
      <template #tabs>
        <q-tab :ripple="false" content-class="no-padding" v-for="cls in d2rClass" :key="cls.clsid"
          :name="upperCase(cls.clsid)" @click="swapPart(upperCase(cls.clsid))">
          <q-img :width="$q.screen.lt.sm ? '80px' : '110px'" :ratio="1" :src="cls.src" />
          <div class="text-body ellipsis absolute-bottom title font-kodia">{{cls.label}}
          </div>
        </q-tab>
      </template>
      <template #panels>
        <q-tab-panel v-for="cls in d2rClass" :key="cls.clsid" :name="upperCase(cls.clsid)"
          class="no-scroll word-wrap non-selectable" :class="$q.screen.lt.sm ? 'q-px-sm' : 'q-px-lg'">
          <div class="q-mb-xl font-kodia text-weight-bold text-title text-center"
            :class="$q.screen.lt.sm ? 'text-h5' : 'text-h4'">
            {{cls.label}}</div>
          <div class="row justify-center relative-position">
            <div class="gradient-back">
              <transition name="fade">
                <img ref="img1" v-if="show" class="absolute-center"
                  :src="require(`@/assets/images/d2r/classes/${cls.clsid}.gif`)" style="height:100%;padding:30px" />
              </transition>
              <transition name="fade">
                <img ref="img2" v-if="show2" class="absolute-center"
                  :src="require(`@/assets/images/d2r/classes/${cls.clsid}-r.png`)" style="height: 100%;padding:30px" />
              </transition>
            </div>
          </div>
          <component :is="partComponent">
          </component>
        </q-tab-panel>
      </template>
    </d2r-tap-panel>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        loading: false,
        partComponent: null,
        show: true,
        show2: false
      }
    },
    computed: {
      ...mapGetters({
        d2rClass: 'getD2RClass'
      })
    },
    watch: {
      '$route': function (to, from) {
        if (to.params.section === from.params.section && to.params.part !== from.params.part)
          this.init()
      },
      partComponent: function (val, old) {
        if (val !== old)
          this.loading = false
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        if (this.$route.params.part)
          this.load()
        else if (this.$route.params.section === 'Classes')
          this.$router.replace({ name: 'd2r-knowledge-part', params: { section: 'Classes', part: 'Amazon' } }).catch(() => { })
      },
      load() {
        this.clear()
        this.show = true
        this.show2 = false
        this.timer1 = setTimeout(() => {
          this.show = false
        }, 2000)
        this.timer2 = setTimeout(() => {
          this.show2 = true
        }, 2000)

        this.loading = true
        this.partComponent = () => import(/* webpackChunkName: "d2r-knowledge-classes" */ `./Classes/${this.$route.params.part}`)
      },
      swapPart(val) {
        this.$router.push({ name: 'd2r-knowledge-part', params: { section: 'Classes', part: val } }).catch(() => { })
      },
      clear() {
        clearTimeout(this.timer1)
        clearTimeout(this.timer2)
      },
      upperCase(val) {
        return val.charAt(0).toUpperCase() + val.slice(1)
      }
    }
  }
</script>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }
</style>