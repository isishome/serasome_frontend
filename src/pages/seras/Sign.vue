<template>
  <div class="q-mt-lg q-pa-lg column items-center q-gutter-y-md absolute-center full-width">
    <ss-logo class="text-center" style="max-width:300px" />
    <q-card class="q-pa-md sign-card">
      <q-card-section class="no-padding q-mb-md">
        <q-form :autofocus="$q.screen.gt.sm" @submit="onSubmit" class="q-gutter-y-lg column">
          <q-input :disable="processSign" color="teal-4" v-for="(field, key) in joinForm" maxlength="32"
            :type="!field.isPwd && field.type === 'password'? 'text' : field.type" v-model="field.value"
            :label="field.label" :rules="field.rules" :key="key" outlined hide-hint dense no-error-icon
            hide-bottom-space>
            <template v-slot:append>
              <q-icon v-if="field.type === 'password'" :name="field.isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer" @click="field.isPwd = !field.isPwd" />
            </template>
          </q-input>
          <q-btn :loading="processSign" color="teal-4" type="submit" size="md" :label="$t('signIn.title')"
            class="full-width" />
        </q-form>
      </q-card-section>
      <q-separator />
      <!-- <q-card-section class="no-padding full-width">
        <div class="q-py-sm row justify-start q-gutter-x-md">
          <div class="col-2">
          <v-facebook-login v-show="false" app-id="241621523794564" version="v7.0" v-model="fbInfo"
            @sdk-init="handleSdkInit" @login="facebookLogin" />
          <q-btn round color="indigo" icon="fab fa-facebook-f" @click="facebookStatus" />
        </div>
          <div>
            <q-btn round :disable="!googleInit" :class="[!googleInit ? 'bg-grey-5' : '']" color="red"
              icon="fab fa-google" @click="googleLogin" />
          </div>
        </div>
      </q-card-section> -->
      <q-separator />
      <q-card-section class="no-padding q-mt-md">
        <div class="column">
          <div class="row justify-end items-center text-teal-4 q-gutter-x-md text-caption">
            <div>{{$t('signIn.message.noRegisterAccount')}}</div>
            <router-link to="/join" class="text-amber-7">
              {{$t('join.title')}}</router-link>
          </div>
          <div class="row justify-end q-mt-sm">
            <router-link to="/forgot" class="text-amber-7 text-caption">
              {{$t('signIn.message.forgotYourPassword')}}</router-link>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    name: 'Join',
    props: {
      redirect: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        FB: {},
        fbInfo: {},
        scope: {},
        googleInit: false,
        joinForm: {
          'email': {
            type: 'email',
            label: this.$t('signIn.email'),
            value: '',
            rules: [val => new RegExp('^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$', 'i').test(val)]
          },
          'password': {
            type: 'password',
            label: this.$t('signIn.password'),
            value: '',
            rules: [val => new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$ %\\^&\\*])(?=.{8,}).*$').test(val)],
            isPwd: true
          }
        },
        processSign: false
      }
    },
    created() {
      if (this.signStatus === true) {
        this.$q.notify({
          type: 'warning',
          color: 'warning',
          message: this.$t('signIn.message.alreadyLoggedIn')
        })
        if (this.redirect)
          this.$router.push({ path: decodeURIComponent(this.redirect) }).catch(() => { })
        else
          this.$router.replace('/').catch(() => { })
      }
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus'
      })
    },
    methods: {
      ...mapActions({
        setSignStatus: 'setSignStatus',
        setSomeList: 'setSomeList'
      }),
      onSubmit() {
        const vm = this
        this.processSign = true
        window.grecaptcha.ready(function () {
          window.grecaptcha.execute(process.env.VUE_APP_GOOGLE_RC_SITEKEY, { action: 'submit' }).then(function (token) {
            vm.checkToken(token)
          })
        })
      },
      checkToken(token) {
        const vm = this

        this.axios
          .post('/seras/account/signin', {
            email: this.joinForm.email.value,
            pwd: this.joinForm.password.value,
            token: token
          }).then(function (response) {
            if (response.status === 200) {
              vm.setSignStatus(true)
              vm.setSomeList(response.data)

              if (vm.redirect)
                vm.$router.push({ path: decodeURIComponent(vm.redirect) }).catch(() => { })
              else if (typeof (vm.$route.query.d2r) !== 'undefined')
                document.location.href = process.env.VUE_APP_D2R_URL
              else
                vm.$router.replace('/').catch(() => { })
            }
            else if (response.status === 202) {
              vm.$q.notify({
                type: 'warning',
                color: 'warning',
                message: response.data,
                timeout: 5000,
                actions: [
                  {
                    label: vm.$t('btn.resend'), color: 'black', handler: () => {
                      window.grecaptcha.ready(function () {
                        window.grecaptcha.execute(process.env.VUE_APP_GOOGLE_RC_SITEKEY, { action: 'submit' }).then(function (token) {
                          vm.resend(token)
                        })
                      })
                    }
                  }
                ]
              })
            }
          })
          .catch(function () { })
          .then(function () {
            vm.processSign = false
          })
      },
      resend(token) {
        const vm = this

        this.axios
          .post('/seras/account/resend', {
            email: this.joinForm.email.value,
            pwd: this.joinForm.password.value,
            token: token
          }).then(function () {
            vm.$q.notify({
              type: 'positive',
              color: 'positive',
              message: vm.$t('signIn.message.resend')
            })
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

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>