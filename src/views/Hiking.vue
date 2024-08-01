<template>
  <div class="banner-container">
    <img
        src="/hiking_images/badahike_1500.jpg"
        srcset="
        /hiking_images/badahike_375.jpg 375w,
        /hiking_images/badahike_550.jpg 550w,
        /hiking_images/badahike_750.jpg 750w,
        /hiking_images/badahike_1100.jpg 1100w,
        /hiking_images/badahike_1500.jpg 1500w,
        /hiking_images/badahike_2000.jpg 2000w,
        /hiking_images/badahike_3000.jpg 3000w
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
      <h1>{{ $t('hikingExperiences.heading') }}</h1>
    </div>
  </div>
  <div class="container">
    <p>{{ $t('hikingExperiences.main_introduction') }}</p>

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
<!--    <div class="text-image-wrapper">-->
<!--      <div class="text-content">-->
<!--        <h4>View from top of the hill</h4>-->
<!--      </div>-->
<!--      <img-->
<!--          src="/hiking_images/badahikingview_1500.jpg"-->
<!--          srcset="-->
<!--          /hiking_images/badahikingview_375.jpg 375w,-->
<!--          /hiking_images/badahikingview_550.jpg 550w,-->
<!--          /hiking_images/badahikingview_750.jpg 750w,-->
<!--          /hiking_images/badahikingview_1100.jpg 1100w,-->
<!--          /hiking_images/badahikingview_1500.jpg 1500w,-->
<!--          /hiking_images/badahikingview_2000.jpg 2000w,-->
<!--          /hiking_images/badahikingview_3000.jpg 3000w-->
<!--        "-->
<!--          sizes="(max-width: 375px) 375w,-->
<!--               (max-width: 550px) 550w,-->
<!--               (max-width: 750px) 750w,-->
<!--               (max-width: 1100px) 1100w,-->
<!--               (max-width: 1500px) 1500w,-->
<!--               (max-width: 2000px) 2000w,-->
<!--               100vw"-->
<!--          alt="Badacsony hiking trail pictures"-->
<!--          class="content-image"-->
<!--      />-->
<!--    </div>-->
  </div>
</template>


<script>
export default {
  name: 'Hiking'
}
</script>

<style scoped>

</style>