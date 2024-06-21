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
  <div class="container">
    <h4>{{ $t('cyclingExperiences.main_introduction_header') }}</h4>
    <div v-html="$t('cyclingExperiences.main_introduction')"></div>
    <!-- Wrapper for the first text and image pair -->
    <div class="text-image-wrapper">
      <div class="text-content">
        <h3>{{ $t('hikingExperiences.heading_trail') }}</h3>
        <p>{{ $t('hikingExperiences.main_content') }}</p>
      </div>
      <img
          src="/hiking_images/badahikingtrail_1500.jpg"
          srcset="
          /hiking_images/badahikingtrail_375.jpg 375w,
          /hiking_images/badahikingtrail_550.jpg 550w,
          /hiking_images/badahikingtrail_750.jpg 750w,
          /hiking_images/badahikingtrail_1100.jpg 1100w,
          /hiking_images/badahikingtrail_1500.jpg 1500w,
          /hiking_images/badahikingtrail_2000.jpg 2000w,
          /hiking_images/badahikingtrail_3000.jpg 3000w
        "
          sizes="(max-width: 375px) 375w,
               (max-width: 550px) 550w,
               (max-width: 750px) 750w,
               (max-width: 1100px) 1100w,
               (max-width: 1500px) 1500w,
               (max-width: 2000px) 2000w,
               100vw"
          alt="Badacsony hiking trail pictures"
          class="content-image"
      />
    </div>
    <div>
    <h4>{{ $t('cyclingExperiences.main_rental_header') }}</h4>
    <div v-html="$t('cyclingExperiences.main_rental')"></div>
    <h4>{{ $t('cyclingExperiences.main_events_header') }}</h4>
    <div v-html="$t('cyclingExperiences.main_events')"></div>
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