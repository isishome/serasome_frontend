<template>
  <q-layout class="bg-teal-1">
    <q-list class="column justify-start items-center absolute-center full-width">
      <q-item class="lt-md">
        <q-avatar size="60px" round>
          <q-badge floating transparent color="red" label="404" />
          <img src="@/assets/images/logo.svg" />
        </q-avatar>
      </q-item>
      <q-item>
        <q-item-section class="gt-sm" center avatar>
          <q-avatar size="60px" round>
            <q-badge floating transparent color="red" label="404" />
            <img src="@/assets/images/logo.svg" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 text-weight-bold text-black">{{$t('pnf.desc1')}}</q-item-label>
          <q-item-label class="text-body q-pt-sm text-black">{{$t('pnf.desc2')}}
          </q-item-label>
          <q-item-label class="text-body text-black">{{$t('pnf.desc3')}}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-layout>
</template>
<script>
  export default {
    name: 'PageNotFound',
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
</style>