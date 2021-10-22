<template>
  <div :style="`position:fixed;width:${width};height:${height}`">
    <ins class="adsbygoogle" style="display:block" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot"
      :data-adtest="dataAdtest" :data-ad-format="dataAdFormat"
      :data-full-width-responsive="dataFullWidthResponsive"></ins>
  </div>
</template>
<script>
  import { uid } from 'quasar'

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
        type: Boolean,
        default: true
      },
      width: {
        type: String,
        default: '160px'
      },
      height: {
        type: String,
        default: '600px'
      }
    },
    data() {
      return {
        key: uid()
      }
    },
    watch: {
      '$route': function (to, old) {
        if (to !== old & old.name !== null) {
          this.key = uid();
        }
      }
    }
  }
</script>
<style scoped>

</style>