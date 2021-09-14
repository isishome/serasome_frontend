<template>
  <div class="q-mt-lg q-pa-lg column items-center q-gutter-y-md absolute-center full-width">
    <ss-logo class="text-center q-pb-md gt-xs" style="max-width:300px" />
    <q-card class="no-margin q-pa-md join-card">
      <q-card-section class="no-padding">
        <q-form :autofocus="$q.screen.gt.sm" @submit="checkJoin" class="q-gutter-y-sm column">
          <q-input :disable="processJoin" color="teal-4" v-for="(field, key) in joinForm" :key="key" maxlength="32"
            :type="!field.isPwd && field.type === 'password'? 'text' : field.type" v-model="field.value"
            :label="field.label" :rules="field.rules" outlined hide-hint dense no-error-icon hide-bottom-space>
            <template v-slot:append>
              <q-icon v-if="field.type === 'password'" :name="field.isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer" @click="field.isPwd = !field.isPwd" />
            </template>
          </q-input>
          <q-btn-dropdown outline dense unelevated cover menu-anchor="top left" size="md" class="q-pa-xs"
            :text-color="$q.dark.mode ? 'blue-grey-4' : 'grey-6'">
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-icon size="xs" left :color="category.color" :name="category.icon" />
                <span>{{category.name}}</span>
              </div>
            </template>
            <q-scroll-area style="height:9.2rem">
              <q-list bordered separator>
                <q-item v-for="item in categoryInfo" :key="item.cid" clickable @click="category = item"
                  :active="item === category" active-class="category-selected" v-close-popup dense>
                  <q-item-section top avatar>
                    <q-avatar size="md" :color="item.color" text-color="white" :icon="item.icon" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="text-uppercase">{{item.name}}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </q-btn-dropdown>
          <q-separator />
          <q-btn :loading="processJoin" color="teal-4" type="submit" size="md" :label="$t('join.title')"
            class="full-width" />
        </q-form>
      </q-card-section>
      <q-card-section class="no-padding no-margin">
        <div class="q-my-sm text-caption terms-policy">
          <template v-for="(word, index) in termsPolicy">
            <span :key="index" v-if="word.indexOf('#terms#') !== -1">
              <a href="" @click.prevent="showDialog('terms')">{{word.replace(/#[a-zA-Z-]*#/gi,'')}}</a>
            </span>
            <span :key="index" v-else-if="word.indexOf('#privacy-policy#') !== -1">
              <a href="" @click.prevent="showDialog('privacyPolicy')">{{word.replace(/#[a-zA-Z-]*#/gi,'')}}</a>
            </span>
            <span :key="index" v-else-if="word.indexOf('#cookies-policy#') !== -1">
              <a href="" @click.prevent="showDialog('cookiesPolicy')">{{word.replace(/#[a-zA-Z-]*#/gi,'')}}</a>
            </span>
            <span :key="index" v-else>
              {{word}}
            </span>
          </template>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="no-padding row justify-end items-center q-mt-md text-teal-4">
        <div class="text-caption">{{$t('join.message.haveRegisterAccount')}}</div>
        <q-btn to="/sign" flat color="amber-7" :label="$t('signIn.title')" style="text-decoration: underline;" />
      </q-card-section>
    </q-card>
    <q-dialog v-model="dialogShow" full-height :maximized="$q.screen.lt.md" @before-hide="beforeCloseDialog">
      <q-card :class="['column no-scroll no-padding font-ss', $q.screen.lt.md ? '' : 'post-width']">
        <q-card-section class="q-pa-sm gt-sm text-right">
          <div>
            <q-btn flat round v-close-popup size="sm" icon="close" />
          </div>
        </q-card-section>
        <q-separator class="gt-sm" />
        <q-card-section class="col full-width no-padding">
          <q-scroll-area :thumb-style="thumbStyle" class="fit">
            <ss-terms v-if="dialogName === 'terms'" :lang="$i18n.locale"></ss-terms>
            <ss-privacy-policy v-if="dialogName === 'privacyPolicy'" :lang="$i18n.locale"></ss-privacy-policy>
            <ss-cookies-policy v-if="dialogName === 'cookiesPolicy'" :lang="$i18n.locale"></ss-cookies-policy>
          </q-scroll-area>
        </q-card-section>
        <q-separator class="lt-md" />
        <q-card-section class="lt-md text-right q-pa-sm">
          <div>
            <q-btn flat round v-close-popup size="sm" icon="close" />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- <v-facebook-login v-show="false" app-id="241621523794564" version="v7.0" v-model="fbInfo" @sdk-init="handleSdkInit"
      @login="facebookLogin" /> -->
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  const terms = () => import(/* webpackChunkName: "group-policy" */ './Dialogs/Terms')
  const privacyPolicy = () => import(/* webpackChunkName: "group-policy" */ './Dialogs/PrivacyPolicy')
  const cookiesPolicy = () => import(/* webpackChunkName: "group-policy" */ './Dialogs/CookiesPolicy')

  export default {
    name: 'Join',
    components: {
      ssTerms: terms,
      ssPrivacyPolicy: privacyPolicy,
      ssCookiesPolicy: cookiesPolicy,
    },
    data() {
      return {
        FB: {},
        fbInfo: {},
        scope: {},
        category: { cid: null, name: this.$t('main.category'), icon: 'fas fa-star', color: 'yellow-14' },
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
          },
          'passwordConfirm': {
            type: 'password',
            label: this.$t('join.confirmPassword'),
            value: '',
            rules: [val => val === this.joinForm['password'].value],
            isPwd: true
          },
          'uniqueName': {
            type: 'text',
            label: this.$t('join.uniqueSomeName'),
            value: '',
            rules: [val => new RegExp('^[0-9a-zA-Z]{4,16}$').test(val)]
          }
        },
        dialogName: null,
        dialogShow: false,
        termsPolicy: this.$t('join.termsPolicy').split('|'),
        loading: false,
        processJoin: false
      }
    },
    computed: {
      ...mapGetters({
        categoryInfo: 'getCategory'
      })
    },
    methods: {
      showDialog(val) {
        this.dialogName = val
        this.dialogShow = true
      },
      beforeCloseDialog() {
        this.dialogName = null
      },
      checkJoin() {
        const routeName = this.$route.name

        if (routeName === 'join')
          this.onSubmit(null, null)
        else if (routeName === 'join-facebook' && this.scope.login)
          this.scope.login()
        else if (routeName === 'join-google')
          this.googleLogin()
      },
      onSubmit(fuid, guid) {
        let self = this
        self.processJoin = true
        const router = self.$router

        this.axios
          .post('/seras/account/join', {
            email: this.joinForm.email.value,
            pwd: this.joinForm.password.value,
            uniqueName: this.joinForm.uniqueName.value,
            cid: this.category.cid,
            fuid: fuid,
            guid: guid
          }).then(function (response) {
            if (response.data == '') {
              self.$q.notify({
                type: 'positive',
                color: 'positive',
                message: self.$t('join.message.success')
              })

              self.timer = setTimeout(() => {
                router.push('/').catch(() => { })
              }, 5000)
            }
          })
          .catch(function () { })
          .then(function () {
            self.processJoin = false
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
            this.onSubmit(fResponse.authResponse.userID, null)
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
      googleLogin() {
        if (this.$gAuth.isInit === false)
          return

        const self = this
        this.$gAuth.signIn()
          .then(GoogleUser => {
            if (GoogleUser.isSignedIn() === true) {
              const guid = GoogleUser.getId()
              if (guid)
                this.onSubmit(null, guid)
            }
          })
          .catch(() => {
            self.googleInit = false
          })
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    }
  }
</script>
<style scoped>
  .category-selected {
    color: white;
    background-color: #F2C037;
  }

  .terms-policy a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }

  .post-width {
    width: 50vw !important;
    max-width: none !important;
    min-width: 1024px;
  }

  .join-card {
    width: 100%;
    max-width: 400px;
  }
</style>