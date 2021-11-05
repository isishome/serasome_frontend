<template>
  <div>
    <div class="tree">
      <img :src="src" class="img" />
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'd2r-tree',
    props: {
      title: {
        type: String,
        default: 'Defensive Auras'
      },
      src: {
        type: String,
        default: require('@/assets/images/d2r/skills/paladin/defensive_auras/back.jpg')
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
    }
  }
</script>
<style scoped>
  .tree {
    position: relative;
    max-width: 616px;
    max-height: 818px;
  }

  .img {
    width: 100%;
    height: 100%;
  }
</style>