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
    <p><strong>{{ $t('cyclingExperiences.main_introduction.part1_title') }}</strong> {{ $t('cyclingExperiences.main_introduction.part1') }}</p>
    <p><strong>{{ $t('cyclingExperiences.main_introduction.part2_title') }}</strong> {{ $t('cyclingExperiences.main_introduction.part2') }}</p>
    <p><strong>{{ $t('cyclingExperiences.main_introduction.part3_title') }}</strong> {{ $t('cyclingExperiences.main_introduction.part3') }}</p>
    <!-- Wrapper for the first text and image pair -->
    <div class="text-image-wrapper">
      <div class="text-content">
        <h4>{{ $t('cyclingExperiences.main_balaton_route_header') }}</h4>
        <p><strong>{{ $t('cyclingExperiences.main_balaton_route.part1_title') }}</strong> {{ $t('cyclingExperiences.main_balaton_route.part1') }}</p>
        <p><strong>{{ $t('cyclingExperiences.main_balaton_route.part2_title') }}</strong> {{ $t('cyclingExperiences.main_balaton_route.part2') }}</p>
        <p><strong>{{ $t('cyclingExperiences.main_balaton_route.part3_title') }}</strong> {{ $t('cyclingExperiences.main_balaton_route.part3') }}</p>
        <p><strong>{{ $t('cyclingExperiences.main_balaton_route.part4_title') }}</strong> {{ $t('cyclingExperiences.main_balaton_route.part4') }}</p>

      </div>
      <img
          src="/cycling_images/balaton_full_lap_1500.png"
          srcset="
    /cycling_images/balaton_full_lap_550.png 550w,
    /cycling_images/balaton_full_lap_1100.png 1100w,
    /cycling_images/balaton_full_lap_1500.png 1500w
  "
          sizes="(max-width: 550px) 550w,
         (max-width: 1100px) 1100w,
         (max-width: 1500px) 1500w,
         100vw"
          alt="Balaton full lap pictures"
          class="content-image"
      />

    </div>
    <h4>{{ $t('cyclingExperiences.main_3days') }}</h4>
    <div class="image-gallery">
      <img src="/cycling_images/cycle_day_left.png" alt="Cycling Image 1" class="gallery-image" />
      <img src="/cycling_images/cycle_day_center.png" alt="Cycling Image 2" class="gallery-image" />
      <img src="/cycling_images/cycle_day_right.png" alt="Cycling Image 3" class="gallery-image" />
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