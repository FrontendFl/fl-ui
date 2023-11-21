<template>
  <div class="component-container">
    <BaseForm :option="option" :form="form">
      <template #usageSlot="{ form, prop }">
        <baseInput
          size="small"
          placeholder="请输入插槽使用"
          v-model="form[prop]"
          clearable
        ></baseInput>
      </template>
      <template #testLabel>
        label插槽
        <el-tooltip content="label插槽的使用" placement="top" effect="light">
          <i class="ml5 mr5 el-icon-question"></i>
        </el-tooltip>
        :
      </template>
    </BaseForm>
  </div>
</template>

<script>
import { option } from './module/const.js'

export default {
  props: {
    msg: String
  },

  data() {
    return {
      option,
      form: {}
    }
  }
}
</script>
