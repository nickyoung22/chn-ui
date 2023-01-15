# chn-ui

一个`vue3`组件库

---

## 安装

```shell
npm install -D @chenhaonan22/chn-ui
```

## 使用方式

### 自动引入（推荐）

安装 `unplugin-vue-components` 插件 ( https://github.com/antfu/unplugin-vue-components )

```shell
npm install -D unplugin-vue-components
```

需要`less`支持

```shell
npm install -D less
```

在`vite.config.js`中

```js
import Components from 'unplugin-vue-components/vite'
import { ChnUiResolver } from './node_modules/@chenhaonan22/chn-ui/components/resolver.js'
// import { ChnUiResolver } from '@chenhaonan22/chn-ui'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true, // 会自动生成 配置文件 components.d.ts ，指明自动导入的组件

      // 指定被自动导入的组件位置,默认是 dirs: ['src/components'],
      // 默认的配置，会使得自己的组件也被自动引入，而我们只想自动引入第三方组件库的组件
      dirs: [],
      resolvers: [ChnUiResolver()]
    })
  ]
})
```

在组件内可以直接使用组件，不需要手动引入

```vue
<template>
  <!-- PascalCase 格式 -->
  <ChnHelloWord></ChnHelloWord>

  <!-- kebab-case 格式 -->
  <chn-hello-word></chn-hello-word>
</template>
```

### 手动按需引入

需要`less`支持

```shell
npm install -D less
```

在组件内

```vue
<script setup>
  // 按需引入
  import { ChnHelloWord } from '@chenhaonan22/chn-ui'
</script>

<template>
  <!-- PascalCase 格式 -->
  <ChnHelloWord></ChnHelloWord>

  <!-- kebab-case 格式 -->
  <chn-hello-word></chn-hello-word>
</template>
```

> 支持 `tree-shaking` ，在`vite`中， 如果引入了，但未使用，则不会被打包。

### 全局全部引入

需要`less`支持

```shell
npm install -D less
```

在`main.js`中

```js
import { createApp } from 'vue'
const app = createApp(App)

// 全局引入 chn-ui 组件库
import chnui from '@chenhaonan22/chn-ui'
app.use(chnui)
```

于是可以在任意组件中

```vue
<template>
  <ChnHelloWord></ChnHelloWord>
</template>
```
