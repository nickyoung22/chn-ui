# chn-ui

一个`vue3`组件库

---

## 安装

```shell
npm install -D @chenhaonan22/chn-ui
```



## 使用方式

### 自动按需引入（推荐）

...

### 全局引入

```js
import { createApp } from 'vue'
const app = createApp(App)

// 全局引入 chn-ui 组件库
import chnui from '@chenhaonan22/chn-ui'
app.use(chnui)
// 引入样式
import '@chenhaonan22/chn-ui/dist/style.css'
```

于是可以在任意组件中

```vue
<template>
  <ChnHelloWord></ChnHelloWord>
</template>
```

### 按需引入

```vue
<script setup>
  import { ChnHelloWord } from '@chenhaonan22/chn-ui'
</script>

<template>
  <ChnHelloWord></ChnHelloWord>
</template>
```