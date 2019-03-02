<template>
<div id="app">
<p href="#" v-scroll-to="'.element, 50px'">Scroll to .element</p>
<div class="element">
    Hi. I'm element.
</div>
</div>
</template>
<script>
  import slick from 'vue-slick'
export default {
  components: {
    // vueScrollTo,
  },
}
</script>
<style>

</style>
