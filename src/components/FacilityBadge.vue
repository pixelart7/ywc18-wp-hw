<script lang="ts">
import { defineComponent, h, Component } from 'vue';

// import Bike from '@/assets/icons/motorcycle-solid.svg';
import Car from '@/assets/icons/car-side-solid.svg';
import Reserve from '@/assets/icons/clipboard-regular.svg';
import Pet from '@/assets/icons/paw-solid.svg';

const facilityMap: { [key: string]: Component } = { /* eslint-disable */
  'ที่จอดรถ': Car,
  'สามารถนำสัตว์เลี้ยงเข้าได้': Pet,
  'รับจองล่วงหน้า': Reserve,
};

const FacilityBadge = defineComponent({
  props: {
    facility: {
      type: String,
      required: true,
    },
  },
  render() {
    return h(
      'div',
      {
        class: 'facility-badge w-8 h-8 border border-green-500 text-green-500 rounded-full flex justify-center items-center',
      },
      (facilityMap[this.facility]) ? [ h('div', { class: 'svg-icon' }, [h(facilityMap[this.facility])])] : this.facility,
    )
  },
  // setup() {},
});

export default FacilityBadge;
</script>

<style lang="scss">
.facility-badge {
  .svg-icon {
    svg { @apply w-4 h-4 }
  }
}
</style>
