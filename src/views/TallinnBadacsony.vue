<template>
  <div class="container">
    <h2 class="page-heading">{{ $t('tallinnBadacsony.title') }}</h2>

    <section class="transportation-option">
      <h3>{{ $t('tallinnBadacsony.byCar.title') }}</h3>
      <p>{{ $t('tallinnBadacsony.byCar.description') }}</p>
      <ul>
        <li>{{ $t('tallinnBadacsony.byCar.direction1') }}</li>
        <li>{{ $t('tallinnBadacsony.byCar.direction2') }}</li>
        <li>{{ $t('tallinnBadacsony.byCar.direction3') }}</li>
        <li>{{ $t('tallinnBadacsony.byCar.direction4') }}</li>
        <li>{{ $t('tallinnBadacsony.byCar.direction5') }}</li>
      </ul>
    </section>

    <section class="transportation-option">
      <h3>{{ $t('tallinnBadacsony.byPlane.title') }}</h3>
      <p>{{ $t('tallinnBadacsony.byPlane.description') }}</p>
      <ul>
        <li>{{ $t('tallinnBadacsony.byPlane.detail1') }}</li>
        <li>{{ $t('tallinnBadacsony.byPlane.detail2') }}</li>
        <li>{{ $t('tallinnBadacsony.byPlane.detail3') }}</li>
      </ul>
    </section>

    <section class="transportation-option">
      <h3>{{ $t('tallinnBadacsony.byPlaneTrain.title') }}</h3>
      <p>{{ $t('tallinnBadacsony.byPlaneTrain.description') }}</p>
      <ul>
        <li>{{ $t('tallinnBadacsony.byPlaneTrain.step1') }}</li>
        <li>{{ $t('tallinnBadacsony.byPlaneTrain.step2') }}</li>
        <li>{{ $t('tallinnBadacsony.byPlaneTrain.step3') }}</li>
        <li>{{ $t('tallinnBadacsony.byPlaneTrain.step4') }}</li>
      </ul>
    </section>
  </div>
</template>


<script >
export default {
  name: 'TallinnBadacsony',
}
</script>