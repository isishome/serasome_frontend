<template>
  <div class="q-mt-lg q-pa-lg column items-center q-gutter-y-md absolute-center full-width">
    <ss-logo class="text-center" style="max-width:300px" />
    <q-card class="q-pa-md sign-card">
      <q-card-section class="no-padding q-mb-md">
        <q-form :autofocus="$q.screen.gt.sm" @submit="onSubmit" class="q-gutter-y-lg column">
          <q-input :disable="loading" color="teal-4" v-for="(field, key) in forgotForm" maxlength="32"
            :type="field.type" v-model="field.value" :label="field.label" :rules="field.rules" :key="key" outlined
            hide-hint dense no-error-icon hide-bottom-space>
          </q-input>
          <q-btn type="submit" :loading="loading" color="teal-4" size="md" :label="$t('forgot.btn.send')"
            class="full-width" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
  export default {
    name: 'Forgot',
    props: {
      redirect: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        forgotForm: {
          'email': {
            type: 'email',
            label: this.$t('signIn.email'),
            value: '',
            rules: [val => new RegExp('^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$', 'i').test(val)]
          }
        },
        loading: false
      }
    },
    mounted() {
      this.createRecaptcha()
    },
    beforeDestroy() {
      this.removeRecaptcha()
    },
    methods: {
      onSubmit() {
        const vm = this
        this.loading = true
        window.grecaptcha.ready(function () {
          window.grecaptcha.execute(process.env.VUE_APP_GOOGLE_RC_SITEKEY, { action: 'submit' }).then(function (token) {
            vm.checkToken(token)
          })
        })
      },
      checkToken(token) {
        const vm = this
        this.axios
          .post('/seras/account/forgot', {
            'email': this.forgotForm.email.value,
            'token': token
          }).then(function () {
            vm.$q.notify({
              type: 'positive',
              color: 'positive',
              message: vm.$t('forgot.message.successSendMail')
            })

            vm.forgotForm.email.value = ''
          })
          .catch(function () {
            vm.$q.notify({
              type: 'warning',
              color: 'warning',
              message: vm.$t('forgot.message.failedSendMail')
            })
          })
          .then(function () {
            vm.loading = false
          })
      }
    }
  }
</script>
<style scoped>
  .sign-card {
    width: 100%;
    max-width: 400px;
  }
</style>