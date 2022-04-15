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
        default: false
      },
      icon: {
        type: String,
        default: null
      },
      color: {
        type: String,
        default: null
      },
      textColor: {
        type: String,
        default: null
      },
      message: {
        type: String,
        default: null
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