import { upperFirst, camelCase } from 'lodash'

export default {
  install: (Vue) => {
    const requireComponent = require.context(
      // 其组件目录的相对路径
      '../components',
      // 是否查询其子目录
      true,
      // 匹配基础组件文件名的正则表达式, 此处未考虑js文件
      // /[A-Z]\w+\.(vue|js)$/
      /\w+\.(vue)$/
    )
    const keys = requireComponent.keys()
    keys.forEach((fileName) => {
      
      // 获取组件配置
      const componentConfig = requireComponent(fileName)

      const ignoreSuffix = fileName.replace(/\/?index\.vue|\.vue/, '')
      fileName = ignoreSuffix.split('/').pop()

      // 获取组件的 PascalCase 命名
      const componentName = upperFirst(camelCase(fileName))

      Vue.component(
        componentName,
        // 异步挂载
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        (resolve) => resolve(componentConfig.default || componentConfig)
      )
    })
  }
}
