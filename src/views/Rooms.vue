<template>
  <div class="container">
    <div class="floor-plan">
      <p>

        <h4>Main Structure</h4>
        The house boasts three floors, with the third floor being an expansive, empty attic space, providing ample
        opportunity for future customization or storage.

        <h4>Entrances</h4>
        There are two main entrances, one on each of the first two floors, offering convenient access and added
        flexibility for different living arrangements.

        <h4>Kitchens and Bathrooms</h4>
        Each of the first two floors is equipped with a modern kitchen and a full bathroom with a shower. The kitchen on
        the upper floor also includes a dining area, perfect for family meals and gatherings.


        <h4>First Floor</h4>
        The first floor is the heart of the home, with a spacious living room furnished with sofas that can easily be
        converted into beds, ideal for hosting guests. This floor also includes a series of cellar rooms and a unique
        16-meter-long wine cellar tunnel, carved into the volcanic soil of Badacsony Hill, offering a distinctive
        feature for wine enthusiasts. Additionally, this floor houses a garage and a utility room, ensuring practicality
        and ease of living.
      </p>
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
        <img src="/rooms_images/1st_example.jpg" alt="Kitchen Image" class="room-image"/>
      </div>
      <div class="hover-image wine-cellar">
        <img src="/rooms_images/2nd_example.jpg" alt="Wine Cellar Image" class="room-image"/>
      </div>
      <div class="hover-image bedroom">
        <img src="/rooms_images/2nd_example.jpg" alt="Bedroom Image" class="room-image"/>
      </div>
      <h4>Upper Floor</h4>
      <p>The upper floor is designed for privacy and relaxation, featuring three cozy bedrooms. One of these bedrooms
        has access to a charming balcony, providing a serene outdoor retreat.
      </p>
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
    </div>
  </div>
</template>

<script>

</script>