<template>
  <div style="width:10%;aspect-ratio: 1;">
    <figure class="ball overflow-hidden non-selectable cursor-pointer"
      :class="[$q.dark.isActive ? 'dark' : '', ballColor]" v-touch-swipe.mouse="handleSwipe">
      <q-avatar ref="avt" :color="$q.dark.isActive ? 'grey-3' :'grey-4'"
        :text-color="$q.dark.isActive ? 'grey-8' :'black'"
        class="text-weight-bolder absolute-center row justify-center items-center"
        :style="`width:${size};height:${size};font-size:${fontSize}`">
        {{num}}
      </q-avatar>
    </figure>
  </div>
</template>
<script>
  export default {
    name: 'ss-number',
    props: {
      selected: {
        type: Array,
        default: function () {
          return []
        }
      },
      start: {
        type: Number,
        required: true
      },
      end: {
        type: Number,
        required: true
      },
      color: {
        type: String,
        default: null
      },
      size: {
        type: String,
        default: 'md'
      }
    },
    created() {
      let n = this.start
      while (n <= this.end) {
        this.numArray.push(n)
        n++
      }
    },
    data() {
      return {
        num: '?',
        numArray: [],
        state: false,
        repeat: 6
      }
    },
    computed: {
      ballColor() {
        let className = ''

        if (this.num === '?')
          className = 'non-select'
        else if (this.color !== null)
          className = `bg-${this.color}`
        else if (this.num < 11)
          className = 'units'
        else if (this.num < 21)
          className = 'tens-first'
        else if (this.num < 31)
          className = 'tens-second'
        else if (this.num < 41)
          className = 'tens-third'
        else if (this.num < 46)
          className = 'tens-fourth'

        return className
      },
      fontSize() {
        return this.$q.screen.lt.sm ? '1em' : this.$q.screen.lt.md ? '2em' : this.$q.screen.lt.lg ? '2em' : this.$q.screen.lt.xl ? '2.5em' : '3em'
      }
    },
    methods: {
      handleSwipe({ ...info }) {
        const direction = info.direction.substring(0, 1)
        let duration = (info.duration / 200).toFixed(1)
        duration = duration < 0.1 ? 0.1 : duration

        if (['u', 'r', 'd', 'l'].includes(direction) === true)
          this.rolling(direction, duration)
      },
      rolling(direction, duration) {
        if (this.state === false) {
          const $el = this.$refs.avt.$el

          if ($el) {
            this.state = true
            this.$emit('status', true)

            if (this.num !== '?')
              this.$emit('remove', this.num, this.selected)

            const selectedNum = this.getNum(1, this.selected)[0]
            this.$emit('add', selectedNum, this.selected)
            $el.style.animation = `ball-move-${direction} ${duration}s linear ${this.repeat}`

            this.timer1 = setTimeout(() => {
              this.num = '?'
            }, 100);

            this.timer2 = setTimeout(() => {
              this.num = selectedNum
            }, (duration * 1000 * this.repeat) / 2);

            this.timer3 = setTimeout(() => {
              $el.style.animation = ''
              this.state = false
              this.$emit('status', false)
            }, (duration * 1000 * this.repeat));
          }
        }
      },
      getNum(n, exceptArray) {
        let shuffled = this.numArray.sort(() => Math.random() - 0.5);

        if (exceptArray && Array.isArray(exceptArray) === true)
          shuffled = shuffled.filter(n => exceptArray.includes(n) === false)

        const numArray = shuffled.slice(0, n);

        return numArray
      },
      clear() {
        this.num = '?'
      }
    },
    beforeDestroy() {
      clearTimeout(this.timer1)
      clearTimeout(this.timer2)
      clearTimeout(this.timer3)
    }
  }
</script>
<style scoped>
  .ball {
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 50%;
    position: relative;
    background: radial-gradient(circle at 50% 120%, #FFFFFF, #EEEEEE 80% transparent);
    background-color: #000000;
    transition: all 0.5s;
    z-index: 1;
  }

  .ball.dark {
    background: radial-gradient(circle at 50% 120%, #000000, #111111 80% transparent) !important;
    background-color: #AAAAAA;
  }

  .units {
    background-color: #fbc400 !important;
  }

  .tens-first {
    background-color: #69c8f2 !important;
  }

  .tens-second {
    background-color: #ff7272 !important;
  }

  .tens-third {
    background-color: #aaaaaa !important;
  }

  .tens-fourth {
    background-color: #b0d840 !important;
  }

  .ball:before {
    content: "";
    position: absolute;
    background: radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    bottom: 2.5%;
    left: 5%;
    opacity: 0.6;
    height: 100%;
    width: 90%;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    z-index: 2;
  }

  .ball.dark:before {
    background: radial-gradient(circle at 90% 90%, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0) 50%);
  }

  .ball:after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 5%;
    left: 10%;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%);
    -webkit-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
    -moz-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
    -ms-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
    -o-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
    transform: translateX(-32%) translateY(-34%) skewX(-20deg);
    filter: blur(10px);
    -webkit-filter: blur(10px);
  }

  .ball.dark:after {
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%);
  }
</style>