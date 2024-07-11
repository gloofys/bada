<template>
  <div class="container">
    <div class="cities">
      <h4>Szigliget</h4>
      <p><strong>{{ $t('szigliget.distance') }}</strong></p>
      <img src="/nearbycities_images/szigliget_castle.jpg" alt="Image of szigliget" class="basic-image">
      <p>{{ $t('szigliget.description') }}</p>
    </div>
    <div class="cities">
      <h4>Tapolca</h4>
      <p><strong>{{ $t('tapolca.distance') }}</strong></p>
      <img src="/nearbycities_images/tapolca.png" alt="image of Tapolca" class="basic-image">
      <p>{{ $t('tapolca.description') }}</p>
    </div>
    <div class="cities">
      <h4>Keszthely</h4>
      <p><strong>{{ $t('keszthely.distance') }}</strong></p>
      <img src="/nearbycities_images/kezthely.jpg" alt="image of kezthely" class="basic-image">
      <p>{{ $t('keszthely.description') }}</p>
    </div>
    <div class="cities">
      <h4>Balatonfüred</h4>
      <p><strong>{{ $t('balatonfured.distance') }}</strong></p>
      <p>{{ $t('balatonfured.description') }}</p>
    </div>
    <div class="cities">
      <h4>Hévíz</h4>
      <p><strong>{{ $t('heviz.distance') }}</strong></p>
      <p>{{ $t('heviz.description') }}</p>
    </div>


  </div>
</template>

<script>
export default {
  name: 'NearbyCities',
}
</script>

