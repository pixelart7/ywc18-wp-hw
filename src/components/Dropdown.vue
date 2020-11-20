<template lang="pug">
.dropdown.block.relative
  .absolute.inset-0.pointer-events-none.border.border-gray-400.flex.rounded
    .flex-1.p-2 {{modelValue}}
    .flex.justify-center.items-center.px-2: img.w-5.text-gray-200(src="@/assets/icons/chevron-down.svg")
  select.w-full.h-full.appearance-none.opacity-0.p-2(:value="modelValue" @change="$emit('update:modelValue', $event.target.value)")
    option(v-for="l in list" :value="l") {{l}}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Dropdown = defineComponent({
  props: {
    modelValue: {
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  // setup() {},
});

export default Dropdown;
</script>

<style lang="scss">
// .dropdown {}
</style>
