<template>
  <el-container class="h-screen ont-sans">
    <MenuTree />
    <el-container direction="vertical" class="overflow-auto">
      <router-view />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import MenuTree from '../default/menu-tree/index.vue';
</script>
