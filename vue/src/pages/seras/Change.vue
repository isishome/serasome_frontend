<template>
  <div v-if="changeView === true" class="q-mt-lg q-pa-lg column items-center q-gutter-y-md absolute-center full-width">
    <ss-logo class="text-center q-pb-md gt-xs" style="max-width:300px" />
    <q-card class="no-margin q-pa-md join-card">
      <q-card-section class="no-padding">
        <q-form :autofocus="$q.screen.gt.sm" @submit="onSubmit" class="q-gutter-y-sm column">
          <q-input :disable="loading" color="teal-4" v-for="(field, key) in changeForm" :key="key" maxlength="32"
            :type="!field.isPwd && field.type === 'password'? 'text' : field.type" v-model="field.value"
            :label="field.label" :rules="field.rules" @blur="field.error = false"
            @input="field.error = !field.rules[0](field.value)" outlined hide-hint dense no-error-icon
            hide-bottom-space>
            <template v-slot:append>
              <q-icon v-if="field.type === 'password'" :name="field.isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer" @click="field.isPwd = !field.isPwd" />
            </template>
            <q-tooltip v-if="field.hint" no-parent-event :offset="[0, 0]" anchor="top start" self="bottom start"
              v-model="field.error" content-class="input-tip">
              {{field.hint}}
            </q-tooltip>
          </q-input>
          <q-btn :loading="loading" color="teal-4" type="submit" size="md" :label="$t('change.btn.change')"
            class="full-width" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
  export default {
    name: 'Change',
    data() {
      return {
        changeForm: {
          'password': {
            type: 'password',
            label: this.$t('change.password'),
            value: '',
            rules: [val => new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$ %\\^&\\*])(?=.{8,}).*$').test(val)],
            isPwd: true,
            error: false,
            hint: this.$t('signIn.passwordHint')
          },
          'passwordConfirm': {
            type: 'password',
            label: this.$t('change.confirmPassword'),
            value: '',
            rules: [val => val === this.changeForm['password'].value],
            isPwd: true
          }
        },
        passCode: null,
        changeView: false,
        loading: false
      }
    },
    created() {
      this.passCode = this.$router.currentRoute.query.passcode
      this.checkCode()
    },
    methods: {
      checkCode() {
        const vm = this
        vm.loading = true
        this.axios
          .post('/seras/account/checkPassCode', {
            'passCode': this.passCode
          }).then(function (response) {
            if (response.data === false)
              vm.$router.push({ name: 'main' }).catch(() => { })
            else
              vm.changeView = true
          })
          .catch(function () {
            vm.$router.push({ name: 'main' }).catch(() => { })
          })
          .then(function () {
            vm.loading = false
          })
      },
      onSubmit() {
        const vm = this
        vm.loading = true
        this.axios
          .post('/seras/account/change', {
            'passCode': this.passCode,
            'pwd': this.changeForm.password.value
          }).then(function (response) {
            if (response.data == '') {
              vm.$q.notify({
                type: 'positive',
                color: 'positive',
                message: vm.$t('change.message.successChange')
              })

              vm.$router.push('/sign').catch(() => { })
            }
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      }
    }
  }
</script>
<style scoped>
  .join-card {
    width: 100%;
    max-width: 400px;
  }
</style>