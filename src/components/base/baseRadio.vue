<template>
  <el-radio-group v-bind="$attrs" v-on="$listeners">
    <el-radio v-for="item in column.dic" :key="item.value" :label="item.label">
      {{ item.value }}
    </el-radio>
  </el-radio-group>
</template>

<script>
export default {
  props: {
    column: Object
  }
}
</script>
