<template>
   
  <el-form
    ref="form"
    v-bind="$attrs"
    v-on="$listeners"
    :model="form"
    :rules="formRules"
    :size="get(option, 'formSize', defaultFormSize)"
    @submit.native.prevent
  >
       
    <el-row :gutter="20" :span="24">
           
      <el-col
        v-for="column in formColumn"
        :key="column.label"
        :md="column.span || 12"
        :sm="12"
        :xs="24"
      >
               
        <el-form-item
          v-if="!column.hide"
          :label="`${column.label}:`"
          :prop="column.prop"
          :label-width="
            get(column, 'labelWidth', column.labelWidth || defaultLabelWidth)
          "
          :style="{
            height: get(
              column,
              'labelHeight',
              column.labelHeight || defaultLabelHeight
            )
          }"
        >
                   
          <slot
            v-if="column.slot"
            :name="column.slotName"
            :form="form"
            :prop="column.prop"
            :value="form[column.prop]"
          ></slot>
                   
          <component
            v-else
            v-model="form[column.prop]"
            v-bind="column.props"
            v-on="getEvents(column)"
            :column="column"
            :placeholder="
              column.placeholder || getPlaceholder(column.type, column.label)
            "
            :label-width="get(column, 'size', column || defaultFormSize)"
            :disabled="get(column, 'disabled', false)"
            :is="get(column, 'type', 'baseInput')"
            @change="changeHandler(column)"
          >
                     
          </component>
                 
        </el-form-item>
             
      </el-col>
         
    </el-row>
     
  </el-form>
</template>

<script>
import baseCheckbox from '../base/baseCheckbox'
import baseInput from '../base/baseInput'
import baseRadio from '../base/baseRadio'
import baseSelect from '../base/baseSelect'
import baseTime from '../base/baseTime'
import axios from 'axios'
import { validatenull } from '@/utils'
import { get } from 'lodash'
import { REQUEST_ALL_DATA } from '@/utils/constant/requestConst'

export default {
  components: {
    baseCheckbox,
    baseInput,
    baseRadio,
    baseSelect,
    baseTime
  },

  props: {
    option: {
      type: Object,
      default: () => {}
    },

    form: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      formRules: {},
      defaultFormSize: 'small',
      defaultLabelWidth: '90px',
      defaultLabelHeight: '50px',
      selectList: ['baseRadio', 'baseCheckbox', 'baseSelect'],
      radioList: ['baseRadio', 'baseCheckbox']
    }
  },

  computed: {
    formColumn() {
      return this.option?.column || []
    },

    controlOption({ formColumn }) {
      return formColumn.filter(({ controls }) => controls) || []
    }
  },

  watch: {
    form: {
      handler(val) {
        this.controlOption.forEach((item) => {
          const { controls, prop } = item
          let control = controls(val[prop], val) || {}
          Object.keys(control).forEach((key) => {
            const data = this.formColumn.find(({ prop }) => prop == key)
            const { hide } = control[key]
            Object.assign(data, { hide: validatenull(hide) ? true : hide })
          })
        })
      },
      immediate: true,
      deep: true
    }
  },

  created() {
    this.initRules()
    this.initRequest()
    this.initCheck()
    this.initDefaultValue()
  },

  methods: {
    get,

    async validate() {
      try {
        await this.$refs.form.validate()
        return true
      } catch (error) {
        return false
      }
    },

    getPlaceholder(type, label) {
      return `${type == 'el-select' ? '请选择' : '请输入'}${label}`
    },

    getEvents(data) {
      return data?.props?.on
    },

    initRequest() {
      if (!Array.isArray(this.formColumn)) return
      const urls = this.formColumn?.filter((item) => item.url)
      urls.forEach(async (item) => {
        const params = {
          ...REQUEST_ALL_DATA,
          ...item.requestParams
        }

        let { data: detail } =
          (await axios[item?.requestMethod || 'post'](item.url, params)) || []

        let finalResult
        if (item.handleDic) finalResult = item.handleDic(detail, item)
        else
          finalResult = detail.map((result) => ({
            label: result[item.requestLabel],
            value: result[item.requestValue]
          }))

        this.$set(item, 'dic', finalResult)
      })
    },

    initRules() {
      if (!Array.isArray(this.formColumn)) return
      this.formColumn?.forEach((item) => {
        if (item.rules) {
          item.rules.map((rule, index) => {
            if (rule.required) {
              item.rules.splice(index, 1, {
                message: `${item.label}${
                  this.selectList.includes(item.type) ? '必选' : '必填'
                }`,
                ...rule
              })
            }
          })
          this.$set(this.formRules, item.prop, item.rules)
        }
      })
    },

    initCheck() {
      const selectList = this.formColumn.filter((item) =>
        this.radioList.includes(item.type)
      )
      selectList.forEach((item) => {
        this.$set(
          this.form,
          item.prop,
          item.type == 'baseRadio' ? item.dic[0].label : [item.dic[0].value]
        )
      })
    },

    changeHandler(data) {
      data.callback && data.callback(this.form[data.prop], data)
    },

    initDefaultValue() {
      this.formColumn.map(
        ({ prop, defaultValue }) =>
          defaultValue && this.$set(this.form, prop, defaultValue)
      )
    }
  }
}
</script>
