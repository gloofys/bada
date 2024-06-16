<template>
  <div class="floor-plan">
    <img
        src="/rooms_images/1st_layout_transparent_png.png"
        srcset="
        /rooms_images/1st_layout_transparent_png_550.png 550w,
        /rooms_images/1st_layout_transparent_png_1100.png 1100w,
        /rooms_images/1st_layout_transparent_png_1500.png 1500w
      "
        sizes="
        (max-width: 550px) 550px,
        (max-width: 1100px) 1100px,
        (max-width: 1500px) 1500px,
        100vw
      "
        alt="Floor Plan"
        class="content-image"
    />
    <!-- Hotspots for rooms -->
    <div class="hotspot kitchen" data-room="Kitchen"></div>
    <div class="hotspot kitchen1" data-room="Kitchen"></div>
    <div class="hotspot wine-cellar" data-room="Wine Cellar"></div>
    <div class="hotspot bedroom" data-room="Bedroom"></div>
    <div class="hotspot bedroom" data-room="Bedroom"></div>
    <div class="hotspot bedroom" data-room="Bedroom"></div>
    <div class="hotspot bedroom" data-room="Bedroom"></div>
    <div class="hotspot bedroom" data-room="Bedroom"></div>
    <div class="hotspot bedroom" data-room="Bedroom"></div>

    <!-- Display hovered room images -->
    <div class="hover-image kitchen">
      <img src="/rooms_images/1st_example.jpg" alt="Kitchen Image" class="room-image" />
    </div>
    <div class="hover-image wine-cellar">
      <img src="/rooms_images/2nd_example.jpg" alt="Wine Cellar Image" class="room-image" />
    </div>
    <div class="hover-image bedroom">
      <img src="/rooms_images/2nd_example.jpg" alt="Bedroom Image" class="room-image" />
    </div>
  </div>
</template>

<script>

</script>