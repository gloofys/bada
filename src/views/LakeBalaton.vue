<template>
  <div class="banner-container">
    <img
        src="/lake_balaton_images/balaton_map.jpg"
        alt="Balaton lake picture"
        class="banner-image"
    />
    <div class="banner-content">
      <h1>{{ $t('lakeBalaton.introTitle') }}</h1>
    </div>
  </div>
    <div class="container">
      <!-- Introduction Section -->
      <section class="intro-section-lake">
        <p>{{ $t('lakeBalaton.introText1') }}</p>
        <p>{{ $t('lakeBalaton.introText2') }}</p>
      </section>

      <!-- Activities Section -->
      <section class="activities-section">
        <!-- Swimming Section -->
        <div class="activity">
          <h4>{{ $t('lakeBalaton.swimmingTitle') }}</h4>
          <p>{{ $t('lakeBalaton.swimmingDescription') }}</p>
          <img src="/lake_balaton_images/badacsony_strand.jpg" alt="image of Badacsony strand" class="basic-image">
        </div>

        <!-- Sailing Section -->
        <div class="activity">
          <h4>{{ $t('lakeBalaton.sailingTitle') }}</h4>
          <p>{{ $t('lakeBalaton.sailingDescription') }}</p>
          <img src="/lake_balaton_images/sailing.jpg" alt="image of sailing" class="basic-image">
        </div>

      </section>
    </div>
</template>


<script>
export default {
  name: 'LakeBalaton'
}
</script>

<style scoped>

</style>