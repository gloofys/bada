<template>
  <div class="container">
    <h1>{{ $t('nearbyCitiesPageTitle') }}</h1>
    <div>
      <h2>Szigliget</h2>
      <p><strong>{{ $t('szigliget.distance') }}</strong></p>
      <p>{{ $t('szigliget.description') }}</p>
    </div>
    <div>
      <h2>Tapolca</h2>
      <p><strong>{{ $t('tapolca.distance') }}</strong></p>
      <p>{{ $t('tapolca.description') }}</p>
    </div>
    <div>
      <h2>Keszthely</h2>
      <p><strong>{{ $t('keszthely.distance') }}</strong></p>
      <p>{{ $t('keszthely.description') }}</p>
    </div>
    <div>
      <h2>Balatonfüred</h2>
      <p><strong>{{ $t('balatonfured.distance') }}</strong></p>
      <p>{{ $t('balatonfured.description') }}</p>
    </div>
    <div>
      <h2>Hévíz</h2>
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

