<template>
  <div class="container">
    <div class="floor-plan">
      <h4>{{ $t('layout.firstFloor.heading') }}</h4>
      <p>{{ $t('layout.firstFloor.content') }}</p>

      <div class="image-container">
        <img
            src="/layout_images/1st_layout_transparent_png.png"
            srcset="
            /layout_images/1st_layout_transparent_png_550.png 550w,
            /layout_images/1st_layout_transparent_png_1100.png 1100w,
            /layout_images/1st_layout_transparent_png_1500.png 1500w
          "
            sizes="
            (max-width: 550px) 550px,
            (max-width: 1100px) 1100px,
            (max-width: 1500px) 1500px,
            100vw
          "
            alt="Floor Plan"
            class="layout-image"
        />
        <!-- Hotspots for rooms -->
      </div>
      <h4>{{ $t('layout.upperFloor.heading') }}</h4>
      <p>{{ $t('layout.upperFloor.content') }}</p>
      <div class="image-container">
        <img
            src="/layout_images/2nd_layout_trans.png"
            srcset="
            /layout_images/2nd_layout_trans_550.png 550w,
            /layout_images/2nd_layout_trans_1100.png 1100w,
            /layout_images/2nd_layout_trans_1500.png 1500w
          "
            sizes="
            (max-width: 550px) 550px,
            (max-width: 1100px) 1100px,
            (max-width: 1500px) 1500px,
            100vw
          "
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
  name: 'Layout'
}
</script>

