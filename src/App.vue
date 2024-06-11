

<template>
  <div id="app">
    <NavigationHeader />
    <main>
      <router-view />
    </main>
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


