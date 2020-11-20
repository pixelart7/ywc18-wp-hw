<template lang="pug">
.dropdown.block.relative
  .absolute.inset-0.pointer-events-none.flex.items-center(:class="{ 'rounded-sm border border-gray-300': !disableBorder }")
    .flex.justify-center.items-center.px-2: slot(name="icon")
    .flex-1.py-2
      template(v-if="modelValue") {{modelValue}}
      .text-gray-400(v-else) {{placeholder}}
    .flex.justify-center.items-center.px-2
      ChevronDown.w-5.text-gray-300
  select.w-full.h-full.appearance-none.opacity-0.p-2(
    :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
  )
    option(v-for="l in filteredList" :value="l") {{l}}
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import ChevronDown from '@/assets/icons/chevron-down.svg';

const Dropdown = defineComponent({
  components: {
    ChevronDown,
  },
  props: {
    disableBorder: {
      type: Boolean,
    },
    modelValue: {
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'กรุณาเลือก',
    },
  },
  setup(props) {
    return {
      filteredList: computed(() => (props.list || []).filter((mv: any) => mv)),
    };
  },
});

export default Dropdown;
</script>

<style lang="scss">
// .dropdown {}
</style>
