<template>
  <div class="q-mt-lg q-pa-lg column items-center q-gutter-y-md absolute-center full-width">
    <ss-logo class="text-center q-pb-md gt-xs" style="max-width:300px" />
    <q-card v-if="signStatus === true" class="q-pa-md info-card">
      <q-card-section class="no-padding q-mb-md">
        <q-form @submit="onSubmit" class="q-gutter-y-sm column">
          <q-input :disable="processModify || key === 'email' || key === 'name'" color="teal-4"
            v-for="(field, key) in joinForm" :key="key" maxlength="32"
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
                  :active="item.cid === category.cid" active-class="category-selected" v-close-popup dense>
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
          <q-btn :loading="processModify" color="teal-4" type="submit" size="md" :label="$t('btn.modify')"
            style="width:100%" />
        </q-form>
      </q-card-section>
      <q-separator />
      <!-- <q-card-section class="no-padding full-width">
        <div class="q-py-sm row justify-start q-gutter-x-md">
          <div class="col-2">
          <v-facebook-login v-show="false" app-id="241621523794564" version="v7.0" v-model="fbInfo"
            @sdk-init="handleSdkInit" @login="facebookLogin" />
          <q-btn round :class="[facebookLinked ? 'disconnect' : '']" color="indigo" icon="fab fa-facebook-f"
            @click="facebook" />
        </div>
          <div>
            <q-btn round :disable="!googleInit" :class="[!googleInit ? 'bg-grey-5' : googleLinked ? 'disconnect' : '']"
              color="red" icon="fab fa-google" @click="google" />
          </div>
        </div>
      </q-card-section> -->
    </q-card>
    <!-- <ss-confirm v-model="facebookUnlinkConfirm" icon="fas fa-unlink" color="warning" text-color="white"
      message="페이스북 연동을 해제할까요?" @cancel="facebookUnlinkConfirm = false" @confirm="facebookUnlink" />
    <ss-confirm v-model="googleUnlinkConfirm" icon="fas fa-unlink" color="warning" text-color="white"
      :message="$t('myInfo.message.disconnectGoogle')" @cancel="googleUnlinkConfirm = false" @confirm="googleUnlink" /> -->
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'Join',
    data() {
      return {
        FB: {},
        fbInfo: {},
        scope: {},
        email: null,
        category: { cid: null, name: this.$t('main.category'), icon: 'fas fa-star', color: 'yellow-14' },
        joinForm: {
          'email': {
            type: 'text',
            label: this.$t('signIn.email'),
            value: '',
            rules: [val => new RegExp('^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$', 'i').test(val)]
          },
          'name': {
            type: 'text',
            label: this.$t('join.uniqueSomeName'),
            value: '',
            rules: [val => new RegExp('^[0-1a-zA-Z]{4,16}$').test(val)]
          },
          'currentPassword': {
            type: 'password',
            label: this.$t('myInfo.currentPassword'),
            value: '',
            rules: [val => new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$ %\\^&\\*])(?=.{8,}).*$').test(val)],
            isPwd: true
          },
          'password': {
            type: 'password',
            label: this.$t('myInfo.NewPassword'),
            value: '',
            rules: [val => new RegExp('^(|(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$ %\\^&\\*])(?=.{8,}).*)$').test(val)],
            isPwd: true,
            error: false,
            hint: this.$t('signIn.passwordHint')
          },
          'passwordConfirm': {
            type: 'password',
            label: this.$t('myInfo.confirmNewPassword'),
            value: '',
            rules: [val => val === this.joinForm['password'].value],
            isPwd: true
          }
        },
        loading: false,
        processModify: false
      }
    },
    created() {
      this.getInfo()
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus',
        categoryInfo: 'getCategory'
      })
    },
    methods: {
      getInfo() {
        const self = this

        this.axios
          .get('/seras/account/info')
          .then(function (response) {
            self.joinForm.email.value = response.data.email
            self.joinForm.name.value = response.data.name

            const findCg = self.categoryInfo.find(c => c.cid === response.data.cid)

            if (findCg !== null)
              self.category = findCg

          })
      },
      onSubmit() {
        const self = this
        const router = self.$router
        self.processModify = true

        this.axios
          .post('/seras/account/modify', {
            cPwd: this.joinForm.currentPassword.value,
            pwd: this.joinForm.password.value,
            cid: this.category.cid
          }).then(function (response) {
            if (response.data == '') {
              self.$q.notify({
                type: 'positive',
                color: 'positive',
                message: self.$t('myInfo.message.successChange')
              })

              router.push('/').catch(() => { })
            }
          })
          .catch(function () { })
          .then(function () {
            self.processModify = false
          })
      }
    }
  }
</script>
<style scoped>
  .info-card {
    width: 100%;
    max-width: 400px;
  }

  .category-selected {
    color: white;
    background-color: #F2C037;
  }

  .disconnect {
    background: repeating-linear-gradient(-45deg, #444, #444 5px, #888 0, #888 25px) !important;
  }
</style>