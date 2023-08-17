<template>
  <el-checkbox-group v-bind="$attrs" v-on="$listeners">
    <el-checkbox v-for="item in column.dic" :key="item.label" :label="item.value">
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  props: {
    column: Object
  }
}
</script>
