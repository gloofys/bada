<template>
  <div v-if="isOpen" class="lightbox">
    <span class="close" @click="closeLightbox">&times;</span>
    <div class="lightbox-content-container" ref="lightboxContainer">
      <div class="caption">{{ images[currentImageIndex].alt }}</div>
      <div class="zoom-container" ref="zoomContainer">
        <img class="lightbox-content" :src="images[currentImageIndex].src" :alt="images[currentImageIndex].alt" ref="lightboxImage">
      </div>
    </div>
    <a class="prev" @click="showPrevImage" v-if="!isMobile">&#10094;</a>
    <a class="next" @click="showNextImage" v-if="!isMobile">&#10095;</a>
  </div>
</template>

<script>
import Hammer from 'hammerjs';
import panzoom from '@panzoom/panzoom';

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
      currentImageIndex: this.initialIndex,
      isMobile: false,
      panzoomInstance: null
    };
  },
  methods: {
    closeLightbox() {
      this.isOpen = false;
      this.$emit('close');
      document.removeEventListener('keydown', this.handleKeydown);
      if (this.panzoomInstance) {
        this.panzoomInstance.destroy();
      }
    },
    showNextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.updatePanzoom();
    },
    showPrevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      this.updatePanzoom();
    },
    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.closeLightbox();
      } else if (event.key === 'ArrowRight') {
        this.showNextImage();
      } else if (event.key === 'ArrowLeft') {
        this.showPrevImage();
      }
    },
    setupHammer() {
      const hammer = new Hammer(this.$refs.lightboxContainer);
      hammer.on('swipeleft', () => {
        this.showNextImage();
      });
      hammer.on('swiperight', () => {
        this.showPrevImage();
      });
    },
    checkMobileView() {
      this.isMobile = window.innerWidth <= 768;
    },
    setupPanzoom() {
      const imageElement = this.$refs.lightboxImage;
      if (imageElement) {
        this.panzoomInstance = panzoom(imageElement, {
          maxScale: 4,
          contain: 'inside'
        });
      }
    },
    updatePanzoom() {
      this.$nextTick(() => {
        if (this.panzoomInstance) {
          this.panzoomInstance.destroy();
        }
        this.setupPanzoom();
      });
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
    this.setupHammer();
    this.setupPanzoom();
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('resize', this.checkMobileView);
    if (this.panzoomInstance) {
      this.panzoomInstance.destroy();
    }
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

.zoom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
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

@media (max-width: 768px) {
  .lightbox-content {
    max-width: 100%;
    max-height: 100%;
  }
  .lightbox-content-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
  }
  .close {
    position: absolute;
    top: 35px;
    right: 35px;
    color: #fff;
    font-size: 80px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
