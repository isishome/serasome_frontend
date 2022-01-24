<template>
  <div class="row justify-start items-center q-gutter-xs">
    <div>{{name}}</div>
    <div class="text-grey-5">·</div>
    <div class="text-caption vertical-middle">{{parsDateComment(regdate)}}</div>
    <div v-if="parsDateSpan(regdate) < 60" class="text-caption">
      <q-avatar class="lt-md" size="10px" font-size="6px" text-color="white" color="red" style="margin-top:-2px">N
      </q-avatar>
      <q-avatar class="gt-sm" size="12px" font-size="8px" text-color="white" color="red" style="margin-top:-2px">N
      </q-avatar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ss-comment-date',
    props: {
      name: {
        type: String,
        default: null
      },
      regdate: {
        type: Number,
        default: null
      }
    },
    methods: {
      parsDateSpan(date) {
        const now = new Date()
        const local = new Date(date)
        const span = (now.getTime() - local.getTime()) / 1000
        return span
      },
      parsDateComment(date) {
        let time = ''
        let timeName = ''
        const span = this.parsDateSpan(date)
        let dateText = this.$t('date.now')

        if (span < 60)
          timeName = 'now'
        else if (span < 3600) {
          time = dateText = Math.floor(span / 60)
          timeName = 'minute'
        } else if (span < 86400) {
          time = Math.floor(span / 3600)
          timeName = 'hour'
        } else if (span < 2592000) {
          time = Math.floor(span / 86400)
          timeName = 'day'
        } else if (span < 31104000) {
          time = Math.floor(span / 2592000)
          timeName = 'month'
        } else if (span >= 31104000) {
          time = Math.floor(span / 31104000)
          timeName = 'year'
        }

        dateText = time.toString().concat(this.$t(`date.${timeName}${time !== 1 && time !== '' ? 's' : ''}`), ' ', this.$t('date.ago'))

        return dateText
      }
    }
  };
</script>
<style scoped>
</style>