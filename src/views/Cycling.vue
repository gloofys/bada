<template>
  <div class="banner-container">
    <img
        src="/cycling_images/badabike_1500.jpg"
        srcset="
        /cycling_images/badabike_375.jpg 375w,
        /cycling_images/badabike_550.jpg 550w,
        /cycling_images/badabike_750.jpg 750w,
        /cycling_images/badabike_1100.jpg 1100w,
        /cycling_images/badabike_1500.jpg 1500w,
        /cycling_images/badabike_2000.jpg 2000w,
        /cycling_images/badabike_3000.jpg 3000w
      "
        sizes="(max-width: 375px) 375w,
             (max-width: 550px) 550w,
             (max-width: 750px) 750w,
             (max-width: 1100px) 1100w,
             (max-width: 1500px) 1500w,
             (max-width: 2000px) 2000w,
             100vw"
        alt="Badacsony hiking pictures"
        class="banner-image"
    />
    <div class="banner-content">
      <h1>{{ $t('cyclingExperiences.heading') }}</h1>
      <p>{{ $t('cyclingExperiences.description') }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Cycling'
}
</script>

<style scoped>

</style>