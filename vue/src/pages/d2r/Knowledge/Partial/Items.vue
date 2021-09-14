<template>
  <div class="full-width">
    <d2r-tap-panel part="none" no-wide>
      <template #tabs>
        <q-tab class="gt-xs" style="width:114px;visibility: hidden;">
        </q-tab>
      </template>
      <template #panels>
        <q-tab-panel name="none">
          <div class="q-pa-sm text-h4" style="height:50vh">
            <div class="full-width text-center absolute-center font-kodia word-break">{{$t('d2r.comingSoon')}}</div>
          </div>
        </q-tab-panel>
      </template>
    </d2r-tap-panel>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
</style>