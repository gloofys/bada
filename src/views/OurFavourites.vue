<template>
  <div class="container">
    <section class="intro-section">
      <h3>{{ $t('favourites.introTitle') }}</h3>
      <p>{{ $t('favourites.introText') }}</p>
    </section>
    <section class="hint-section">
      <h5>Click on the numbers on the map to view details below.</h5>
    </section>
    <section class="map-section">
      <div class="map-container">
        <img src="/FAVMAP.png" alt="Map of Favourite Spots" class="favourites-map-image">
        <div class="map-number" @click="showInfo(1)">1</div>
        <div class="map-number" @click="showInfo(2)">2</div>
        <div class="map-number" @click="showInfo(3)">3</div>
        <div class="map-number" @click="showInfo(4)">4</div>
        <div class="map-number" @click="showInfo(5)">5</div>
        <div class="map-number" @click="showInfo(6)">6</div>
        <div class="map-number" @click="showInfo(7)">7</div>
        <div class="map-number" @click="showInfo(8)">8</div>
        <div class="map-number" @click="showInfo(9)">9</div>
        <div class="map-number" @click="showInfo(10)">10</div>
        <div class="map-number" @click="showInfo(11)">11</div>
        <div class="map-number" @click="showInfo(12)">12</div>
      </div>
    </section>
    <section class="list-section">
      <div v-if="selectedBar === 1">
        <h3>{{ $t('favourites.bar1Title') }}</h3>
        <p>{{ $t('favourites.bar1Description') }}</p>
      </div>
      <div v-if="selectedBar === 2">
        <h3>{{ $t('favourites.bar2Title') }}</h3>
        <p>{{ $t('favourites.bar2Description') }}</p>
      </div>
      <div v-if="selectedBar === 3">
        <h3>{{ $t('favourites.bar3Title') }}</h3>
        <p>{{ $t('favourites.bar3Description') }}</p>
      </div>
      <div v-if="selectedBar === 4">
        <h3>{{ $t('favourites.bar4Title') }}</h3>
        <p>{{ $t('favourites.bar4Description') }}</p>
      </div>
      <div v-if="selectedBar === 5">
        <h3>{{ $t('favourites.bar5Title') }}</h3>
        <p>{{ $t('favourites.bar5Description') }}</p>
      </div>
      <div v-if="selectedBar === 6">
        <h3>{{ $t('favourites.bar6Title') }}</h3>
        <p>{{ $t('favourites.bar6Description') }}</p>
      </div>
      <div v-if="selectedBar === 7">
        <h3>{{ $t('favourites.bar7Title') }}</h3>
        <p>{{ $t('favourites.bar7Description') }}</p>
      </div>
      <div v-if="selectedBar === 8">
        <h3>{{ $t('favourites.bar8Title') }}</h3>
        <p>{{ $t('favourites.bar8Description') }}</p>
      </div>
      <div v-if="selectedBar === 9">
        <h3>{{ $t('favourites.bar9Title') }}</h3>
        <p>{{ $t('favourites.bar9Description') }}</p>
      </div>
      <div v-if="selectedBar === 10">
        <h3>{{ $t('favourites.bar10Title') }}</h3>
        <p>{{ $t('favourites.bar10Description') }}</p>
      </div>
      <div v-if="selectedBar === 11">
        <h3>{{ $t('favourites.bar11Title') }}</h3>
        <p>{{ $t('favourites.bar11Description') }}</p>
      </div>
      <div v-if="selectedBar === 12">
        <h3>{{ $t('favourites.bar12Title') }}</h3>
        <p>{{ $t('favourites.bar12Description') }}</p>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'OurFavourites',
  data() {
    return {
      selectedBar: null
    };
  },
  methods: {
    showInfo(barNumber) {
      this.selectedBar = barNumber;
    }
  }
};
</script>
