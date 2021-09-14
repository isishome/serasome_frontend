<template>
  <div>
    <q-dialog dark v-model="show" :position="$q.screen.lt.md ? 'bottom' : 'standard'" @input="change">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar :icon="icon" size="md" :color="color" :text-color="textColor" />
          <span class="q-ml-sm">{{message}}</span>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat :label="$t('btn.cancel')" @click="cancel" />
          <q-btn flat :label="$t('btn.confirm')" @click="confirm" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
  export default {
    name: 'ss-confirm',
    props: {
      value: {
        type: Boolean,
        defaut: false
      },
      icon: {
        type: String,
        defaut: null
      },
      color: {
        type: String,
        defaut: null
      },
      textColor: {
        type: String,
        defaut: null
      },
      message: {
        type: String,
        defaut: null
      }
    },
    data() {
      return {
        show: false
      }
    },
    watch: {
      value: function (val) {
        this.show = val
      }
    },
    methods: {
      change() {
        if (this.show === false)
          this.cancel()
      },
      cancel() {
        this.$emit('cancel')
      },
      confirm() {
        this.$emit('confirm');
      }
    }
  }
</script>
<style scoped>
</style>