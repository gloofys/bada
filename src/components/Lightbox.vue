<template>
  <div v-if="isOpen" class="lightbox" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
    <span class="close" @click="closeLightbox">&times;</span>
    <div class="lightbox-content-container" ref="lightboxContainer">
      <div class="caption">{{ images[currentImageIndex].alt }}</div>
      <div class="zoom-container" ref="zoomContainer">
        <img
            class="lightbox-content"
            :src="images[currentImageIndex].src"
            :alt="images[currentImageIndex].alt"
            ref="lightboxImage"
        />
      </div>
    </div>
    <a class="prev" @click="showPrevImage" v-if="!isMobile">&#10094;</a>
    <a class="next" @click="showNextImage" v-if="!isMobile">&#10095;</a>
  </div>
</template>

<script>
import Hammer from 'hammerjs';

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
      initialDistance: null,
      initialScale: 1,
      scale: 1,
      lastTouchEnd: 0,
      lastX: 0,
      lastY: 0,
      posX: 0,
      posY: 0,
    };
  },
  methods: {
    closeLightbox() {
      this.isOpen = false;
      this.$emit('close');
      document.body.style.overflow = ''; // Reset overflow to default
      document.removeEventListener('keydown', this.handleKeydown);
    },
    showNextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.resetZoom();
    },
    showPrevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      this.resetZoom();
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
      console.log("isMobile:", this.isMobile);
    },
    resetZoom() {
      this.scale = 1;
      this.posX = 0;
      this.posY = 0;
      this.updateTransform();
    },
    updateTransform() {
      this.$refs.lightboxImage.style.transform = `scale(${this.scale}) translate(${this.posX}px, ${this.posY}px)`;
    },
    handleTouchStart(event) {
      console.log('Touch start event:', event);
      if (this.isMobile && event.touches.length === 2) {
        this.initialDistance = this.getDistance(event.touches);
        this.initialScale = this.scale;
        this.setTransformOrigin(event.touches);
        console.log('Touch start:', this.initialDistance);
      } else if (this.isMobile && event.touches.length === 1 && this.scale > 1) {
        this.lastX = event.touches[0].clientX;
        this.lastY = event.touches[0].clientY;
      }
    },
    handleTouchMove(event) {
      console.log('Touch move event:', event);
      if (this.isMobile && event.touches.length === 2 && this.initialDistance) {
        const currentDistance = this.getDistance(event.touches);
        const scaleChange = currentDistance / this.initialDistance;
        this.scale = Math.max(1, this.initialScale * scaleChange); // Ensure scale doesn't go below 1
        this.updateTransform();
        console.log('Touch move:', currentDistance, this.scale);
      } else if (this.isMobile && event.touches.length === 1 && this.scale > 1) {
        const deltaX = event.touches[0].clientX - this.lastX;
        const deltaY = event.touches[0].clientY - this.lastY;
        this.posX += deltaX;
        this.posY += deltaY;
        this.lastX = event.touches[0].clientX;
        this.lastY = event.touches[0].clientY;
        this.updateTransform();
      }
    },
    handleTouchEnd(event) {
      console.log('Touch end event:', event);
      this.lastTouchEnd = new Date().getTime();
      console.log('Touch end:', this.scale);
    },
    getDistance(touches) {
      const [touch1, touch2] = touches;
      const dx = touch2.clientX - touch1.clientX;
      const dy = touch2.clientY - touch1.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    },
    setTransformOrigin(touches) {
      const [touch1, touch2] = touches;
      const midX = (touch1.clientX + touch2.clientX) / 2;
      const midY = (touch1.clientY + touch2.clientY) / 2;
      const bounds = this.$refs.lightboxImage.getBoundingClientRect();
      const originX = ((midX - bounds.left) / bounds.width) * 100;
      const originY = ((midY - bounds.top) / bounds.height) * 100;
      this.$refs.lightboxImage.style.transformOrigin = `${originX}% ${originY}%`;
      console.log('Transform origin:', originX, originY);
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
    this.setupHammer();

    document.body.style.overflow = 'hidden'; // Prevent scrolling
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('resize', this.checkMobileView);
    document.body.style.overflow = ''; // Reset overflow to default
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
  transition: transform 0.3s ease;
}

.zoom-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
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
