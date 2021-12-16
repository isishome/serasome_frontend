<template>
  <div class="no-margin">
    <img src="@/assets/images/chalk.png" :class="$q.dark.isActive ? 'logo-dark' : ''" :style="`width:${width}`" />
  </div>
</template>
<script>
  export default {
    name: 'ss-logo',
    props: {
      width: {
        type: String,
        default: '100%'
      }
    },
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
  .logo-dark {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
  }
</style>