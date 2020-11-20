<template lang="pug">
.radio-group
  .radio(v-for="l in list" :key="`key-radio-${internalId}-${l}`")
    input.hidden(
      :id="`radio-${internalId}-${l}`"
      type="radio"
      :value="l"
      :checked="l === modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    )
    label.flex.cursor-pointer.py-1(:for="`radio-${internalId}-${l}`")
      .w-5.flex.justify-center.items-center.pointer-events-none
        .radio-circle.w-4.h-4.border.rounded-full.flex.justify-center.items-center
          .radio-inner-circle.bg-light-blue-500.rounded-full.w-2.h-2
      .pl-3.flex-1.w-full.block.select-none(
        style="padding-top: 1px;"
      ) {{l}}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const generateString = (length: number) => Array(length).fill('').map(() => Math.random().toString(36).charAt(2)).join('');

const Checkbox = defineComponent({
  props: {
    modelValue: {
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      internalId: generateString(4),
    };
  },
});

export default Checkbox;
</script>

<style lang="scss">
.radio-group {
  .radio {
    .radio-circle {
      @apply transition-colors duration-100;
    }
    .radio-inner-circle {
      transform: scale(1.5);
      transition-property: opacity, transform;
      @apply opacity-0 ease-in-out duration-100;
    }
    input:checked + label {
      .radio-circle {
        @apply border-light-blue-500;
      }
      .radio-inner-circle {
        transform: scale(1.2);
        @apply opacity-100;
      }
    }
  }
}
</style>
