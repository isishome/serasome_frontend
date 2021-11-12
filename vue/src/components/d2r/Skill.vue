<template>
  <div ref="scrollTarget">
    <button class="btn" :style="`top:${info.top}%;left:${info.left}%`" @click.exact="choice(1)"
      @contextmenu.exact.prevent="choice(-1)" @click.shift.exact="choice(1000)"
      @contextmenu.shift.exact.prevent="choice(-1000)">
      <img class="img no-pointer-events" :class="points > 0 ? 'learned' : ''" :src="src" />
      <q-tooltip v-if="!$q.platform.is.mobile" content-class="skill-tooltip font-kodia"
        :scroll-target="$refs.scrollTarget" size="xs" :anchor="`bottom ${tooltip}`" :self="`top ${tooltip}`"
        :offset="[0,0]" transition-show="none" transition-hide="none">
        <div class="full-width column items-center word-keep tooltip-contents"
          :class="[disable ? 'text-red-5' : 'text-grey-4', $q.screen.lt.sm ? 'q-gutter-xs' : 'q-gutter-md']">
          <div v-if="points === 0" class="title d2r-green first-letter">
            {{lang.notLearned}}
          </div>
          <div class="name d2r-green first-letter">
            {{info.name}}
          </div>
          <div class="q-mt-none desc column items-center">
            <div v-for="(d, idx) in info.desc" :key="idx">{{d}}</div>
            <div v-if="points !== 20" class="first-letter">{{lang.required}} {{Number(info.level) + points}}
            </div>
            <div v-else class="first-letter">{{lang.reached}}</div>
          </div>
          <div v-if="influence.length > 0" class="influence column items-center">
            <div class="first-letter" v-for="(s, idx) in influence" :key="idx">{{s}}</div>
          </div>
          <div v-if="info.fixed && info.fixed.length > 0" class="influence column items-center">
            <div class="first-letter" v-for="(f, idx) in info.fixed" :key="idx">{{f}}</div>
          </div>
          <div v-if="points > 0" class="stat column items-center">
            <div class="first-letter">{{lang.current}} : {{points}}
            </div>
            <div class="first-letter" v-for="(s, idx) in info.stat" :key="idx">{{statPars(s, points)}}</div>
          </div>
          <div v-if="points !== 20" class="stat column items-center">
            <div class="first-letter">{{points > 0 ? lang.next : lang.first}} {{lang.level}}
            </div>
            <div class="first-letter" v-for="(s, idx) in info.stat" :key="idx">{{statPars(s, points + 1)}}</div>
          </div>
          <div v-if="info.bonus && info.bonus.length > 0" class="bonus column items-center">
            <div class="d2r-green row items-center q-gutter-sm">
              <div class="first-letter">{{info.name}}</div>
              <div class="first-letter" v-for="(l, idx) in lang.bonus.split(' ')" :key="idx">{{l}}</div>
              <div class="q-ml-none">:</div>
            </div>
            <div class="column items-center">
              <div class="first-letter" v-for="(b, idx) in info.bonus" :key="idx">{{b}}</div>
            </div>
          </div>
        </div>
      </q-tooltip>
      <q-dialog v-else v-model="dialog" content-class="font-kodia">
        <div class="bg-black full-width no-scroll column items-center word-keep tooltip-contents"
          :class="[disable ? 'text-red-5' : 'text-grey-4' , $q.screen.lt.sm ? 'q-gutter-xs' : 'q-gutter-md']">
          <div v-if="points === 0" class="title d2r-green first-letter">
            {{lang.notLearned}}
          </div>
          <div class="name d2r-green first-letter">
            {{info.name}}
          </div>
          <div class="q-mt-none desc column items-center">
            <div v-for="(d, idx) in info.desc" :key="idx">{{d}}</div>
            <div v-if="points !== 20" class="first-letter">{{lang.required}} {{Number(info.level) + points}}
            </div>
            <div v-else class="first-letter">{{lang.reached}}</div>
          </div>
          <div v-if="influence.length > 0" class="influence column items-center">
            <div class="first-letter" v-for="(s, idx) in influence" :key="idx">{{s}}</div>
          </div>
          <div v-if="points > 0" class="stat column items-center">
            <div class="first-letter">{{lang.current}} : {{points}}
            </div>
            <div class="first-letter" v-for="(s, idx) in info.stat" :key="idx">{{statPars(s, points)}}</div>
          </div>
          <div v-if="points !== 20" class="stat column items-center">
            <div class="first-letter">{{points > 0 ? lang.next : lang.first}} {{lang.level}}
            </div>
            <div class="first-letter" v-for="(s, idx) in info.stat" :key="idx">{{statPars(s, points + 1)}}</div>
          </div>
          <div v-if="info.bonus && info.bonus.length > 0" class="bonus column items-center">
            <div class="d2r-green row items-center q-gutter-xs">
              <div class="first-letter">{{info.name}}</div>
              <div class="first-letter" v-for="(l, idx) in lang.bonus.split(' ')" :key="idx">{{l}}</div>
              <div class="q-ml-none">:</div>
            </div>
            <div class="column items-center">
              <div class="first-letter" v-for="(b, idx) in info.bonus" :key="idx">{{b}}</div>
            </div>
          </div>
        </div>
      </q-dialog>
    </button>
    <div v-if="points > 0" class="point row justify-center items-center"
      :style="`top:${Number(info.top)+7.4}%;left:${Number(info.left)+15.6}%`">
      {{points}}
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'd2r-skill',
    props: {
      clsId: {
        type: String,
        default: 'paladin'
      },
      treeId: {
        type: String,
        default: 'da'
      },
      info: {
        type: Object,
        default: function () {
          return {}
        }
      },
      data: {
        type: Object,
        default: function () {
          return {}
        }
      },
      lang: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        dialog: false,
        points: 0,
        influence: []
      }
    },
    computed: {
      ...mapGetters({
        skill: 'getSkillsSkill',
        totalPoints: 'getSkillsPoints'
      }),
      src() {
        return require(`@/assets/images/d2r/skills/${this.clsId}/${this.treeId}/${this.info.id}.jpg`)
      },
      tooltip() {
        return this.info.tooltip || 'middle'
      },
      disable() {
        return this.points < 1 || this.points >= 20 || this.totalPoints < 1
      }
    },
    created() {
      if (this.info.influence) {
        this.influence = this.info.influence.map(s => s.text.replace(/\{[a-z]\}/gi, this.skill(this.clsId, s.id).name).replace(/\{\d\}/gi, this.data[this.treeId] && this.data[this.treeId][s.id] ? s.value[Number(this.data[this.treeId][s.id])] : 0))
      }
    },
    mounted() {
      this.$parent.loaded++
    },
    methods: {
      choice(points) {
        if (this.$q.platform.is.mobile) {
          const parentMobileData = this.$parent.mobile
          if (parentMobileData.max === true)
            points = 1000

          if (parentMobileData.remove === true)
            points = -points

          if (parentMobileData.info === true) {
            this.dialog = true
            return
          }
        }
        this.$emit('choice', { treeId: this.treeId, skillId: this.info.id, points: points })
      },
      statPars(stat, current) {
        if (stat.text && stat.value)
          return stat.text.replace(/\{\d\}/gi, stat.value[current])
      },
      update() {
        this.points = this.data[this.treeId][this.info.id] || 0
        if (this.info.influence) {
          this.influence = this.info.influence.map(s => s.text.replace(/\{[a-z]\}/gi, this.skill(this.clsId, s.id).name).replace(/\{\d\}/gi, this.data[this.treeId] && this.data[this.treeId][s.id] ? s.value[Number(this.data[this.treeId][s.id])] : 0))
        }
      }
    }
  }
</script>
<style>
  .skill-tooltip {
    background-color: rgba(10, 10, 10, .9) !important;
    border-radius: 0 !important;
  }

  .first-letter:lang(en)::first-letter {
    font-size: 1.4em;
  }
</style>
<style scoped>
  .tooltip-contents {
    font-weight: bold;
    letter-spacing: 0.2em;
  }

  .tooltip-contents .title,
  .tooltip-contents .name {
    text-align: center;
    font-size: 1.5em;
  }

  .tooltip-contents .desc,
  .tooltip-contents .influence,
  .tooltip-contents .stat,
  .tooltip-contents .bonus {
    text-align: center;
    font-size: 1.5em;
    line-height: 1.4em;
  }

  .btn {
    background-color: transparent !important;
    position: absolute;
    width: 14.7707%;
    height: 11.8528%;
    z-index: 2;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .btn:active {
    transform: scale(95%, 95%);
  }

  .point {
    font-size: 1em;
    width: 8%;
    height: 5%;
    position: absolute;
    color: white;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .img.learned {
    filter: brightness(2.5);
  }

  .d2r-green {
    color: rgb(9, 255, 0);
  }

  .first-letter:lang(en)::first-letter {
    font-size: 1.4em;
  }

  @media screen and (max-width:599px) {
    .tooltip-contents {
      font-weight: bold;
      letter-spacing: 0.1em;
    }

    .tooltip-contents .title,
    .tooltip-contents .name {
      font-size: .8em;
    }

    .tooltip-contents .desc,
    .tooltip-contents .influence,
    .tooltip-contents .stat,
    .tooltip-contents .bonus {
      font-size: .7em;
      line-height: 1.2em;
    }

    .point {
      font-size: .7em;
      line-height: 1em;
      letter-spacing: -1px;
    }
  }

  @media (hover: hover) {
    .img:hover {
      filter: brightness(5);
    }
  }
</style>