<template>
  <div>
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 q-mt-md">
      <div v-for="linked in linkedData" :key="linked.name"
        class="q-mb-sm q-px-md row no-wrap justify-start items-center">
        <div class="full-width">
          <div class="q-mb-sm q-px-md row no-wrap justify-start items-center">
            <q-icon name="fas fa-link" size="xs" color="amber-7" />
            <div class="font-title text-h5 text-teal-7 q-ml-sm">{{linked.name}}</div>
          </div>
          <q-separator inset spaced />
          <div class="row justify-start q-gutter-x-sm q-pa-md">
            <q-btn flat dense no-caps v-for="item in linked.data" :key="item.sid" :to="`/@${item.name}`">
              <q-icon :name="item.icon ? item.icon : item.intertwined || item.lsid ? 'fas fa-cubes' : 'fas fa-question'"
                class="q-mr-xs" size="16px" :color="item.intertwined === true ? 'amber-7' : 'grey-5'" />
              <div
                :class="item.intertwined === true ? ['font-title', 'text-teal-7', 'q-ml-xs'] : ['font-title', 'text-grey-5', 'q-ml-xs']">
                {{ item.name }}</div>
            </q-btn>
          </div>
          <q-space class="q-my-xl" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'Work',
    data() {
      return {
        linkedData: null,
      }
    },
    created() {
      this.linked()
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus'
      })
    },
    methods: {
      linked() {
        const self = this

        this.axios
          .get('/seras/some/linked')
          .then(function (response) {
            if (response && response.data) {
              self.linkedData = response.data
            }
          })
          .catch(() => { })
      },
    }
  }
</script>
<style scoped>
</style>