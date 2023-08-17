<template>
  <el-input v-bind="all$Attrs" v-on="$listeners"></el-input>
</template>

<script>
import formUtils from './mixins'

export default {
  mixins: [formUtils]
}
</script>
