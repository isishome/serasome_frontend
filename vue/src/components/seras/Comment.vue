<template>
  <div>
    <q-separator />
    <div class="comment-back row justify-start items-center">
      <div class="col-4 text-primary text-left q-pl-md"><span class="lt-md">{{$t('comments.title')}}</span></div>
      <div class="col text-primary text-center"><span class="gt-sm">{{$t('comments.title')}}</span></div>
      <div class="col-4 text-right q-pr-md">
        <q-btn flat round dense size="md" color="grey-7" icon="refresh" class="q-mr-sm" @click="refresh" />
      </div>
    </div>
    <q-separator v-if="value.length === 0 || (signStatus && auth.write)" />
    <q-list class="q-pa-md" v-if="value.length === 0">
      <q-item>
        <q-item-section class="text-center">
          <q-item-label class="col-6">{{$t('comments.noList')}}
          </q-item-label>
          <q-item-label class="col" v-if="signStatus && auth.write">{{$t('comments.leave')}}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-list class="q-pa-md" v-if="signStatus && auth.write">
      <q-item>
        <q-item-section center class="text-center">
          <q-item-label>
            <q-btn color="teal-4" size="md" :label="$t('comments.write')" @click="setComment('modify')" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-infinite-scroll ref="infinite" @load="onLoad" :offset="250" class="comment-back">
      <q-list v-for="item in value" :key="item.cid" separator highlight>
        <q-separator class="gt-sm" />
        <q-item :ref="`comment-${item.cid}`" class="gt-sm q-pa-md full-width">
          <q-item-section top avatar class="comment-avatar q-pr-sm">
            <q-avatar size="sm" :color="item.rcid ? 'orange' : 'primary'" text-color="white">
              {{item.name.substring(0,1)}}</q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label lines="2" class="full-width text-grey-6">
              <ss-comment-date :name="item.name" :regdate="item.reg_date" />
            </q-item-label>
            <q-item-label lines="10" class="full-width text-grey-6 q-pt-xs q-pb-lg">
              <span class="word-wrap font-ss">{{item.contents}}</span>
            </q-item-label>
          </q-item-section>
          <q-item-section side center>
            <q-btn class="col-4" v-if="!item.delete && item.self" flat dense size="md" icon="delete"
              @click="setComment('delete', item.cid, item.rcid)" />
          </q-item-section>
          <q-item-section side center>
            <q-btn class="col-4" v-if="!item.delete && item.self" flat dense size="md" icon="edit"
              @click="setComment('modify', item.cid, item.rcid)" />
          </q-item-section>
          <q-item-section side center>
            <q-btn class="col-4" v-if="!item.delete && auth.write" flat dense size="md" icon="reply"
              @click="setComment('reply', item.cid, item.cid)" />
          </q-item-section>
        </q-item>
        <q-item v-for="reply in item.replies" :key="reply.cid" :ref="`reply-${reply.cid}`"
          class="gt-sm q-pa-md full-width">
          <q-item-section v-if="reply.rcid" top avatar class="text-center comment-avatar" style="padding-right:0">
            <div style="width:24px">└ </div>
          </q-item-section>
          <q-item-section top avatar class="comment-avatar q-pr-sm">
            <q-avatar size="sm" :color="reply.rcid ? 'orange' : 'primary'" text-color="white">
              {{reply.name.substring(0,1)}}</q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label lines="2" class="full-width text-grey-6">
              <ss-comment-date :name="reply.name" :regdate="reply.reg_date" />
            </q-item-label>
            <q-item-label lines="10" class="full-width text-grey-6 q-pt-xs q-pb-lg"><span
                v-if="!reply.delete && reply.rcid">
                @{{reply.rname}}
              </span>
              <span class="word-wrap font-ss">{{reply.contents}}</span>
            </q-item-label>
          </q-item-section>
          <q-item-section side center>
            <q-btn class="col-4" v-if="!reply.delete && reply.self" flat dense size="md" icon="delete"
              @click="setComment('delete', reply.cid, reply.rcid)" />
          </q-item-section>
          <q-item-section side center>
            <q-btn class="col-4" v-if="!reply.delete && item.self" flat dense size="md" icon="edit"
              @click="setComment('modify', reply.cid, reply.rcid)" />
          </q-item-section>
          <q-item-section side center>
            <q-btn class="col-4" v-if="!reply.delete && auth.write" flat dense size="md" icon="reply"
              @click="setComment('reply', reply.rcid, reply.cid)" />
          </q-item-section>
        </q-item>
        <q-slide-item class="lt-md" @left="onLeft">
          <template v-if="signStatus && !item.delete" v-slot:left>
            <div class="row items-center q-gutter-md">
              <q-btn v-if="!item.delete && item.self" flat dense size="md" icon="delete"
                @click="setComment('delete', item.cid, item.rcid)" />
              <q-btn v-if="!item.delete && item.self" flat dense size="md" icon="edit"
                @click="setComment('modify', item.cid, item.rcid)" />
              <q-btn v-if="!item.delete && auth.write" flat dense size="md" icon="reply"
                @click="setComment('reply', item.cid, item.cid)" />
            </div>
          </template>
          <q-item :ref="`comment-m-${item.cid}`" class="q-px-sm q-py-md full-width">
            <q-item-section top avatar class="comment-avatar q-pr-sm">
              <q-avatar size="sm" :color="item.rcid ? 'orange' : 'primary'" text-color="white">
                {{item.name.substring(0,1)}}</q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label lines="2" class="full-width text-grey-6">
                <ss-comment-date :name="item.name" :regdate="item.reg_date" />
              </q-item-label>
              <q-item-label lines="10" class="full-width text-grey-6"><span
                  class="word-wrap font-ss">{{item.contents}}</span>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-slide-item>
        <q-slide-item v-for="reply in item.replies" :key="`reply-m-${reply.cid}`" class="lt-md" @left="onLeft">
          <template v-if="signStatus && !reply.delete" v-slot:left>
            <div class="row items-center q-gutter-md">
              <q-btn v-if="!item.delete && reply.self" flat dense size="md" icon="delete"
                @click="setComment('delete', reply.cid, reply.rcid)" />
              <q-btn v-if="!item.delete && reply.self" flat dense size="md" icon="edit"
                @click="setComment('modify', reply.cid, reply.rcid)" />
              <q-btn v-if="!item.delete && auth.write" flat dense size="md" icon="reply"
                @click="setComment('reply', reply.rcid, reply.cid)" />
            </div>
          </template>
          <q-item :ref="`reply-m-${reply.cid}`" class="q-px-sm q-py-md full-width">
            <q-item-section v-if="reply.rcid" top avatar class="text-center comment-avatar" style="padding-right:0">
              <div style="width:24px">└ </div>
            </q-item-section>
            <q-item-section top avatar class="comment-avatar q-pr-sm">
              <q-avatar size="sm" :color="reply.rcid ? 'orange' : 'primary'" text-color="white">
                {{reply.name.substring(0,1)}}</q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label lines="2" class="full-width text-grey-6">
                <ss-comment-date :name="reply.name" :regdate="reply.reg_date" />
              </q-item-label>
              <q-item-label lines="10" class="full-width text-grey-6"><span v-if="!reply.delete"
                  class="q-mr-xs">@{{reply.rname}}</span>
                <span class="word-wrap font-ss">{{reply.contents}}</span>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-slide-item>
      </q-list>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  const CommentDate = () => import(/* webpackPrefetch: true */ '@/components/seras/CommentDate')

  import {
    scroll
  } from 'quasar'

  const { getScrollTarget, setScrollPosition } = scroll

  // takes an element object
  function scrollToElement(el, isMobile) {
    const target = getScrollTarget(el)
    const offset = isMobile ? el.offsetParent.offsetTop : el.offsetTop
    const duration = 200
    setScrollPosition(target, offset, duration)
  }

  export default {
    components: {
      'ss-comment-date': CommentDate
    },
    name: 'ss-comment',
    props: {
      value: {
        type: Array,
        default: function () {
          return {}
        }
      },
      auth: {
        type: Object,
        default: function () {
          return {}
        }
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
    mounted() {
      this.$refs.infinite.trigger()
    },
    methods: {
      resume() {
        this.$refs.infinite.resume()
        this.$refs.infinite.trigger()
      },
      refresh() {
        this.$emit('refresh');
      },
      goComment(cid) {
        const pre = this.$q.screen.lt.md ? 'm-' : ''
        let findEl = this.$refs['comment-' + pre + cid]

        if (!findEl)
          findEl = this.$refs['reply-' + pre + cid]

        scrollToElement(findEl[0].$el, pre === 'm-')
      },
      onLoad(index, done) {
        this.$emit('get', index, done);
      },
      setComment(evtName, param1, param2) {
        this.$emit(evtName, param1, param2);
      },
      onLeft({ reset }) {
        this.finalize(reset)
      },
      finalize(reset) {
        this.timer = setTimeout(() => {
          if (reset)
            reset()
        }, 1400)
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    }
  }
</script>
<style scoped>
  .body--light .comment-back,
  .body--light .comment-back .q-item {
    background-color: #fcfcfc !important;
  }

  .body--dark .comment-back,
  .body--dark .comment-back .q-item {
    background-color: #161e36 !important;
  }
</style>