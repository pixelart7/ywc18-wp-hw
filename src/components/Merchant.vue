<template lang="pug">
.merchant.bg-white.border.border-teal-200.my-2(class="sm:flex sm:p-1")
  img.w-full.h-64.object-cover(class="sm:w-64" :src="merchant.coverImageId")
  .flex-1.px-6.py-1
    .border-b.border-gray-200.py-4
      .inline-block.mb-2
        span.text-xl.font-bold.mr-4 {{merchant.shopNameTH}}
        span.inline-block.relative(style="top: -2px;" v-if="merchant.isOpen !== 'N/A'")
          .px-2.leading-loose.rounded-sm.text-xs.font-semibold.text-white.bg-green-500(v-if="merchant.isOpen === 'Y'") เปิดอยู่
          .px-2.leading-loose.rounded-sm.text-xs.font-semibold.text-white.bg-gray-400(v-if="merchant.isOpen === 'N'") ปิดแล้ว
      p.text-gray-400
        span {{merchant.subcategoryName}}
        span.mx-3 |
        PriceLevel(:level="merchant.priceLevel")
        span.mx-3 |
        span.whitespace-nowrap {{merchant.addressDistrictName}} {{merchant.addressProvinceName}}
    .pt-6.pb-4.text-gray-400
      span(v-html="merchant.highlightText")
      .mt-2(v-if="merchant.recommendedItems.length > 0")
        span.text-gray-600.font-semibold เมนูแนะนำ:
        | &nbsp;
        span {{merchant.recommendedItems.join(', ')}}
      .flex.mt-4
        FacilityBadge.mr-1(:facility="f" v-for="(f, i) in merchant.facilities")
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import PriceLevel from '@/components/PriceLevel.vue';
import FacilityBadge from '@/components/FacilityBadge.vue';

const Merchant = defineComponent({
  components: {
    PriceLevel,
    FacilityBadge,
  },
  props: {
    merchant: {
      type: Object,
      required: true,
    },
  },
  // setup() {},
});

export default Merchant;
</script>

<style lang="scss">
// .merchant {}
</style>
