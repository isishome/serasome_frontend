<template>
  <div class="no-scroll column items-center q-gutter-sm fixed-top" style="top:10vh;left:0;right:0;bottom:0">
    <img class="col-2" src="@/assets/images/lotto_logo.png" />
    <div class="q-pt-xs text-grey-6 row no-wrap justify-center items-top q-gutter-xs" style="font-size:2.3vh;">
      <div>
        <q-icon color="red" class="q-mr-xs" name="fas fa-arrows-alt"></q-icon>
      </div>
      <div>{{$t('lotto.desc')}}</div>
    </div>
    <div>
      <q-btn-toggle size="1.5vh" color="grey-7" text-color="white" toggle-color="red-10" toggle-text-color="amber-6"
        push glossy v-model="game" :disable="disableBtn" :options="[
          {label: '1 Set', value: 1},
          {label: '2 Set', value: 2},
          {label: '3 Set', value: 3},
          {label: '4 Set', value: 4},
          {label: '5 Set', value: 5}
        ]" />
    </div>
    <div class="col-5 column justify-center items-center game q-gutter-y-xs">
      <div v-for="(g, index1) in game" :key="g" class="row justify-center items-center q-gutter-x-xs">
        <ss-number :selected="lotto[index1]" v-for="(ball, index2) in cnt" :key="ball"
          :ref="`complete-${index1}-${index2}`" :start="1" :end="45" @add="add" @remove="remove" @status="status" />
      </div>
    </div>
    <div class="full-width text-center">
      <q-btn :size="$q.screen.lt.sm ? 'sm' : 'md'" icon="check" color="primary" :label="$t('lotto.draw')"
        class="text-weight-bolder" :disable="disableBtn" @click="getAll" />
    </div>
    <div class="absolute-bottom-right" style="right:5vw;bottom:10vh">
      <q-chip v-if="visit" color="transparent" size="1.5vh" icon="far fa-eye" :label="visit" />
    </div>
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