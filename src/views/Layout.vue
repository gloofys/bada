<template>
  <div class="container">
    <div class="floor-plan">
      <h4>{{ $t('layout.firstFloor.heading') }}</h4>
      <p>{{ $t('layout.firstFloor.content') }}</p>

      <div class="image-container">
        <img
            :src="firstFloorImage"
            alt="Floor Plan"
            class="layout-image"
        />
      </div>

      <h4>{{ $t('layout.upperFloor.heading') }}</h4>
      <p>{{ $t('layout.upperFloor.content') }}</p>

      <div class="image-container">
        <img
            :src="secondFloorImage"
            alt="Floor Plan"
            class="layout-image"
        />
      </div>
    </div>

    <div class="floor-info">
      <h4>{{ $t('layout.entrances.heading') }}</h4>
      <p>{{ $t('layout.entrances.content') }}</p>
      <h4>{{ $t('layout.kitchensAndBathrooms.heading') }}</h4>
      <p>{{ $t('layout.kitchensAndBathrooms.content') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    // Computed properties for image paths based on language
    firstFloorImage() {
      return this.$i18n.locale === 'en'
          ? '/layout_images/1st_layout_transparent_png.png'
          : '/layout_images/1st_layout_ee.png';
    },

    secondFloorImage() {
      return this.$i18n.locale === 'en'
          ? '/layout_images/2nd_layout_trans.png'
          : '/layout_images/2nd_layout_ee.png';
    },
  }
};
</script>