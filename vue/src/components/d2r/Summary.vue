<template>
  <q-list dark class="row summary-wrap relative-position">
    <q-item v-if="loading" class="lastest-wrap full-width" style="min-height: 100px;">
      <div class="non-selectable">
        <q-inner-loading showing size="xs" dark class="bg-transparent">
          <q-spinner-ball size="lg" color="d2r" />
        </q-inner-loading>
      </div>
    </q-item>
    <q-item v-for="sec in data" :key="sec.value" class="no-padding col-xs-12 col-sm-6 col-md-4 summary">
      <div class="lastest-wrap full-width">
        <q-toolbar class="row justify-between sub">
          <div class="lt-sm col-4"></div>
          <div class="col-4 text-weight-bold font-kodia" :class="$q.screen.lt.sm ? 'text-center' : ''">{{sec.title}}
          </div>
          <div class="col text-right">
            <q-icon v-if='more === true' name="more_horiz" size="xs" class="cursor-pointer"
              @click="moreClick(sec.value)" />
          </div>
        </q-toolbar>
        <q-list padding :dense="$q.screen.lt.sm" dark class="text-grey-6 text-body">
          <q-item-label v-if="sec.summary.length ===0" class="q-ma-md">
            <div class="row justify-center">
              {{$t('table.noData')}}
            </div>
          </q-item-label>
          <q-item class="no-padding" v-for="summary in sec.summary" :key="summary.pid">
            <q-btn flat unelevated no-caps class="text-body fit" @click="itemClick(summary)">
              <q-item-section top avatar>
                <q-avatar rounded class="outlined">
                  <q-img basic :ratio="1" style="width:40px" :src="parsThumbnail(summary.thumbnail)"
                    spinner-color="d2r">
                    <template v-if="blank !== null" #error>
                      <q-img no-default-spinner basic :ratio="2/1" :src="require(`@/assets/images/d2r/${blank}`)"
                        class="absolute-center" />
                    </template>
                  </q-img>
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="ellipsis text-grey-4 text-left">{{summary.title}}</q-item-label>
                <q-item-label class="ellipsis text-left">
                  {{summary.contents}}
                </q-item-label>
              </q-item-section>
            </q-btn>
          </q-item>
        </q-list>
      </div>
    </q-item>
  </q-list>
</template>
<script>
  export default {
    name: 'd2r-summary',
    props: {
      data: {
        type: Array,
        required: true,
        default: function () {
          return []
        }
      },
      more: {
        type: Boolean,
        default: false
      },
      blank: {
        type: String,
        default: null
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
      }
    },
    computed: {
    },
    created() {
    },
    methods: {
      parsThumbnail(thumbnail) {
        return decodeURIComponent(thumbnail) === 'null' ? require(`@/assets/images/d2r/${this.blank}`) : decodeURIComponent(thumbnail)
      },
      moreClick(item) {
        this.$emit('more-click', item)
      },
      itemClick(item) {
        this.$emit('item-click', item)
      }
    }
  }
</script>
<style scoped>
  .summary-wrap {
    box-shadow: -1px -1px 0 0 rgba(45, 45, 45, 1);
  }

  .summary {
    background-color: rgba(12, 12, 12, 1);
  }

  .sub {
    font-size: 1em;
    color: rgba(184, 156, 91, 1);
    box-shadow: 0 8px 4px 0 rgba(0, 0, 0, .3) inset;
    background-color: rgba(24, 30, 30, 1) !important;
  }

  .lastest-wrap {
    box-shadow: -1px -1px 1px 0 rgba(45, 45, 45, 1) inset;
    border-radius: 4px;
    padding-bottom: 60px;
  }

  .outlined {
    box-shadow: 0 0 0 1px rgba(45, 45, 45, 1);
  }
</style>