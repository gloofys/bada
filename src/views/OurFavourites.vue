<template>
  <div class="container">
    <section class="intro-section">
      <h3>{{ $t('favourites.introTitle') }}</h3>
      <p>{{ $t('favourites.introText') }}</p>
    </section>
    <section>
      <img src="/FAVMAP.png" alt="Map of Favourite Spots" class="favourites-map-image">
    </section>
    <section class="list-section">
      <ul class="favourites-list">
        <li>
          <h3>{{ $t('favourites.bar1Title') }}</h3>
          <p>{{ $t('favourites.bar1Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar2Title') }}</h3>
          <p>{{ $t('favourites.bar2Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar3Title') }}</h3>
          <p>{{ $t('favourites.bar3Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar4Title') }}</h3>
          <p>{{ $t('favourites.bar4Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar5Title') }}</h3>
          <p>{{ $t('favourites.bar5Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar6Title') }}</h3>
          <p>{{ $t('favourites.bar6Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar7Title') }}</h3>
          <p>{{ $t('favourites.bar7Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar8Title') }}</h3>
          <p>{{ $t('favourites.bar8Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar9Title') }}</h3>
          <p>{{ $t('favourites.bar9Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar10Title') }}</h3>
          <p>{{ $t('favourites.bar10Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar11Title') }}</h3>
          <p>{{ $t('favourites.bar11Description') }}</p>
        </li>
        <li>
          <h3>{{ $t('favourites.bar12Title') }}</h3>
          <p>{{ $t('favourites.bar12Description') }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>


<script>
export default {
  name: 'OurFavourites'
}
</script>

<style scoped>

</style>