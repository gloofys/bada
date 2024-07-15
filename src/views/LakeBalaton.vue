<template>
    <div class="container">
      <!-- Introduction Section -->
      <section class="intro-section-lake">
        <h3>{{ $t('lakeBalaton.introTitle') }}</h3>
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

        <!-- Water Skiing & Wakeboarding Section -->
        <div class="activity">
          <h4>{{ $t('lakeBalaton.waterSkiingTitle') }}</h4>
          <p>{{ $t('lakeBalaton.waterSkiingDescription') }}</p>
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