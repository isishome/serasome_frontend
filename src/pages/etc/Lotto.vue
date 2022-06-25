<template>
  <div class="no-scroll">
    <div class="column items-center q-gutter-y-md absolute-center full-width">
      <img src="@/assets/images/lotto_logo.png" class="gt-sm" style="max-height:10vh;" />
      <div class="text-subtitle1 text-center">
        {{$t('lotto.desc')}}
      </div>
      <q-btn-toggle :size="$q.screen.gt.xs ? 'lg': 'sm'" color="grey-7" text-color="white" toggle-color="orange-8"
        toggle-text-color="black" push glossy v-model="game" :disable="disableBtn" :options="[
          {label: '1 Set', value: 1},
          {label: '2 Set', value: 2},
          {label: '3 Set', value: 3},
          {label: '4 Set', value: 4},
          {label: '5 Set', value: 5}
        ]" />
      <div class="row justify-center full-width">
        <div class="col-12 col-sm-9 column items-center q-gutter-y-xs">
          <div v-for="(g, index1) in game" :key="g" class="row justify-center items-center q-gutter-x-xs full-width">
            <ss-number :selected="lotto[index1]" v-for="(ball, index2) in cnt" :key="ball"
              :ref="`complete-${index1}-${index2}`" :start="1" size="60%" :end="45" @add="add" @remove="remove"
              @status="status" />
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <q-btn size="md" rounded icon="check" color="primary" :label="$t('lotto.draw')" class="text-weight-bolder"
          :disable="disableBtn" @click="getAll" />
      </div>
    </div>
    <q-chip v-if="visit" color="transparent" icon="far fa-eye" :label="visit" class="fixed-bottom-right" />
  </div>
</template>
<script>
  const Number = () => import(/* webpackChunkName: "group-component" */ '@/components/seras/Number')

  export default {
    name: 'ss-lotto',
    components: {
      'ss-number': Number
    },
    data() {
      return {
        lotto: [[], [], [], [], []],
        cnt: 6,
        disableBtn: false,
        ing: 0,
        game: 1,
        visit: false
      }
    },
    created() {
      const self = this

      this.axios
        .get('/seras/lotto/visit', {
        })
        .then(function (response) {
          if (response.data) {
            self.visit = response.data.seq
          }
        })
        .catch(() => { })
    },
    methods: {
      getAll() {
        this.lotto = [[], [], [], [], []]
        let i = 0
        while (i < this.game) {
          let j = 0
          while (j < this.cnt) {
            const $ball = this.$refs[`complete-${i}-${j}`]
            if ($ball) {
              $ball[0].num = '?'
              this.timer = setTimeout(() => {
                if ($ball && $ball[0] && $ball[0].rolling)
                  $ball[0].rolling('u', 0.3)
              }, i * 1000)
            }
            j++
          }
          i++
        }
      },
      add(num, tLotto) {
        tLotto.push(num)
      },
      remove(num, tLotto) {
        if (tLotto.indexOf(num) !== -1)
          tLotto.splice(tLotto.indexOf(num), 1)
      },
      status(current) {
        if (current)
          this.ing++
        else
          this.ing--

        if (this.ing === 0)
          this.disableBtn = false
        else
          this.disableBtn = true
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    }
  }
</script>
<style scoped>

</style>