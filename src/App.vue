

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


