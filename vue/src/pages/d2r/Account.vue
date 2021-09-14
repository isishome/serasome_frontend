<template>
  <div>
    <div class="row justify-between items-center q-gutter-x-xs q-mb-md">
      <div class="row items-center">
        <q-icon name="settings" class="q-ma-sm" size="20px" color="d2r" />
        <div class="font-title q-ml-xs text-uppercase">{{$t('d2r.account.basic')}}</div>
      </div>
    </div>
    <q-card class="account-wrap">
      <q-card-section>
        <q-input outlined dark borderless no-error-icon hide-bottom-space ref="nickname" color="grey-5"
          v-model="basicInfo.nickname" :label="$t('d2r.beginner.nickname')" :error="basicInfo.error" @input="enter()"
          :error-message="basicInfo.message" readonly>
          <template v-slot:append>
            <q-icon v-if="!basicInfo.duplicate" name="check" color="green-6" />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="row justify-start items-center q-gutter-x-sm">
        <q-avatar rounded color="d2r" text-color="grey-4" class="q-mr-xs" size="40px">
          <q-img basic v-if="basicInfo.avatar" :src="basicInfo.avatar" :ratio="1">
            <template #error>
              <div class="bg-d2r absolute-center">
                {{basicInfo.nickname.toUpperCase().substring(0,1)}}
              </div>
            </template>
          </q-img>
        </q-avatar>
        <q-uploader dark bordered class="col bg-transparent" color="transparent" ref="uploader" :disable="loading"
          accept="image/*" :factory="postWithAvatar" :label="$t('d2r.account.avatar')" @added="added" @removed="removed"
          @uploaded="complete" @failed="failed" @start="start" @finish="finish" hide-upload-btn>
          <template v-slot:list="scope">
            <q-list separator>
              <q-item v-for="file in scope.files" :key="file.name">
                <q-item-section>
                  <q-item-label class="full-width ellipsis">
                    {{ file.name }}
                  </q-item-label>
                  <q-item-label caption>
                    Status: {{ file.__status }}
                  </q-item-label>
                  <q-item-label caption>
                    {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                  </q-item-label>
                </q-item-section>
                <q-item-section v-if="file.__img" thumbnail>
                  <img :src="file.__img.src" style="width:40px;height: 40px;">
                </q-item-section>
                <q-item-section top side>
                  <q-btn size="12px" flat dense round icon="delete" @click="scope.removeFile(file)" />
                </q-item-section>
              </q-item>
            </q-list>
          </template>
        </q-uploader>
      </q-card-section>
      <q-separator dark inset />
      <q-card-actions align="right">
        <q-btn dense class="bg-d2r" :loading="loading" type="submit" size="16px" :label="$t('btn.modify')"
          @click="onSubmit" />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    name: 'd2r-account',
    data() {
      return {
        loading: false,
        basicInfo: {
          nickname: null,
          error: false,
          duplicate: true,
          message: '',
          fileList: [],
          avatar: null
        }
      }
    },
    created() {
      this.getUserInfo()
    },
    computed: {
      ...mapGetters({
        d2rInfo: 'getD2RInfo'
      }),
      checkValidate() {
        return /^[a-zA-Z]{1,32}$/mi.test(this.basicInfo.nickname || '')
      },
      carouselHeight() {
        const sm = this.$q.screen.lt.md
        return sm ? [0, '130px', '130px', '170px', '200px'][this.step] : [0, '90px', '140px', '190px'][this.step]
      }
    },
    methods: {
      ...mapActions({
        setD2RInfo: 'setD2RInfo'
      }),
      getUserInfo() {
        const vm = this
        this.loading = true
        this.axios
          .get('/d2r/account/detail')
          .then(function (response) {
            vm.basicInfo.nickname = response.data.nickname
            vm.basicInfo.avatar = response.data.avatar
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      added(files) {
        const exists = this.basicInfo.fileList.map(f => f.name)
        const addFiles = (files.filter(f => !exists.includes(f.name)))
        this.basicInfo.fileList = [...this.basicInfo.fileList, ...addFiles]
      },
      removed(files) {
        const exists = this.basicInfo.fileList.map(f => f.name)
        const filter = files.filter(f => exists.includes(f.name))
        filter.forEach(f => {
          if (f.__img) {
            const findIndex = this.basicInfo.fileList.findIndex(fi => fi.__img.src === f.__img.src)

            if (findIndex !== -1)
              this.basicInfo.fileList.splice(findIndex, 1)
          }
        })
      },
      onSubmit() {
        if (this.basicInfo.fileList.length > 0)
          this.$refs.uploader.upload()
        else
          this.post()
      },
      postWithAvatar() {
        return {
          url: `${this.axios.defaults.baseURL}/d2r/account/update`,
          method: 'POST',
          withCredentials: true,
          formFields: [
            {
              'name': 'basicInfo',
              'value': encodeURIComponent(JSON.stringify({
                nickname: this.basicInfo.nickname
              }))
            }
          ]
        }
      },
      post() {
        const vm = this
        this.loading = true
        this.axios
          .post('/d2r/account/update', {
            basicInfo: encodeURIComponent(JSON.stringify({
              nickname: this.basicInfo.nickname
            }))
          }).then(function (response) {
            vm.complete({
              xhr: {
                response: JSON.stringify(response.data)
              }
            })
          })
          .catch(function () { })
          .then(function () {
            vm.loading = false
          })
      },
      complete(info) {
        const result = JSON.parse(info.xhr.response)
        this.setD2RInfo(result)
        this.basicInfo.nickname = result.nickname
        this.basicInfo.avatar = result.avatar
        this.$nextTick(() => {
          this.basicInfo.fileList = []
          this.$refs.uploader.reset()
        })
      },
      failed(info) {
        this.$q.notify({
          type: 'negative',
          color: 'negative',
          message: this.$t('d2r.account.message.failed').concat(' (', info.xhr.response, ')')
        })
      },
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>
<style scoped>
  .account-wrap {
    background-color: rgba(0, 0, 0, 0.4);
    color: #CCCCCC;
  }

  .account-wrap .q-card__section {
    padding: 1vw;
  }

  .account-wrap hr {
    background-color: rgba(200, 200, 200, 0.1);
  }
</style>