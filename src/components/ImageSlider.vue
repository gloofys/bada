<template>
  <div class="slider" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
    <div class="slider-window">
      <div class="slider-track" :style="trackStyle">
        <div v-for="(image, index) in images" :key="index" class="slider-item">
          <img :src="image" :alt="'Slide ' + index" />
        </div>
      </div>
    </div>

    <!-- Slider controls -->
    <a class="prev" @click="prevSlide">&#10094;</a>
    <a class="next" @click="nextSlide">&#10095;</a>

    <!-- Slider dots (optional) -->
    <div class="slider-dots">
      <span
          v-for="(image, index) in images"
          :key="index"
          :class="['dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/gallery_other_images/wine_festival_1.jpg',
        '/gallery_other_images/ferry_trip_with_bikes.jpg',
        '/gallery_other_images/hills.jpg',
      ],
      currentSlide: 0,
      totalSlides: 0,
      touchStartX: 0,
      touchEndX: 0,
    };
  },
  computed: {
    trackStyle() {
      return {
        transform: `translateX(-${this.currentSlide * 100}%)`,
      };
    },
  },
  mounted() {
    this.totalSlides = this.images.length;
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },

    // Handle touch events for swipe functionality
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      const swipeDistance = this.touchStartX - this.touchEndX;

      // If swipe distance is significant enough, navigate slides
      if (swipeDistance > 50) {
        this.nextSlide(); // Swipe left
      } else if (swipeDistance < -50) {
        this.prevSlide(); // Swipe right
      }
    }
  }
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-window {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

.slider-item {
  min-width: 100%;
  transition: 0.5s ease;
}

img {
  width: 100%;
  display: block;
  border-radius: 8px;
}

.slider-dots {
  text-align: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: #fff;
}
</style>
