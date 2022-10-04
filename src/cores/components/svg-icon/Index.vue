<style scoped>
.svg_icon {
  width: 1.2em;
  height: 1.2em;
}
</style>

<template>
  <svg aria-hidden="true" v-bind="$attrs" :class="svgIconClass">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    prefix?: string;
    color?: string;
    class?: string;
  }>(),
  {
    prefix: 'icon',
    name: '',
    color: '#333333',
    class: '',
  }
);
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const svgIconClass = computed(() =>
  ['svg_icon', props.class].filter(c => c !== '').join(' ')
);
</script>
