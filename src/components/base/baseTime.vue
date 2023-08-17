<template>
  <el-date-picker
    v-bind="all$Attrs"
    v-on="$listeners"
    type="daterange"
    range-separator="-"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  >
  </el-date-picker>
</template>

<script>
import formUtils from './mixins'

export default {
  mixins: [formUtils]
}
</script>
