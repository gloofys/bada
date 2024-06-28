<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="company-info">
        <h3>{{ $t('footer.companyInfoTitle') }}</h3>
        <p>{{ $t('footer.companyName') }}</p>
        <p>{{ $t('footer.companyAddress') }}</p>
      </div>
      <div class="contact-info">
        <h3>{{ $t('footer.contactInfoTitle') }}</h3>
        <p>{{ $t('footer.phone') }}</p>
        <p>{{ $t('footer.email') }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>


