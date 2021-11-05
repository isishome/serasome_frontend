<template>
  <button class="btn" :style="`top:${top};left:${left}`">
    <img class="img" :src="imgSrc" @mouseover="imgSrc = active" @mouseout="imgSrc = src" />
    <q-tooltip content-class="skill-tooltip font-kodia" size="xs" anchor="bottom left" self="top left" :offset="[0,0]">
      <div class="full-width column justify-center items-center word-keep text-body1">
        <div class="text-h6 desc-title">
          You have not learned this skill yet
        </div>
        <div class="q-mt-md text-light-green-12">
          Prayer
        </div>
        <div class="text-red text-weight-bold">
          when active. aura slowly regenerates
        </div>
        <div class="q-mt-md text-red text-weight-bold">
          First Level
        </div>
      </div>
    </q-tooltip>
  </button>
</template>
<script>
  export default {
    name: 'd2r-skill',
    props: {
      top: {
        type: String,
        default: '10%'
      },
      left: {
        type: String,
        default: '10%'
      },
      src: {
        type: String,
        default: require('@/assets/images/d2r/skills/paladin/defensive_auras/prayer.jpg')
      },
      active: {
        type: String,
        default: require('@/assets/images/d2r/skills/paladin/defensive_auras/prayer_a.jpg')
      },
      info: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        imgSrc: this.src
      }
    },
    computed: {
    },
    created() {
    },
    methods: {
    }
  }
</script>
<style>
  .skill-tooltip {
    background-color: rgba(10, 10, 10, .8) !important;
    border-radius: 0 !important;
  }
</style>
<style scoped>
  .btn {
    position: absolute;
    width: 14.1233%;
    height: 10.6356%;
    z-index: 2;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
  }

  .img {
    width: 100%;
    height: 100%;
  }

  .desc-title {
    color: rgba(30, 255, 0, 1);
    text-transform: capitalize !important;
  }
</style>