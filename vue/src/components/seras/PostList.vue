<template>
  <div class="q-pa-sm">
    <div class="row content-start justify-start" :class="$q.screen.gt.sm ? 'q-col-gutter-lg' : 'q-col-gutter-sm'">
      <div class="col-6 col-xl-3 col-sm-4 col-xs-6 non-selectable" v-for="item in list" :key="item.pid">
        <q-btn :disable="loading" no-caps flat dense class="fit" @click="clickPost(item.sname, item.pid)">
          <div class="absolute-top-right nunito" style="z-index:1;top:4px;right:-4px;opacity: 0.9;">
            <q-chip square size="xs" style="padding:12px 6px" :color="$q.dark.isActive ? 'grey-2' : 'teal-10'"
              :text-color="$q.dark.isActive ? 'grey-10' : 'white'" class=" shadow-3">
              <div class="q-mr-xs">
                <q-icon name="far fa-eye" :color="grade(item.seq)" />
              </div>
              <div>
                {{isView(item.seq)}}
              </div>
            </q-chip>
          </div>
          <q-responsive class="fit" :ratio="1">
            <q-card bordered class="column items-center" :class="[$q.dark.isActive ? 'bg-transparent' : 'bg-blue-grey-1', $q.screen.gt.sm ? 'q-pa-xs' : ''
            ]">
              <q-spinner-bars v-if="loading === true && pid === item.pid" :thickness="10" color="teal-8" size="20%"
                class="absolute-center" style="z-index: 100;" />
              <q-card-section class="col-8 no-padding full-width">
                <q-img style="height: 100%;" :src="parsCardThumb(item.thumbnail)" spinner-color="teal-4" />
                <q-separator class="q-my-xs" />
              </q-card-section>
              <q-card-section class="col col-md-3 no-padding full-width row items-center card-title">
                <div class="q-px-sm text-left font-ss" :class="$q.screen.lt.md ? 'ellipsis' : 'ellipsis-2-lines'">
                  {{item.title}}
                </div>
              </q-card-section>
              <q-card-section
                class="col no-padding full-width row justify-between items-center card-author text-grey-7">
                <div class="col-6 q-pl-sm text-left ellipsis">{{item.name}}</div>
                <div class="col-6 q-pr-sm text-right">{{parsDate(item.reg_date)}}</div>
              </q-card-section>
            </q-card>
          </q-responsive>
        </q-btn>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'ss-post-list',
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array,
        default: function () {
          return []
        }
      },
      pid: {
        type: String,
        default: null
      }
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters({
        signStatus: 'getSignStatus'
      })
    },
    methods: {
      clickPost(sname, pid) {
        this.$emit('view', sname, pid)
      },
      parsCardThumb(thumbnail) {
        return decodeURIComponent(thumbnail) === 'null' ? require('@/assets/images/blank.png') : decodeURIComponent(thumbnail)
      },
      parsDate(date) {
        const local = new Date(date)
        const yyyy = local.getFullYear()
        const mm = local.getMonth() + 1
        const dd = local.getDate()
        return `${yyyy}-${mm > 9 ? mm : '0' + mm}-${dd > 9 ? dd : '0' + dd}`
      },
      grade(seq) {
        let color = 'white'

        if (seq > 0 && seq < 100)
          color = 'amber-8'
        else if (seq > 99 && seq < 200)
          color = 'green-8'
        else if (seq > 199 && seq < 300)
          color = 'blue-8'
        else if (seq > 299 && seq < 400)
          color = 'purple-5'
        else if (seq > 399 && seq < 500)
          color = 'red'
        else if (seq > 499 && seq < 600)
          color = 'brown'
        else if (seq > 599)
          color = 'teal-4'

        return color
      }
    }
  }
</script>
<style scoped>

</style>