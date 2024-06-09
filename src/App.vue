

<template>
  <div id="app">
    <NavigationHeader />
    <router-view />
  </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue';

export default {
  name: 'App',
  components: {
    NavigationHeader
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

}
</style>
