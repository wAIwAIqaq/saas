<template>
  <n-config-provider :theme="isLightTheme ? lightTheme : darkTheme">
    <n-loading-bar-provider class="h-screen">
      <n-layout>
        <n-layout-header class="p-4 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h1 class="text-xl font-bold">Vue3 应用</h1>
            <div class="flex gap-4">
              <n-switch v-model:value="isLightTheme" size="medium">
                <template #checked-icon>
                  <n-icon :component="ArrowForwardOutline" />
                </template>
                <template #unchecked-icon>
                  <n-icon :component="ArrowBackOutline" />
                </template>
              </n-switch>
            </div>
          </div>
        </n-layout-header>
        <n-layout-content class="p-6">
          <Layout />
        </n-layout-content>
        <n-layout-footer
          class="p-4 text-center text-gray-500 border-t border-gray-200"
        >
          © {{ new Date().getFullYear() }} Vue3 示例项目
        </n-layout-footer>
      </n-layout>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref, defineComponent } from "vue";
import { ArrowBackOutline, ArrowForwardOutline } from "@vicons/ionicons5";
import {
  NConfigProvider,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NSwitch,
  NIcon,
  NLoadingBarProvider,
  darkTheme,
  lightTheme
} from "naive-ui";
import Layout from "@/layout/index.vue";

defineComponent({
  Layout
});

const isLightTheme = ref(true);
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: "Inter", sans-serif;
}

.btn-link {
  @apply px-3 py-1 rounded text-teal-600 hover:bg-teal-50 transition-colors;
  text-decoration: none;

  &.router-link-active {
    @apply bg-teal-50 font-medium;
  }
}
.n-config-provider {
  height: 100%;
}
.n-layout {
  height: 100%;
  padding: 0!important;
  .n-layout-scroll-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
