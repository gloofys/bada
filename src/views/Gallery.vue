

<template>
  <div class="gallery-container">
    <div class="gallery-categories">
      <ul>
        <li v-for="(category, index) in categories" :key="index">
          <a :href="'#' + category.id">
            <img :src="category.thumbnail" :alt="category.title" class="category-image">
            <span class="category-title">{{ category.title }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="gallery-content">
      <section v-for="(category, index) in categories" :key="index" :id="category.id">
        <h2>{{ category.title }}</h2>
        <div class="image-grid">
          <img v-for="(image, imgIndex) in category.images" :key="imgIndex" :src="image.src" :alt="image.alt" class="gallery-image" @click="openLightbox(index, imgIndex)">
        </div>
      </section>
    </div>
    <Lightbox v-if="isLightboxOpen" :images="selectedImages" :initialIndex="initialIndex" @close="closeLightbox"/>
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
          title: 'Elutuba',
          thumbnail: '/room_images/1st_living_room.jpg',
          images: [
            { src: '/room_images/1st_living_room.jpg', alt: 'Living Room Image 1' },
            { src: '/room_images/1st_living_room.jpg', alt: 'Living Room Image 2' },
            { src: '/room_images/1st_living_room.jpg', alt: 'Living Room Image 3' }
          ]
        },
        {
          id: 'kitchen',
          title: 'Täisköök',
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
  methods: {
    openLightbox(categoryIndex, imgIndex) {
      this.selectedImages = this.categories[categoryIndex].images;
      this.initialIndex = imgIndex;
      this.isLightboxOpen = true;
    },
    closeLightbox() {
      this.isLightboxOpen = false;
    }
  }
};
</script>

<style scoped>

.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.gallery-categories ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.gallery-categories li {
  margin: 5px;
}

.gallery-categories a {
  text-decoration: none;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-image {
  width: 100px; /* Adjusted width */
  height: 75px; /* Adjusted height */
  object-fit: cover;
  border-radius: 5px;
  transition: transform 0.3s;
}

.category-title {
  margin-top: 5px;
  font-size: 1rem;
}

.category-image:hover {
  transform: scale(1.05);
}

.gallery-content {
  width: 100%;
  max-width: 1200px;
}

section {
  margin-bottom: 40px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.image-grid img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  transition: transform 0.3s;
}

.image-grid img:hover {
  transform: scale(1.05);
}
</style>