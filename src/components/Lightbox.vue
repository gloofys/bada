<template>
  <div v-if="isOpen" class="lightbox">
    <span class="close" @click="closeLightbox">&times;</span>
    <div class="lightbox-content-container">
      <div class="caption">{{ images[currentImageIndex].alt }}</div>
      <img class="lightbox-content" :src="images[currentImageIndex].src" :alt="images[currentImageIndex].alt">
    </div>
    <a class="prev" @click="showPrevImage">&#10094;</a>
    <a class="next" @click="showNextImage">&#10095;</a>
  </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: {
    images: {
      type: Array,
      required: true
    },
    initialIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isOpen: true,
      currentImageIndex: this.initialIndex
    };
  },
  methods: {
    closeLightbox() {
      this.isOpen = false;
      this.$emit('close');
      document.removeEventListener('keydown', this.handleKeydown);
    },
    showNextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    showPrevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.closeLightbox();
      } else if (event.key === 'ArrowRight') {
        this.showNextImage();
      } else if (event.key === 'ArrowLeft') {
        this.showPrevImage();
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
};
</script>

<style scoped>
.lightbox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}

.lightbox-content {
  max-width: 80%;
  max-height: 80%;
}

.close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
  background-color: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
.caption {
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  font-size: 1.2rem;
}
.lightbox-content-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  max-height: 80%;
}
.caption {
  width: 100%;
  text-align: center;
  background-color: transparent;
  color: #fff;
  padding: 10px;
  font-size: 1.2rem;
}

</style>