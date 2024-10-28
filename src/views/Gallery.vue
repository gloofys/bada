<template>
  <div class="gallery-container">
    <div class="gallery-categories">
      <ul>
        <li v-for="(category, index) in categories" :key="index">
          <a :href="'#' + category.id">
            <img :src="category.thumbnail" :alt="$t(category.title)" class="category-image">
            <span class="category-title">{{ $t(category.title) }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="gallery-content">
      <section v-for="(category, index) in categories" :key="index" :id="category.id">
        <h4>{{ $t(category.title) }}</h4>
        <div class="image-grid">
          <img v-for="(image, imgIndex) in category.images" :key="imgIndex" :src="image.src" :alt="image.alt" class="gallery-image" @click="openLightbox(categoryIndexToGlobalIndex(index, imgIndex))">
        </div>
      </section>
    </div>
    <Lightbox v-if="isLightboxOpen" :images="allImages" :initialIndex="initialIndex" @close="closeLightbox"/>
  </div>
</template>

<script>
import Lightbox from "@/components/Lightbox.vue";

export default {
  name: 'Gallery',
  components: {
    Lightbox
  },
  data() {
    return {
      categories: [
        {
          id: '1st-floor',
          title: 'categories.1st_floor',
          thumbnail: '/room_images/1st_floor/1st_living_room.webp',
          images: [
            { src: '/room_images/1st_floor/1st_living_room.webp', alt: 'Living room Image 1', loading: 'lazy' },
            { src: '/room_images/1st_floor/1st_living_room_2.jpg', alt: 'Living room Image 2', loading: 'lazy' },
            { src: '/room_images/1st_floor/1st_floor_kitchen.jpg', alt: '1st floor kitchen', loading: 'lazy' },
            { src: '/room_images/1st_floor/1st_floor_toilet.jpg', alt: '1st floor toilet', loading: 'lazy' },
            { src: '/room_images/1st_floor/wine_cellar.webp', alt: 'Wine cellar', loading: 'lazy' },
            { src: '/room_images/1st_floor/downstairs_stairway.webp', alt: 'Staircase to 2nd floor', loading: 'lazy' }
          ]
        },
        {
          id: '2nd-floor',
          title: 'categories.2nd_floor',
          thumbnail: '/room_images/2nd_floor/2nd_hallway.jpg',
          images: [
            { src: '/room_images/2nd_floor/2nd_hallway.jpg', alt: '2nd Floor Hallway', loading: 'lazy' },
            { src: '/room_images/2nd_floor/2nd_bedroom_NE.jpg', alt: '2nd Floor Northeast bedroom', loading: 'lazy' },
            { src: '/room_images/2nd_floor/2nd_bedroom_SW.jpg', alt: '2nd Floor Southwest bedroom', loading: 'lazy' },
            { src: '/room_images/2nd_floor/2nd_kitchen.webp', alt: '2nd Floor kitchen', loading: 'lazy' },
            { src: '/room_images/2nd_floor/2nd_kitchen_2.jpg', alt: '2nd Floor kitchen', loading: 'lazy' },
            { src: '/room_images/2nd_floor/2nd_toiletshower.webp', alt: '2nd Floor toilet', loading: 'lazy' }
          ]
        },
        {
          id: 'Garden',
          title: 'categories.Garden',
          thumbnail: '/room_images/garden/garden_upper_view.jpg',
          images: [
            { src: '/room_images/garden/garden_upper_view.jpg', alt: 'View from upper garden', loading: 'lazy' },
            { src: '/room_images/garden/garden_back.webp', alt: 'Upper garden', loading: 'lazy' },
            { src: '/room_images/garden/garden_back_2.jpg', alt: 'Upper garden', loading: 'lazy' },
            { src: '/room_images/garden/garden_front.jpg', alt: 'Garden in front of the house', loading: 'lazy' },
            { src: '/room_images/garden/lower_garden_1.webp', alt: 'Lower garden with grapes and fruit trees', loading: 'lazy' },
            { src: '/room_images/garden/garden_from_balcony.webp', alt: 'View of garden from balcony', loading: 'lazy' },

          ]
        },
        {
          id: 'Other',
          title: 'categories.Other',
          thumbnail: '/gallery_other_images/badacsony_hill.webp',
          images: [
            { src: '/gallery_other_images/badacsony_hill.webp', alt: 'Badacsony hill', loading: 'lazy' },
            { src: '/gallery_other_images/Vineyard.webp', alt: 'Vineyard', loading: 'lazy' },
            { src: '/gallery_other_images/ferry_trip_with_bikes.webp', alt: 'Ferry trip with bikes', loading: 'lazy' },
            { src: '/gallery_other_images/hills.webp', alt: 'View of badacsony across balaton', loading: 'lazy' },
            { src: '/gallery_other_images/view_from_badacsony_hill_watchtower.webp', alt: 'View from Badacsony hill watchtower', loading: 'lazy' },
            { src: '/gallery_other_images/wine_festival_1.jpg', alt: 'Badacsony Wine Festival', loading: 'lazy' },
            { src: '/gallery_other_images/view_near_folly_arboretum.webp', alt: 'View of badacsony hill from folly arboretum', loading: 'lazy' }
          ]
        }
      ],
      isLightboxOpen: false,
      selectedImages: [],
      initialIndex: 0
    };
  },
  computed: {
    allImages() {
      return this.categories.flatMap(category => category.images);
    }
  },
  methods: {
    categoryIndexToGlobalIndex(categoryIndex, imgIndex) {
      let globalIndex = 0;
      for (let i = 0; i < categoryIndex; i++) {
        globalIndex += this.categories[i].images.length;
      }
      return globalIndex + imgIndex;
    },
    openLightbox(globalIndex) {
      this.initialIndex = globalIndex;
      this.isLightboxOpen = true;
    },
    closeLightbox() {
      this.isLightboxOpen = false;
    }
  }
};
</script>

