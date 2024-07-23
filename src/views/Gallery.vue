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
        <h2>{{ $t(category.title) }}</h2>
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
          id: 'living-room',
          title: 'categories.living_room',
          thumbnail: '/room_images/1st_living_room.jpg',
          images: [
            { src: '/room_images/1st_living_room.jpg', alt: 'Living Room Image 1' },
            { src: '/nearbycities_images/heviz.png', alt: 'Living Room Image 2' },
            { src: '/nearbycities_images/kezthely.jpg', alt: 'Living Room Image 3' },
            { src: '/nearbycities_images/szigliget_castle.jpg', alt: 'Living Room Image 4' }
          ]
        },
        {
          id: 'kitchen',
          title: 'categories.kitchen',
          thumbnail: '/room_images/1st_living_room.jpg',
          images: [
            { src: '/room_images/1st_living_room.jpg', alt: 'Kitchen Image 1' },
            { src: '/room_images/1st_living_room.jpg', alt: 'Kitchen Image 2' },
            { src: '/room_images/1st_living_room.jpg', alt: 'Kitchen Image 3' }
          ]
        }
        // Add more categories as needed
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

