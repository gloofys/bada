<template>
  <div class="main-container">
    <div class="hero-image-wrapper">
      <img src="/homepage_images/homepage_main.jpg" alt="Welcome Image" class="hero-image" loading="lazy">
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
        <img src="/homepage_images/house_from_driveway.jpg" alt="House Image" class="house-image" loading="lazy">
      </div>
    </div>


    <div class="info-section info-section-reverse">
      <div class="info-image">
        <ImageSlider :images="wineImages"/>
      </div>
      <div class="info-text">
        <h2>{{ $t('home.aboutUsTitle') }}</h2>
        <p>{{ $t('home.aboutUsDescription') }}</p>
      </div>
    </div>


    <div class="info-section">
      <div class="info-text">
        <h2>{{ $t('home.houseTitle') }}</h2>
        <p>{{ $t('home.houseDescription') }}</p>
      </div>
      <div class="info-image">
        <ImageSlider :images="activityImages"/>
      </div>
    </div>

    <!--    <div class="info-button">-->
    <!--      <a @click="goToContacts" class="details-button">{{ $t('bookingInfo.contactUs') }}</a>-->
    <!--    </div>-->

    <div class="info-section info-section-reverse">
      <div class="info-image">
        <img src="/homepage_images/elika_giles.jpg" alt="Family Image" class="house-image" loading="lazy">
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
        '/gallery_other_images/hills.jpg',
        '/gallery_other_images/ferry_trip_with_bikes.jpg',
        '/gallery_other_images/view_from_badacsony_hill_watchtower.jpg',
      ],
      wineImages: [
        '/gallery_other_images/wine_festival_1.jpg',
        '/gallery_other_images/Vineyard.jpg',
      ],
    };
  },
};
</script>
