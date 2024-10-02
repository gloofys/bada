

<template>
  <div id="app">
    <NavigationHeader />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue';
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    Footer,
    NavigationHeader
  },
  mounted() {
    window.scrollTo(0, 0); // Scroll to top on mount
  }
}

</script>


