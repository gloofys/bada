<template>
  <div class="slider" ref="sliderContainer">
    <div class="slider-window">
      <div class="slider-track" :style="trackStyle">
        <div v-for="(image, index) in images" :key="index" class="slider-item">
          <img :src="image" :alt="'Slide ' + index" />
        </div>
      </div>
    </div>

    <!-- Slider controls with higher z-index -->
    <a class="prev" @click="prevSlideByButton">&#10094;</a>
    <a class="next" @click="nextSlideByButton">&#10095;</a>

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
import Hammer from 'hammerjs';

export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentSlide: 0,
      totalSlides: 0,
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
    this.setupHammer();
  },
  beforeDestroy() {
    this.hammer.destroy(); // Clean up Hammer.js events when the component is destroyed
  },
  methods: {
    setupHammer() {
      const sliderContainer = this.$refs.sliderContainer;
      this.hammer = new Hammer(sliderContainer);

      // Handle swipe left (next slide)
      this.hammer.on('swipeleft', () => {
        this.nextSlideBySwipe();
      });

      // Handle swipe right (previous slide)
      this.hammer.on('swiperight', () => {
        this.prevSlideBySwipe();
      });
    },

    nextSlideByButton() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    },
    prevSlideByButton() {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    },
    nextSlideBySwipe() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    },
    prevSlideBySwipe() {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
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

/* Increased z-index to ensure buttons are clickable */



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
