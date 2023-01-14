import ChnHelloWord from './hello-world'

// 按需导出
export { ChnHelloWord }

// 全部导出（以vue插件形式）
const components = { ChnHelloWord }
const installer = {
  install(App) {
    Object.keys(components).forEach(compName => {
      App.component(compName, components[compName])
    })
  }
}
export default installer
