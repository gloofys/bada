<template>
  <div class="container">
<!--    <h2 class="page-heading">{{ $t('howToGetHere.title') }}</h2>-->

    <section class="transportation-option">
      <h3>{{ $t('howToGetHere.byCar.title') }}</h3>
      <p>{{ $t('howToGetHere.byCar.description') }}</p>
      <ul>
        <li>{{ $t('howToGetHere.byCar.direction1') }}</li>
        <li>{{ $t('howToGetHere.byCar.direction2') }}</li>
        <li>{{ $t('howToGetHere.byCar.direction3') }}</li>
      </ul>
    </section>

    <section class="transportation-option">
      <h3>{{ $t('howToGetHere.byPlaneRentalCar.title') }}</h3>
      <p>{{ $t('howToGetHere.byPlaneRentalCar.description') }}</p>
      <ul>
        <li>{{ $t('howToGetHere.byPlaneRentalCar.detail1') }}</li>
        <li>{{ $t('howToGetHere.byPlaneRentalCar.detail2') }}</li>
        <li>{{ $t('howToGetHere.byPlaneRentalCar.detail3') }}</li>
      </ul>
    </section>

    <section class="transportation-option">
      <h3>{{ $t('howToGetHere.byPlaneTrain.title') }}</h3>
      <p>{{ $t('howToGetHere.byPlaneTrain.description') }}</p>
      <ul>
        <li>{{ $t('howToGetHere.byPlaneTrain.step1') }}</li>
        <li>{{ $t('howToGetHere.byPlaneTrain.step2') }}</li>
        <li>{{ $t('howToGetHere.byPlaneTrain.step3') }}</li>
        <li>{{ $t('howToGetHere.byPlaneTrain.step4') }}</li>
      </ul>
    </section>
  </div>
</template>


<script>
export default {
  name: 'HowToGetHere',
}
</script>

<style scoped>

</style>