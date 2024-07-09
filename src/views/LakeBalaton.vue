<template>
    <div class="container">
      <!-- Introduction Section -->
      <section class="intro-section-lake">
        <h2>{{ $t('lakeBalaton.introTitle') }}</h2>
        <p>{{ $t('lakeBalaton.introText1') }}</p>
        <p>{{ $t('lakeBalaton.introText2') }}</p>
      </section>

      <!-- Activities Section -->
      <section class="activities-section">
        <!-- Swimming Section -->
        <div class="activity">
          <h3>{{ $t('lakeBalaton.swimmingTitle') }}</h3>
          <p>{{ $t('lakeBalaton.swimmingDescription') }}</p>
        </div>

        <!-- Sailing Section -->
        <div class="activity">
          <h3>{{ $t('lakeBalaton.sailingTitle') }}</h3>
          <p>{{ $t('lakeBalaton.sailingDescription') }}</p>
        </div>

        <!-- Water Skiing & Wakeboarding Section -->
        <div class="activity">
          <h3>{{ $t('lakeBalaton.waterSkiingTitle') }}</h3>
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