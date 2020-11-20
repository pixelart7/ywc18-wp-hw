<template lang="pug">
.price-level.inline-block.text-gray-300
  span(v-for="i in 4" :class="{ 'text-gray-800': level + 1 > i}") ฿
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const PriceLevel = defineComponent({
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  // setup() {},
});

export default PriceLevel;
</script>

<style lang="scss">
// .price-level {}
</style>
