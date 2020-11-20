<template lang="pug">
.home
  .h-16
    .max-w-container.mx-auto.px-4 asd
  .h-12.bg-primary-500
    .max-w-container.mx-auto.px-4.text-white.flex.items-center.h-full
      div
        .inline.underline.opacity-75 หน้าแรก
        .inline.mx-3 /
        .inline.font-semibold ค้นหา
  .max-w-container-xl.mx-auto.px-4.mt-6
    .font-bold.text-xl ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด
    .grid.mt-12(style="grid-template-columns: 360px 1fr;")
      #filter.border.border-primary-300.rounded.px-4
        .my-4.font-bold.font-semibold ประเภทร้านค้า
        RadioGroup.mb-6(v-model="form.category" :list="categories")
        .my-4.font-bold.font-semibold จังหวัด/ใกล้ฉัน
        Dropdown.mb-6(v-model="form.province" :list="provinces")
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

import * as ywc from '@/ywc18.json';

import RadioGroup from '@/components/RadioGroup.vue';
import Dropdown from '@/components/Dropdown.vue';

const Home = defineComponent({
  components: {
    RadioGroup,
    Dropdown,
  },
  setup() {
    const form = reactive({ // In real implementation, these will be IDs
      category: 'ร้านอาหารและเครื่องดื่ม',
      province: 'พื้นที่ใกล้ฉัน',
    });

    const categories: string[] = ywc.categories.map((cat: { name: string }) => cat.name);
    const { provinces } = ywc as { provinces: string[] };

    return {
      form,
      categories: ['ทั้งหมด', ...categories],
      provinces: ['พื้นที่ใกล้ฉัน', ...provinces],
    };
  },
});

export default Home;
</script>

<style lang="scss">
// .home {}
</style>
