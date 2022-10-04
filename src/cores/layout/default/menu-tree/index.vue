<style lang="scss" scoped>
.menutree {
  border-right: 1px solid var(--el-menu-border-color);
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>

<template>
  <el-aside class="relative h-full border-0 menutree">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#ffffff"
      :default-active="1"
    >
      <template :key="index" v-for="(subMenu, index) in routes"> </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { TestHttp } from '@/apis/test';
const data = await TestHttp();
const routes = ref([]);
</script>
