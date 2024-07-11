<template>
  <div class="main-container">
    <div class="hero-image-wrapper">
      <img src="/homepage_images/homepage_main.jpg" alt="Welcome Image" class="hero-image">
      <div class="hero-text">
        <h1>{{ $t('home.title') }}</h1>
        <p>{{ $t('home.intro') }}</p>
      </div>
    </div>
  </div>
<!--  <div class="container">-->
<!--    <p> We have owned the house since 2015. Have done a full renovation.-->
<!--    </p>-->
<!--  </div>-->
</template>
<script>
export default {
  name: 'Home'
}
</script>


magick ./public/cycling_images/balaton_full_lap.jpg -resize 550x ./public/cycling_images/balaton_full_lap_550.png


magick ./public/cycling_images/balaton_full_lap.png -resize 550x ./public/cycling_images/balaton_full_lap_550.png
magick ./public/cycling_images/balaton_full_lap.png -resize 1100x ./public/cycling_images/balaton_full_lap_1100.png
magick ./public/cycling_images/balaton_full_lap.png -resize 1500x ./public/cycling_images/balaton_full_lap_1500.png

