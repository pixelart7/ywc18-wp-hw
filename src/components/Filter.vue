<template lang="pug">
.filter.bg-white.border.border-primary-300.rounded-sm.px-4.py-1(
  v-if="filter"
)
  .my-3.font-bold.font-semibold ประเภทร้านค้า
  RadioGroup.mb-6(v-model="filter.category" :list="categories")
  .my-3.font-bold.font-semibold จังหวัด/ใกล้ฉัน
  Dropdown.mb-6(v-model="filter.province" :list="provinces")
    template(#icon v-if="filter.province === 'พื้นที่ใกล้ฉัน'"): Pin.w-5
  .my-3.font-bold.font-semibold ราคา
  Dropdown.mb-6(v-model="filter.priceRange" :list="priceRanges")
  .my-3.font-bold.font-semibold ประเภทร้านอาหารและเครืองดื่ม
  RadioGroup.mb-2(v-model="filter.subCategory" :list="subCategories")
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import Pin from '@/assets/icons/pin.svg';

import Dropdown from '@/components/Dropdown.vue';
import RadioGroup from '@/components/RadioGroup.vue';

import * as ywc from '@/ywc18.json';

const Filter = defineComponent({
  components: {
    Pin,
    Dropdown,
    RadioGroup,
  },
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const categories: string[] = ywc.categories.map((cat: { name: string }) => cat.name);
    const { provinces } = ywc as { provinces: string[] };
    const { priceRange: priceRanges } = ywc as { priceRange: string[] };
    const subCategories = computed(() => ywc.categories.find((cat: { name: string }) => cat.name === props.filter.category)?.subcategories as string[]);

    return {
      categories: ['ทั้งหมด', ...categories],
      provinces: ['พื้นที่ใกล้ฉัน', ...provinces],
      priceRanges: [undefined, ...priceRanges],
      subCategories: computed(() => ['ทั้งหมด', ...(subCategories.value || [])]),
    };
  },
});

export default Filter;
</script>

<style lang="scss">
// .filter {}
</style>
