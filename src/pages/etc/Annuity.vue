<template>
  <div class="no-scroll">
    <div class="column items-center q-gutter-y-md absolute-center full-width">
      <img src="@/assets/images/annuity_logo.png" class="gt-sm" style="max-height:10vh;" />
      <div class="text-subtitle2 text-center">
        {{$t('lotto.desc')}}
      </div>
      <q-btn-toggle :size="$q.screen.gt.xs ? 'lg': 'sm'" color="grey-7" text-color="white" toggle-color="blue-10"
        toggle-text-color="amber-6" push glossy v-model="game" :disable="disableBtn" :options="[
          {label: '1 Set', value: 1},
          {label: '2 Set', value: 2},
          {label: '3 Set', value: 3},
          {label: '4 Set', value: 4},
          {label: '5 Set', value: 5}
        ]" />
      <div class="row justify-center full-width">
        <div class="col-12 col-sm-9 column items-center q-gutter-y-xs">
          <div v-for="(g, index1) in game" :key="g" class="row justify-center items-center q-gutter-x-sm full-width">
            <ss-number :ref="`group-${index1}`" size="60%" :start="1" :end="5" @add="add" @remove="remove"
              @status="status" color="grey-5" />
            <div class="text-h6 text-weight-bold">조</div>
            <ss-number v-for="(ball, index2) in cnt" :key="ball" :ref="`complete-${index1}-${index2}`"
              :color="colors[index2]" size="60%" :start="0" :end="9" @add="add" @remove="remove" @status="status" />
          </div>
        </div>
      </div>
      <div class="row justify-center q-pt-md">
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
    name: 'ss-annuity',
    components: {
      'ss-number': Number
    },
    data() {
      return {
        lotto: [[], [], [], [], []],
        colors: ['red-9', 'orange-8', 'yellow-7', 'light-blue-6', 'deep-purple-4', 'grey-8'],
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
        .get('/seras/annuity/visit', {
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
          const $group = this.$refs[`group-${i}`]
          let j = 0

          if ($group) {
            $group[0].num = '?'
            this.timer1 = setTimeout(() => {
              if ($group && $group[0] && $group[0].rolling)
                $group[0].rolling('u', 0.3)
            }, i * 1000)
          }

          while (j < this.cnt) {
            const $ball = this.$refs[`complete-${i}-${j}`]

            if ($ball) {
              $ball[0].num = '?'
              this.timer2 = setTimeout(() => {
                if ($ball && $ball[0] && $ball[0].rolling)
                  $ball[0].rolling('u', 0.3)
              }, i * 1000)
            }
            j++
          }
          i++
        }
      },
      add(num) {
        [].push(num)
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
      clearTimeout(this.timer1)
      clearTimeout(this.timer2)
    }
  }
</script>
<style scoped>
</style>