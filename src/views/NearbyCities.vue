<template>
  <div class="banner-container">
    <img
        src="/nearbycities_images/nearby_cities.png"
        alt="nearby cities picture"
        class="banner-image"
    />
    <div class="banner-content">
      <h1>{{ $t('nearbyCitiesPageTitle') }}</h1>
    </div>
  </div>

  <div class="container">
    <div class="cities">
      <h3>Szigliget</h3>
      <p><strong>{{ $t('szigliget.distance') }}</strong></p>
      <img src="/nearbycities_images/szigliget_castle.jpg" alt="Image of szigliget" class="basic-image">
      <p>{{ $t('szigliget.description') }}</p>
    </div>
    <div class="cities">
      <h3>Tapolca</h3>
      <p><strong>{{ $t('tapolca.distance') }}</strong></p>
      <img src="/nearbycities_images/tapolca.png" alt="image of Tapolca" class="basic-image">
      <p>{{ $t('tapolca.description') }}</p>
    </div>
    <div class="cities">
      <h3>Keszthely</h3>
      <p><strong>{{ $t('keszthely.distance') }}</strong></p>
      <img src="/nearbycities_images/kezthely.jpg" alt="image of kezthely" class="basic-image">
      <p>{{ $t('keszthely.description') }}</p>
    </div>
    <div class="cities">
      <h3>Balatonfüred</h3>
      <p><strong>{{ $t('balatonfured.distance') }}</strong></p>
      <img src="/nearbycities_images/balatonfüred.png" alt="image of balatonfüred" class="basic-image">
      <p>{{ $t('balatonfured.description') }}</p>
    </div>
    <div class="cities">
      <h3>Hévíz</h3>
      <p><strong>{{ $t('heviz.distance') }}</strong></p>
      <img src="/nearbycities_images/heviz.png" alt="image of heviz" class="basic-image">
      <p>{{ $t('heviz.description') }}</p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'NearbyCities',
}
</script>

