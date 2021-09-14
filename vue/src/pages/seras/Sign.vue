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
      <q-card-section class="no-padding full-width">
        <div class="q-py-sm row justify-start q-gutter-x-md">
          <!-- <div class="col-2">
          <v-facebook-login v-show="false" app-id="241621523794564" version="v7.0" v-model="fbInfo"
            @sdk-init="handleSdkInit" @login="facebookLogin" />
          <q-btn round color="indigo" icon="fab fa-facebook-f" @click="facebookStatus" />
        </div> -->
          <div>
            <q-btn round :disable="!googleInit" :class="[!googleInit ? 'bg-grey-5' : '']" color="red"
              icon="fab fa-google" @click="googleLogin" />
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="no-padding row justify-end items-center q-mt-md text-teal-4">
        <div class="text-caption">{{$t('signIn.message.noRegisterAccount')}}</div>
        <q-btn to="/join" flat color="amber-7" :label="$t('join.title')" style="text-decoration: underline;" />
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
        loading: false,
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
    mounted() {
      let self = this
      let cnt = 0
      let googleApi = setInterval(function () {
        cnt++
        self.googleInit = self.$gAuth.isInit

        if (cnt === 6 || self.googleInit === true)
          clearInterval(googleApi)
      }, 400);
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus'
      })
    },
    methods: {
      ...mapActions({
        setSignStatus: 'setSignStatus',
        setSection: 'setSection',
        setD2RInfo: 'setD2RInfo',
        setSomeList: 'setSomeList',
      }),
      onSubmit() {
        const vm = this
        this.processSign = true

        this.axios
          .post('/seras/account/signin', {
            email: this.joinForm.email.value,
            pwd: this.joinForm.password.value
          }).then(function (response) {
            vm.setSignStatus(true)
            vm.setSomeList(response.data)
            vm.setD2RInfo(null)

            if (vm.redirect)
              vm.$router.push({ path: decodeURIComponent(vm.redirect) }).catch(() => { })
            else
              vm.$router.replace('/').catch(() => { })
          })
          .catch(function () { })
          .then(function () {
            vm.processSign = false
          })
      },
      handleSdkInit({ FB, scope }) {
        this.FB = FB
        this.scope = scope
      },
      facebookLogin(fResponse) {
        if (!fResponse)
          return

        const status = fResponse.status

        switch (status) {
          case 'connected':
            this.facebookCheck(fResponse.authResponse.userID)
            break
          case 'not_authorized':
            this.$q.notify({
              type: 'warning',
              color: 'warning',
              message: 'SeraSome 앱에 로그인 해야 이용가능합니다.'
            })
            break
          default:
            this.$q.notify({
              type: 'warning',
              color: 'warning',
              message: '페이스북에 로그인 해야 이용가능합니다.'
            })
            break
        }
      },
      facebookStatus() {
        const self = this
        if (!this.fbInfo.connected && this.scope.login)
          this.scope.login()
        else {
          this.FB.getLoginStatus(function (fResponse) {
            self.facebookCheck(fResponse.authResponse.userID)
          })
        }
      },
      facebookCheck(fuid) {
        if (!fuid) {
          this.$q.notify({
            type: 'negative',
            color: 'negative',
            message: '페이스북 계정 정보를 가져올 수 없습니다.'
          })

          return
        }

        let self = this
        this.processSign = true

        this.axios
          .post('/seras/account/facebookSignin', {
            'fuid': fuid
          }).then(function (response) {
            self.setSignStatus(true)
            self.setSomeList(response.data)
            self.$router.push('/').catch(() => { })
          })
          .catch(function (error) {
            const statusCode = typeof (error.response) === 'object' ? error.response.status : null;
            if (statusCode === 403) {
              self.$q.notify({
                type: 'warning',
                color: 'warning',
                message: '가입 페이지로 이동합니다.'
              })

              self.$router.replace({ name: 'join-facebook' }).catch(() => { })
            }
          })
          .then(function () {
            self.processSign = false
          })
      },
      googleLogin() {
        const self = this
        this.$gAuth.signIn()
          .then(GoogleUser => {
            if (GoogleUser.isSignedIn() === true) {
              const guid = GoogleUser.getId()
              if (guid)
                self.googleCheck(guid)
            }
          })
          .catch(() => {
            self.googleInit = true
          })
      },
      googleCheck(guid) {
        if (!guid) {
          this.$q.notify({
            type: 'negative',
            color: 'negative',
            message: this.$t('signIn.message.noGetGoogleInfo')
          })

          return
        }

        let vm = this
        this.processSign = true

        this.axios
          .post('/seras/account/googleSignin', {
            'guid': guid
          }).then(function (response) {
            vm.setSignStatus(true)
            vm.setSomeList(response.data)
            vm.setD2RInfo(null)

            if (vm.redirect)
              vm.$router.push({ path: decodeURIComponent(vm.redirect) }).catch(() => { })
            else
              vm.$router.replace('/').catch(() => { })
          })
          .catch(function () { })
          .then(function () {
            vm.processSign = false
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