<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="company-info">
        <p>{{ $t('footer.companyName') }}</p>
        <p>{{ $t('footer.companyAddress') }}</p>
      </div>
      <div class="contact-info">
        <p>{{ $t('footer.phone') }}</p>
        <p>{{ email }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    email() {
      return this.$t('footer.email').replace('[at]', '@');
    }
  }
};
</script>


