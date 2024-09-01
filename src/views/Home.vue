<template>
  <div class="main-container">
    <div class="hero-image-wrapper">
      <img src="/homepage_images/homepage_main.jpg" alt="Welcome Image" class="hero-image">
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
        <img src="/homepage_images/house_from_driveway.jpg" alt="House Image" class="house-image">
      </div>
    </div>

    <!--    <div class="info-button">-->
    <!--      <a @click="goToContacts" class="details-button">{{ $t('bookingInfo.contactUs') }}</a>-->
    <!--    </div>-->

    <div class="info-section info-section-reverse">
      <div class="info-image">
        <img src="/homepage_images/elika_giles.jpg" alt="Family Image" class="house-image">
      </div>
      <div class="info-text">
        <h2>{{ $t('home.aboutUsTitle') }}</h2>
        <p>{{ $t('home.aboutUsDescription') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToContacts() {
      this.$router.push('/contact');
    }
  }
};
</script>
