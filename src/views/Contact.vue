<template>
  <div class="contact-page">
    <header class="contact-header">
      <img src="/LOGO.png" alt="Logo" class="contact-logo">
    </header>

    <main>
      <section class="contact-section">
        <h1>{{ $t('contacts.informationTitle') }}</h1>
        <div class="contact-person">
          <h2>{{ $t('contacts.elikaName') }}</h2>
          <p class="contact-phone"><strong>{{ $t('contacts.elikaPhone') }}</strong></p>
          <p class="contact-email"><strong>{{ elikaEmail }}</strong></p>
        </div>
        <div class="contact-person">
          <h2>{{ $t('contacts.gilesName') }}</h2>
          <p class="contact-phone"><strong>{{ $t('contacts.gilesPhone') }}</strong></p>
          <p class="contact-email"><strong>{{ gilesEmail }}</strong></p>
        </div>
      </section>

      <section class="contact-section">
        <h1>{{ $t('contacts.hoursTitle') }}</h1>
        <p>{{ $t('contacts.mondayToThursday') }}</p>
        <p>{{ $t('contacts.fridayToSaturday') }}</p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  computed: {
    elikaEmail() {
      return this.$t('contacts.elikaEmail').replace('[at]', '@');
    },
    gilesEmail() {
      return this.$t('contacts.gilesEmail').replace('[at]', '@');
    }
  }
}
</script>