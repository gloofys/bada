<template>
  <div class="container">
    <div class="title">
    <h3>{{ $t('lakeHevizPageTitle') }}</h3>
    <img src="/nearbycities_images/heviz.png" alt="image of heviz" class="basic-image">
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
