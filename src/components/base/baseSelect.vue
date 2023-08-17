<template>
  <el-select size="small" v-bind="all$Attrs" v-on="$listeners">
    <el-option v-for="item in column.dic" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
</template>

<script>
import formUtils from './mixins'

export default {
  mixins: [formUtils],
  props: {
    column: Object
  }
}
</script>
