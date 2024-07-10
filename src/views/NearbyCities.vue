<template>
  <div class="container">
    <div class="events">
      <h3>Szigliget</h3>
      <p><strong>{{ $t('szigliget.distance') }}</strong></p>
      <p>{{ $t('szigliget.description') }}</p>
    </div>
    <div class="events">
      <h3>Tapolca</h3>
      <p><strong>{{ $t('tapolca.distance') }}</strong></p>
      <p>{{ $t('tapolca.description') }}</p>
    </div>
    <div class="events">
      <h3>Keszthely</h3>
      <p><strong>{{ $t('keszthely.distance') }}</strong></p>
      <p>{{ $t('keszthely.description') }}</p>
    </div>
    <div class="events">
      <h3>Balatonfüred</h3>
      <p><strong>{{ $t('balatonfured.distance') }}</strong></p>
      <p>{{ $t('balatonfured.description') }}</p>
    </div>
    <div class="events">
      <h3>Hévíz</h3>
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

