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
            <div style="height:231px">
              <transition name="fade">
                <img v-if="show" class="absolute-center" :src="require(`@/assets/images/d2r/classes/${cls.clsid}.gif`)"
                  style="height:100%;" />
              </transition>
              <transition name="fade">
                <img v-if="show2" class="absolute-center"
                  :src="require(`@/assets/images/d2r/classes/${cls.clsid}-r.png`)" style="height: 100%;" />
              </transition>
            </div>
          </div>
          <div class="q-mt-lg row justify-start items-start q-col-gutter-lg">
            <div class="col-12 col-sm-4" v-for="(i, index) in 3" :key="`${cls.clsid}_${i}`">
              <q-img :src="require(`@/assets/images/d2r/skills/${cls.clsid}/${index}.jpg`)" :ratio="321/432" />
            </div>
          </div>
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
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        if (this.$route.params.part)
          this.load()
        else if (this.$route.params.section === 'Skills')
          this.$router.replace({ name: 'd2r-knowledge-part', params: { section: 'Skills', part: 'Amazon' } }).catch(() => { })
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
      },
      swapPart(val) {
        this.$router.push({ name: 'd2r-knowledge-part', params: { section: 'Skills', part: val } }).catch(() => { })
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
  .tab {
    color: #999999;
    box-shadow: inset 0 0 0 1px rgba(100, 100, 100, .5);
    border-radius: 0 10px 10px 0;
  }

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