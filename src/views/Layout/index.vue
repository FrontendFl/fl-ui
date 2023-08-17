<template>
  <div class="layout">
    <side-bar></side-bar>
    <div class="layout-right">
      <nav-bar></nav-bar>
      <div class="layout-main">
        <router-view v-if="show"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  provide() {
    return {
      refresh: this.refresh
    }
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    // 若点击的菜单项和当前路由相同，则刷新页面数据
    refresh() {
      this.show = false
      this.$nextTick(() => (this.show = true))
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;
  .layout-right {
    flex: 1;
    .layout-main {
      height: 100%;
      background-color: $background-color-gray;
      &::before {
        content: '';
        display: table;
      }
    }
  }
}
</style>