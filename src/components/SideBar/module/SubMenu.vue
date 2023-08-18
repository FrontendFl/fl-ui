<template>
  <div class="sub-menu">
    <template v-for="{ name, children, meta: { title, icon } } in subMenuList">
      <el-submenu
        v-if="children && children.length > 0"
        :key="name"
        :index="name"
      >
        <template slot="title">
          <i :class="icon"></i>
          <span>{{ title }}</span>
        </template>
        <sub-menu :subMenuList="children"></sub-menu>
      </el-submenu>
      <el-menu-item v-else :key="name" :index="name" @click="to(name)">
        <i :class="icon"></i>
        <span>{{ title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  inject: ['refresh'],
  props: {
    subMenuList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    to(name) {
      // 刷新layout的 router-view
      if (this.$route.name === name) return this.refresh()
      else this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss" scoped></style>
