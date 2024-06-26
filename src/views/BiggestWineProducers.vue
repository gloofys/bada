<template>
  <div class="container">
    <div class="winery" v-for="(winery, key) in wineries" :key="key">
      <div class="winery-logo">
        <img :src="`/winery_images/${key}_logo.png`" :alt="$t(`wineries.${key}.name`) + ' Logo'">
      </div>
      <div class="winery-content">
        <h3>{{ $t(`wineries.${key}.name`) }}</h3>
        <p>{{ $t(`wineries.${key}.description`) }}</p>
        <a :href="$t(`wineries.${key}.website_url`)" target="_blank">{{ $t(`wineries.${key}.website_text`) }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BiggestWineProducers',
  computed: {
    wineries() {
      return this.$i18n.messages[this.$i18n.locale].wineries;
    }
  }
};
</script>

<style scoped>

</style>