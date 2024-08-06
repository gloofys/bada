<template>
  <div class="banner-container">
    <img
        src="/nearbycities_images/heviz.png"
        alt="lake heviz picture"
        class="banner-image"
    />
    <div class="banner-content">
      <h1>{{ $t('lakeHevizPageTitle') }}</h1>
    </div>
  </div>
  <div class="container">
    <div class="title">
      <p><strong>{{ $t('lakeHeviz.distance') }}</strong></p>
    <p>{{ $t('lakeHeviz.description') }}</p>
    </div>
    <div class = booking-info>
      <a :href="'https://www.heviz.hu/en'" target="_blank">{{ $t('lakeHeviz.webpage') }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LakeHeviz',
}
</script>
