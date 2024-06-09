<!-- src/components/NavigationHeader.vue -->
<template>
  <div>
    <NavigationHeaderDesktop v-if="!isMobile" />
    <NavigationHeaderMobile v-else />
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import NavigationHeaderDesktop from './NavigationHeaderDesktop.vue';
import NavigationHeaderMobile from './NavigationHeaderMobile.vue';

export default {
  name: 'NavigationHeader',
  components: {
    NavigationHeaderDesktop,
    NavigationHeaderMobile
  },
  setup() {
    const isMobile = ref(false);

    const checkIsMobile = () => {
      isMobile.value = window.innerWidth <= 768; // Adjust the width as needed
    };

    onMounted(() => {
      checkIsMobile();
      window.addEventListener('resize', checkIsMobile);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', checkIsMobile);
    });

    return {
      isMobile
    };
  }
}
</script>
