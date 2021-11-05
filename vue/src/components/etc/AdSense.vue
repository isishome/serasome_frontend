<template>
  <div v-if="visible"
    :style="`position:${fixed ? 'fixed' : ''};text-align:${horizontal};width:${tempWidth};height:${tempHeight}`">
    <ins ref="adbox" class="adsbygoogle" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot"
      :data-adtest="dataAdtest" :data-ad-format="dataAdFormat" :data-full-width-responsive="dataFullWidthResponsive"
      :style="`display:inline-block;text-align:${horizontal};width:${tempWidth};height:${tempHeight}`" :key="key"></ins>
  </div>
</template>
<script>
  export default {
    name: 'etc-adsense',
    props: {
      dataAdClient: {
        type: String,
        required: true
      },
      dataAdSlot: {
        type: String,
        required: true
      },
      dataAdtest: {
        type: String,
        default: 'off'
      },
      dataAdFormat: {
        type: String,
        default: 'auto'
      },
      dataFullWidthResponsive: {
        type: String,
        default: 'false'
      },
      width: {
        type: String,
        default: '160px'
      },
      height: {
        type: String,
        default: '600px'
      },
      fixed: {
        type: Boolean,
        default: false
      },
      visible: {
        type: Boolean,
        default: true
      },
      debounce: {
        type: Number,
        default: 300
      },
      random: {
        type: Boolean,
        default: false
      },
      horizontal: {
        type: String,
        default: "center"
      }
    },
    data() {
      return {
        tempWidth: '',
        tempHeight: '',
        randomSize: [
          { width: '300px', height: '250px' },
          { width: '336px', height: '280px' },
          { width: '250px', height: '250px' },
          { width: '300px', height: '600px' },
          { width: '160px', height: '600px' }
        ],
        key: 0,
        initDate: Date.now()
      }
    },
    watch: {
      '$route': function (to, old) {
        if (to !== old && old.name !== null) {
          if ((Date.now() - this.initDate) / 1000 > this.debounce) {
            this.setSize()
            this.key++
          }

          this.initDate = Date.now()

          this.$nextTick(() => {
            this.onWindowLoad()
          })

        }
      }
    },
    created() {
      this.setSize()
      window.addEventListener("load", this.onWindowLoad)
    },
    methods: {
      onWindowLoad() {
        if (this.$refs.adbox && !this.$refs.adbox.hasChildNodes())
          (window.adsbygoogle || []).push({})

      },
      setSize() {
        if (this.random === true) {
          const selectedRandomSize = this.randomSize[Math.floor(Math.random() * this.randomSize.length)]
          this.tempWidth = selectedRandomSize.width
          this.tempHeight = selectedRandomSize.height
        }
        else {
          this.tempWidth = this.width
          this.tempHeight = this.height
        }
      }
    }
  }
</script>
<style scoped>

</style>