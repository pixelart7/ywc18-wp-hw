<template lang="pug">
.app.font-sans
  router-view
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const App = defineComponent({
  // setup() {},
});

export default App;
</script>

<style lang="scss">
@import url('https://use.typekit.net/wiq5pxl.css');

body {
  font-size: 15px;
}
// .app {}
</style>
