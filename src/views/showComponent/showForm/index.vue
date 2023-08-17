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
    </BaseForm>
  </div>
</template>

<script>
import baseInput from '@/components/base/baseInput'
import { option } from './module/const.js'

export default {
  components: { baseInput },
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
