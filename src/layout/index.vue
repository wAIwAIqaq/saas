<template>
  <div class="h-full flex flex-row">
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :render-label="renderMenuLabel"
          :render-icon="renderMenuIcon"
          :expand-icon="expandIcon"
        />
      </n-layout-sider>
      <n-layout>
        <router-view class="flex-1"></router-view>
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from "vue";
import { NMenu, NIcon, NLayout, NLayoutSider } from "naive-ui";
import { useRouter } from "vue-router";
import { BookmarkOutline, CaretDownOutline } from "@vicons/ionicons5";
import type { MenuOption } from "naive-ui";

const router = useRouter();
const menuOptions = [
  {
    label: "首页",
    key: "/",
  },
  {
    label: "关于",
    key: "/about",
  },
];

const collapsed = ref(false);

const renderMenuLabel = (option: MenuOption) => {
  if ("href" in option) {
    return h(
      "a",
      { href: option.href, target: "_blank" },
      option.label as string
    );
  }
  return option.label as string;
};
const renderMenuIcon = (option: MenuOption) => {
  // 渲染图标占位符以保持缩进
  if (option.key === "sheep-man") return true;
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === "food") return null;
  return h(NIcon, null, { default: () => h(BookmarkOutline) });
};
const expandIcon = () => {
  return h(NIcon, null, { default: () => h(CaretDownOutline) });
};
</script>
