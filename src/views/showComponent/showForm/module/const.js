export const option = {
  column: [
    {
      label: '姓名',
      prop: 'name',
      span: 8,

      callback: (data, form) => {
        console.log('data', data)
        console.log('form', form)
      },

      props: {
        on: {
          blur: (e) => {
            console.log('e', e.target.value)
          }
        }
      },

      rules: [
        {
          required: true
        }
      ]
    },

    {
      label: '职业',
      prop: 'job',
      type: 'baseSelect',
      // 为el-select开启搜索功能
      props: {
        filterable: true
      },
      span: 8,
      defaultValue: 1,
      controls: (value) => {
        return {
          hair: {
            hide: {
              0: true,
              1: false,
              2: true,
              3: true
            }[value]
          }
        }
      },
      dic: [
        {
          label: '教师',
          value: 0
        },
        {
          label: '程序猿',
          value: 1
        },
        {
          label: '作家',
          value: 2
        },
        {
          label: '警察',
          value: 3
        }
      ],

      callback: (data, form) => {},

      rules: [
        {
          required: true
        }
      ]
    },

    {
      label: '发量',
      prop: 'hair',
      type: 'baseSelect',
      span: 8,

      props: {
        filterable: true
      },

      dic: [
        {
          label: 'duang',
          value: 0
        },
        {
          label: '地中海',
          value: 1
        },
        {
          label: '稀疏',
          value: 2
        },
        {
          label: '正常',
          value: 3
        }
      ],

      rules: [
        {
          required: true
        }
      ]
    },

    {
      label: '性别',
      prop: 'sex',
      span: 8,
      type: 'baseRadio',

      dic: [
        {
          label: 0,
          value: '男'
        },
        {
          label: 1,
          value: '女'
        }
      ],

      rules: [
        {
          required: true
        }
      ]
    },

    {
      label: '城市',
      prop: 'city',
      type: 'baseCheckbox',
      span: 8,
      dic: [
        {
          label: '仙桃',
          value: 0
        },
        {
          label: '泉州',
          value: 1
        },
        {
          label: '武汉',
          value: 2
        }
      ],
      rules: [
        {
          required: true
        }
      ]
    },

    {
      label: '出生日期',
      prop: 'data',
      type: 'baseTime',
      span: 8,
      rules: [
        {
          required: true
        }
      ]
    },

    {
      // 测试接口的调用并展示数据
      label: '测试',
      prop: 'test',
      type: 'baseSelect',
      placeholder: 'test',
      span: 8,
      url: 'baseForm/test',
      requestMethod: 'get',
      requestLabel: 'name',
      requestValue: 'id',
      handleDic: (data, item) => {
        return data.map((result) => ({
          label: `test—${result[item.requestLabel]}`,
          value: result[item.requestValue]
        }))
      },
      rules: [
        {
          required: true
        }
      ]
    },

    {
      label: '插槽使用',
      prop: 'usage',
      slot: true,
      slotName: 'usageSlot',
      span: 8,
      rules: [
        {
          required: true
        }
      ]
    }
  ]
}
