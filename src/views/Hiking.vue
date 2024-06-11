<template>
  <div class="banner-container">
    <img
        src="/hiking_pic/badahike_1500.jpg"
        srcset="
        /hiking_pic/badahike_375.jpg 375w,
        /hiking_pic/badahike_550.jpg 550w,
        /hiking_pic/badahike_750.jpg 750w,
        /hiking_pic/badahike_1100.jpg 1100w,
        /hiking_pic/badahike_1500.jpg 1500w,
        /hiking_pic/badahike_2000.jpg 2000w,
        /hiking_pic/badahike_3000.jpg 3000w
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
</template>


<script>
export default {
  name: 'Hiking'
}
</script>

<style scoped>

</style>