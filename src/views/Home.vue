<template>
  <div class="main-container">
    <div class="hero-image-wrapper">
      <img src="/homepage_images/homepage_main.webp" alt="Welcome Image" class="hero-image">
      <div class="hero-text">
        <h1>{{ $t('home.title') }}</h1>
        <p>{{ $t('home.intro') }}</p>
      </div>
    </div>

    <div class="info-section">
      <div class="info-text">
        <h2>{{ $t('home.houseTitle') }}</h2>
        <p>{{ $t('home.houseDescription') }}</p>
      </div>
      <div class="info-image">
        <img src="/homepage_images/house_from_driveway.webp" alt="House Image" class="house-image" loading="lazy">
      </div>
    </div>


    <div class="info-section info-section-reverse">
      <div class="info-image">
        <ImageSlider :images="activityImages"/>
      </div>
      <div class="info-text">
        <h2>{{ $t('home.badaTitle') }}</h2>
        <p>{{ $t('home.badaDescription') }}</p>
      </div>
    </div>


    <div class="info-section">
      <div class="info-text">
        <h2>{{ $t('home.vineyardsTitle') }}</h2>
        <p>{{ $t('home.vineyardsDescription') }}</p>
      </div>
      <div class="info-image">
        <ImageSlider :images="wineImages"/>
      </div>
    </div>

    <!--    <div class="info-button">-->
    <!--      <a @click="goToContacts" class="details-button">{{ $t('bookingInfo.contactUs') }}</a>-->
    <!--    </div>-->

    <div class="info-section info-section-reverse">
      <div class="info-image">
        <img src="/homepage_images/elika_giles.webp" alt="Family Image" class="house-image" loading="lazy">
      </div>
      <div class="info-text">
        <h2>{{ $t('home.aboutUsTitle') }}</h2>
        <p>{{ $t('home.aboutUsDescription') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";

export default {
  name: 'Home',
  components: {
    ImageSlider,
  },
  data() {
    return {
      activityImages: [
        '/homepage_images/bada_vine_drone.webp',
        '/gallery_other_images/hills.webp',
        '/gallery_other_images/ferry_trip_with_bikes.webp',
        '/gallery_other_images/view_from_badacsony_hill_watchtower.webp',
        '/homepage_images/bada_hill_top.webp',
      ],
      wineImages: [
        '/homepage_images/bada_dinner_ps.webp',
        '/homepage_images/laposa_view.webp',
        '/homepage_images/Elika_Giles_Winebar.webp',
        '/homepage_images/winekiosk.webp',
        '/homepage_images/Elika_wine_mountains.webp'
      ],
    };
  },
};
</script>
