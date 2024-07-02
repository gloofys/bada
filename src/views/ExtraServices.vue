<template>
  <div class="container">
    <!-- Introduction Section -->
    <section class="intro-section">
      <h2>{{ $t('extraServices.heading') }}</h2>
      <p>{{ $t('extraServices.intro') }}</p>
    </section>

    <!-- Section 1: Room Prices -->
    <section class="pricing-section">
      <table>
        <tr>
          <th>{{ $t('extraServices.service') }}</th>
          <th>{{ $t('extraServices.price') }} <span class="note">{{ $t('extraServices.perPerson') }}</span></th>
          <th>{{ $t('extraServices.description') }}</th>
        </tr>
        <tr>
          <td>{{ $t('extraServices.breakfast') }}</td>
          <td>7€</td>
          <td>{{ $t('extraServices.breakfastDetails') }}</td>
        </tr>
        <tr>
          <td>{{ $t('extraServices.wineTasting') }}</td>
          <td>7€</td>
          <td>{{ $t('extraServices.wineTastingDetails') }}</td>
        </tr>
        <tr>
          <td>{{ $t('extraServices.transport') }}</td>
          <td>{{ $t('extraServices.transportPrice') }}</td>
          <td>{{ $t('extraServices.transportDetails') }}</td>
        </tr>
      </table>
    </section>
    <section class="booking-info">
      <p>{{ $t('extraServices.message') }}</p>
      <a @click="goToContacts">{{ $t('bookingInfo.contactUs') }}</a>
    </section>

  </div>
</template>


<script>
export default {
  name: 'ExtraServices'
}
</script>

<style scoped>

</style>