<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">关于页面</h1>
    <p>这是一个使用 Vue3、Naive UI、Pinia、Vue Router、UnoCSS 和 SCSS 的示例项目</p>
    <n-button @click="$router.push('/')" class="mt-4">
      返回首页
    </n-button>
  </div>
</template>

<script setup>
import { NButton } from 'naive-ui'
</script>