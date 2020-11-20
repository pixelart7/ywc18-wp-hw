<template lang="pug">
.home.pb-24
  .h-16.sticky.top-0.z-20.bg-white.border-b.border-primary-500
    .max-w-container.mx-auto.px-4.flex.items-center.h-full
      img.h-10.mr-12.hidden(class="md:block" src="@/assets/logo.png")
      img.h-10.mr-3.block(class="md:hidden" src="@/assets/logo-mobile.png")
      form.flex-1.flex.border.border-gray-300.rounded-lg(@submit.prevent="")
        Dropdown.w-48.border-gray-300.border-r.hidden(
          class="md:block"
          disableBorder v-model="form.searchProvince" :list="provinces"
        )
          template(#icon v-if="form.searchProvince === 'พื้นที่ใกล้ฉัน'"): Pin.w-5
        .flex-1.h-10.mr-1
          input.h-full.w-full.appearance-none.bg-transparent.px-3(
            type="text"
            v-model="form.search"
            placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
          )
        button.w-16.bg-gray-100.rounded-tr-lg.rounded-br-lg.flex.items-center.justify-center(
          class="hover:bg-gray-200"
          type="submit"
        )
          Search.w-4.h-4.text-gray-600
      button.flex.w-10.h-10.justify-center.items-center.ml-4.rounded(
        class="lg:hidden hover:bg-gray-100"
        @click="isFilterShow = true"
      )
        FilterIcon.w-6.h-6.text-primary-600
  .fixed.inset-0.z-20.p-8.overflow-y-auto(
    ref="filterElement"
    v-show="isFilterShow"
    :class="{'pointer-events-none': !isFilterShow}"
  )
    .fixed.inset-0(style="background-color: rgba(0, 0, 0, 0.5)" @click="isFilterShow = false")
    .text-right.mx-auto(style="max-width: 480px;")
      button.px-6.py-1.bg-white.relative.z-20.rounded-full.mb-2(type="button" @click="isFilterShow = false")
        span.text-xs ✕
        | &nbsp;
        | ปิด
    Filter.relative.z-20.mx-auto(
      :filter="filter"
      style="max-width: 480px;"
    )
  .h-12.bg-primary-500
    .max-w-container.mx-auto.px-4.text-white.flex.items-center.h-full
      div
        .inline.underline.opacity-75 หน้าแรก
        .inline.mx-3 /
        .inline.font-semibold ค้นหา
  .max-w-container-xl.mx-auto.px-4.mt-6
    .font-bold.text-xl
      | ผลการค้นหา {{filter.category}}
      |
      template(v-if="filter.category !== filter.subCategory") {{filter.subCategory}}
    .mt-12(class="lg:grid" style="grid-template-columns: 360px 1fr; grid-gap: 2rem;")
      div
        Filter.hidden(class="lg:block" :filter="filter")
      #result.-my-2
        Merchant(:merchant="m" v-for="(m, i) in merchants" :key="`merchant-${i}`")
          //- p {{m}}
        button.mt-12.w-full.mx-auto.rounded.p-3.bg-white.border.border-gray-300.block(type="button" style="max-width: 360px;") ดูเพิ่มเติม
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, watch, ref,
} from 'vue';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import Pin from '@/assets/icons/pin.svg';
import Search from '@/assets/icons/search.svg';
import FilterIcon from '@/assets/icons/filter.svg';

import * as ywc from '@/ywc18.json';

import Filter from '@/components/Filter.vue';
import RadioGroup from '@/components/RadioGroup.vue';
import Merchant from '@/components/Merchant.vue';
import Dropdown from '@/components/Dropdown.vue';

const Home = defineComponent({
  components: {
    Search,
    Pin,
    Merchant,
    RadioGroup,
    FilterIcon,
    Filter,
    Dropdown,
  },
  setup() {
    const form = reactive({
      searchProvince: 'พื้นที่ใกล้ฉัน',
      search: '',
    });

    const filter = reactive({ // In real implementation, these will be IDs
      category: 'ร้านอาหารและเครื่องดื่ม',
      province: 'พื้นที่ใกล้ฉัน',
      priceRange: undefined,
      subCategory: 'ทั้งหมด',
    });

    watch(() => filter.category, () => {
      filter.subCategory = 'ทั้งหมด';
    });

    const { provinces } = ywc as { provinces: string[] };

    const isFilterShow = ref(false);
    const filterElement = ref(null);
    watch(isFilterShow, (newVal) => {
      if (filterElement.value) {
        if (newVal) { // Show
          disableBodyScroll(filterElement.value as unknown as Element);
        } else { // Hidden
          enableBodyScroll(filterElement.value as unknown as Element);
        }
      }
    });

    return {
      form,
      filter,
      merchants: ywc.merchants,
      provinces: ['พื้นที่ใกล้ฉัน', ...provinces],
      isFilterShow,
      filterElement,
    };
  },
});

export default Home;
</script>

<style lang="scss">
// .home {}
</style>
