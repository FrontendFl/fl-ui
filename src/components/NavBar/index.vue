<template>
  <div class="navbar-box">
    <div class="navbar"></div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style lang="scss" scoped>
.navbar-box {
  height: 60px;
  overflow: hidden;
}
.navbar {
  height: 55px;
  box-shadow: 0px 0px 5px 5px rgba($color: $color-black, $alpha: 0.2);
}
</style>