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
          thumbnail: '/room_images/1st_floor/1st_living_room.jpg',
          images: [
            { src: '/room_images/1st_floor/1st_living_room.jpg', alt: 'Living Room Image 1', loading: 'lazy' },
            { src: '/room_images/1st_floor/1st_living_room_2.jpg', alt: 'Living Room Image 2', loading: 'lazy' },
            { src: '/room_images/1st_floor/1st_floor_kitchen.jpg', alt: '1st floor kitchen', loading: 'lazy' },
            { src: '/room_images/1st_floor/1st_floor_toilet.jpg', alt: '1st floor toilet', loading: 'lazy' },
            { src: '/room_images/1st_floor/wine_cellar.jpg', alt: 'wine cellar', loading: 'lazy' }
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
            { src: '/room_images/2nd_floor/2nd_kitchen.jpg', alt: '2nd Floor kitchen', loading: 'lazy' },
            { src: '/room_images/2nd_floor/2nd_kitchen_2.jpg', alt: '2nd Floor kitchen', loading: 'lazy' },
            { src: '/room_images/2nd_floor/2nd_toiletshower.jpg', alt: '2nd Floor toilet', loading: 'lazy' }
          ]
        },
        {
          id: 'Garden',
          title: 'categories.Garden',
          thumbnail: '/room_images/garden/garden_upper_view.jpg',
          images: [
            { src: '/room_images/garden/garden_upper_view.jpg', alt: 'View from upper garden', loading: 'lazy' },
            { src: '/room_images/garden/garden_back.jpg', alt: 'Upper garden', loading: 'lazy' },
            { src: '/room_images/garden/garden_back_2.jpg', alt: 'Upper garden', loading: 'lazy' },
            { src: '/room_images/garden/garden_front.jpg', alt: 'Garden in front of the house', loading: 'lazy' },
            { src: '/room_images/garden/lower_garden_1.jpg', alt: 'Lower garden with grapes and fruit trees', loading: 'lazy' },
            { src: '/room_images/garden/garden_grapes.jpg', alt: 'Our homegrown grapes', loading: 'lazy' },
            { src: '/room_images/garden/garden_from_balcony.jpg', alt: 'View of garden from balcony', loading: 'lazy' }
          ]
        },
        {
          id: 'Other',
          title: 'categories.Other',
          thumbnail: '/gallery_other_images/badacsony_hill.jpg',
          images: [
            { src: '/gallery_other_images/badacsony_hill.jpg', alt: 'Badacsony hill', loading: 'lazy' },
            { src: '/gallery_other_images/Vineyard.jpg', alt: 'Vineyard', loading: 'lazy' },
            { src: '/gallery_other_images/ferry_trip_with_bikes.jpg', alt: 'Ferry trip with bikes', loading: 'lazy' },
            { src: '/gallery_other_images/hills.jpg', alt: 'View of badacsony across balaton', loading: 'lazy' },
            { src: '/gallery_other_images/view_from_badacsony_hill_watchtower.jpg', alt: 'View from Badacsony hill watchtower', loading: 'lazy' },
            { src: '/gallery_other_images/wine_festival_1.jpg', alt: 'Badacsony Wine Festival', loading: 'lazy' }
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

