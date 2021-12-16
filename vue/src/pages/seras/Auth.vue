<template>
  <q-layout class="bg-teal-1">
    <div class="column justify-start items-center absolute-center full-width">
      <div class="text-h4 text-weight-bold text-teal-7">{{$t('auth.title')}}</div>
      <q-list>
        <q-item>
          <q-item-section center avatar>
            <q-avatar size="200px">
              <q-badge floating transparent color="positive" style="right:20px;top:20px">
                <q-spinner-dots v-if="loading" color="white" size="xl" />
                <q-icon v-else name="email" color="white" size="xl" />
              </q-badge>
              <img src="@/assets/images/seras.svg" />
            </q-avatar>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-layout>
</template>
<script>
  export default {
    name: 'Auth',
    data() {
      return {
        loading: false
      }
    },
    created() {
      const self = this
      const authCodeStr = this.$router.currentRoute.query.authcode

      this.loading = true
      this.axios
        .post('/seras/account/auth', {
          authCode: authCodeStr
        })
        .then(function (response) {
          if (response.data === '') {
            self.$q.notify({
              type: 'positive',
              color: 'positive',
              message: self.$t('auth.message.success')
            })

            self.timer = setTimeout(() => {
              self.$router.push('/sign').catch(() => { })
            }, 5000)
          }
        })
        .catch(() => { })
        .then(() => {
          self.loading = false
        })
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    }
  }
</script>
<style scoped>
</style>