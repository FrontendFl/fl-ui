<template>
  <div class="side-bar">
    <div class="web-title">Components</div>
    <el-menu
      background-color="#1f2138"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="active">
      <sub-menu :subMenuList="routes"></sub-menu>
    </el-menu>
  </div>
</template>

<script>
import SubMenu from './module/SubMenu.vue'
import { routes } from '@/router'
export default {
  name: 'side-bar',
  props: {

  },
  components: {
    SubMenu
  },
  data () {
    return {
      routes
    }
  },
  computed: {
    active() {
      return this.$route.name
    }
  },
  methods: { }
}
</script>

<style lang="scss" scoped>
.side-bar {
  width: 220px;
  height: 100%;
  background-color: $color-black;
  .web-title {
    height: 60px;
    line-height: 55px;
    text-align: center;
    font-size: 28px;
    color: $color-white;
  }
  .el-menu {
    border-right: none;
  }
}
</style>