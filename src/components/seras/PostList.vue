<template>
  <div>
    <q-infinite-scroll v-if="!limited" ref="is" @load="(index, done) => $emit('load', index, done)" :offset="100">
      <div class="row content-start justify-start" :class="$q.screen.gt.sm ? 'q-col-gutter-lg' : 'q-col-gutter-sm'">
        <div class="col-6 col-md-3 col-sm-4 col-xs-6 non-selectable" v-for="item in list" :key="item.pid">
          <q-responsive class="fit" :ratio="1">
            <q-card bordered square flat class="card column items-center cursor-pointer" :class="[$q.screen.gt.sm ? 'q-pa-xs' : ''
            ]" @click="clickPost(item.sname, item.pid)">
              <div class="absolute-top-right nunito" style="z-index:1;top:4px;right:-8px">
                <q-chip size="xs" :color="$q.dark.isActive ? 'grey-2' : 'teal-10'"
                  :text-color="$q.dark.isActive ? 'grey-10' : 'white'" class="chip">
                  <div class="q-mr-xs">
                    <q-icon name="visibility" :color="grade(item.seq)" />
                  </div>
                  <div>
                    {{ isView(item.seq) }}
                  </div>
                </q-chip>
              </div>
              <q-spinner-bars v-if="loading === true && pid === item.pid" :thickness="10" color="teal-8" size="20%"
                class="absolute-center" style="z-index: 100;" />
              <q-card-section class="col-8 no-padding full-width">
                <q-img style="height: 100%;" :src="parsCardThumb(item.thumbnail)" spinner-color="teal-4" />
                <q-separator class="q-my-xs" />
              </q-card-section>
              <q-card-section class="col col-md-3 no-padding full-width row items-center card-title">
                <div class="q-px-sm text-left font-ss" :class="$q.screen.lt.md ? 'ellipsis' : 'ellipsis-2-lines'">
                  {{ item.title }}
                </div>
              </q-card-section>
              <q-card-section
                class="col no-padding full-width row justify-between items-center card-author text-grey-7">
                <div class="col-6 q-pl-sm text-left ellipsis">{{ item.name }}</div>
                <div class="col-6 q-pr-sm text-right">{{ parsDate(item.reg_date) }}</div>
              </q-card-section>
            </q-card>
          </q-responsive>
        </div>
      </div>
      <template v-slot:loading>
        <div class="row justify-center items-center q-my-md">
          <q-spinner-dots :color="$q.dark.isActive ? 'grey-4' : 'teal-4'" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
    <div v-else class="row content-start justify-start"
      :class="$q.screen.gt.sm ? 'q-col-gutter-lg' : 'q-col-gutter-sm'">
      <q-intersection once v-for="item in list" :key="item.pid" class="col-6 col-md-3 col-sm-4 col-xs-6 non-selectable">
        <q-responsive class="fit" :ratio="1">
          <q-card bordered square flat class="card column items-center cursor-pointer" :class="[$q.screen.gt.sm ? 'q-pa-xs' : ''
          ]" @click="clickPost(item.sname, item.pid)">
            <div class="absolute-top-right nunito" style="z-index:1;top:4px;right:-8px">
              <q-chip size="xs" :color="$q.dark.isActive ? 'grey-2' : 'teal-10'"
                :text-color="$q.dark.isActive ? 'grey-10' : 'white'" class="chip">
                <div class="q-mr-xs">
                  <q-icon name="visibility" :color="grade(item.seq)" />
                </div>
                <div>
                  {{ isView(item.seq) }}
                </div>
              </q-chip>
            </div>
            <q-spinner-bars v-if="loading === true && pid === item.pid" :thickness="10" color="teal-8" size="20%"
              class="absolute-center" style="z-index: 100;" />
            <q-card-section class="col-8 no-padding full-width">
              <q-img style="height: 100%;" :src="parsCardThumb(item.thumbnail)" spinner-color="teal-4" />
              <q-separator class="q-my-xs" />
            </q-card-section>
            <q-card-section class="col col-md-3 no-padding full-width row items-center card-title">
              <div class="q-px-sm text-left font-ss" :class="$q.screen.lt.md ? 'ellipsis' : 'ellipsis-2-lines'">
                {{ item.title }}
              </div>
            </q-card-section>
            <q-card-section class="col no-padding full-width row justify-between items-center card-author text-grey-7">
              <div class="col-6 q-pl-sm text-left ellipsis">{{ item.name }}</div>
              <div class="col-6 q-pr-sm text-right">{{ parsDate(item.reg_date) }}</div>
            </q-card-section>
          </q-card>
        </q-responsive>
      </q-intersection>
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
    },
    limited: {
      type: Boolean,
      default: false
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
    },
    resume() {
      if (this.$refs.is)
        this.$refs.is.resume()
    },
    trigger() {
      if (this.$refs.is)
        this.$refs.is.trigger()
    }
  }
}
</script>
<style scoped>
.card {
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .3) !important;
  background-color: rgba(0, 0, 0, .05);
}

.body--dark .card {
  border-color: rgba(255, 255, 255, .2);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 1) !important;
  background-color: rgba(0, 0, 0, .2) !important;
}

.chip {
  padding: 12px 6px;
  border-radius: 4px 0 0 4px;
}

.chip::after {
  content: '';
  top: 0;
  left: 0;
  right: 4px;
  bottom: 0;
  position: absolute;
  border-radius: 4px 0 0 4px;
  z-index: -1;
  background-color: rgba(0, 0, 0, .3);
  transform: translateY(2px);
}
</style>