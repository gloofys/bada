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
      <p>{{ $t('hikingExperiences.description') }}</p>
    </div>
  </div>
<div class="container">
  <p>{{ $t('hikingExperiences.main_introduction') }}</p>
  <h1>The badacsony hill trail</h1>
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
      class="banner-image"
  />
  <p>{{ $t('hikingExperiences.main_content') }}</p>
</div>
</template>


<script>
export default {
  name: 'Hiking'
}
</script>

<style scoped>

</style>