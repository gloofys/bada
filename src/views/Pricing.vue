
<template>
  <div class="container">
    <!-- Introduction Section -->
    <section class="intro-section">
      <h2>{{ $t('rentalOptions.heading') }}</h2>
      <p>{{ $t('rentalOptions.intro1') }}</p>
      <p>{{ $t('rentalOptions.intro2') }}</p>
    </section>

    <!-- Section 1: Room Prices -->
    <section class="pricing-section">
      <h3>{{ $t('roomPricing.heading') }}</h3>
      <table>
        <tr>
          <th>{{ $t('roomPricing.roomType') }}</th>
          <th>{{ $t('roomPricing.price') }} <span class="note">{{ $t('roomPricing.perNight') }}</span></th>
          <th>{{ $t('roomPricing.bedsOccupancy') }}</th>
        </tr>
        <tr>
          <td>{{ $t('roomPricing.bedroom') }}</td>
          <td>€40</td>
          <td>{{ $t('roomPricing.bedroomDetails') }}</td>
        </tr>
        <tr>
          <td>{{ $t('roomPricing.bedroomDownstairs') }}</td>
          <td>€40</td>
          <td>{{ $t('roomPricing.bedroomDownstairsDetails') }}</td>
        </tr>
        <tr>
          <td>{{ $t('roomPricing.bedroomBalcony') }}</td>
          <td>€60</td>
          <td>{{ $t('roomPricing.bedroomBalconyDetails') }}</td>
        </tr>
      </table>
    </section>

    <!-- Section 2: Whole Floor Prices -->
    <section class="pricing-section">
      <h3>{{ $t('floorPricing.heading') }}</h3>
      <table>
        <tr>
          <th>{{ $t('floorPricing.floor') }}</th>
          <th>{{ $t('floorPricing.price') }} <span class="note">{{ $t('floorPricing.perNight') }}</span></th>
          <th>{{ $t('floorPricing.bedsOccupancy') }}</th>
        </tr>
        <tr>
          <td>{{ $t('floorPricing.firstFloor') }}</td>
          <td>€100</td>
          <td>{{ $t('floorPricing.firstFloorDetails') }}</td>
        </tr>
        <tr>
          <td>{{ $t('floorPricing.secondFloor') }}</td>
          <td>€150</td>
          <td>{{ $t('floorPricing.secondFloorDetails') }}</td>
        </tr>
      </table>
    </section>

    <!-- Section 3: Whole House Rental -->
    <section class="pricing-section">
      <h3>{{ $t('houseRental.heading') }}</h3>
      <table>
        <tr>
          <th>{{ $t('houseRental.rentalType') }}</th>
          <th>{{ $t('houseRental.price') }} <span class="note">{{ $t('houseRental.perNight') }}</span></th>
          <th>{{ $t('houseRental.bedsOccupancy') }}</th>
        </tr>
        <tr>
          <td>{{ $t('houseRental.wholeHouse') }}</td>
          <td>€250</td>
          <td>{{ $t('houseRental.wholeHouseDetails') }}</td>
        </tr>
      </table>
    </section>
    <section class="booking-info">
      <p>{{ $t('bookingInfo.message') }}</p>
      <a @click="goToContacts">{{ $t('bookingInfo.contactUs') }}</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PricingPage',
  methods: {
    goToContacts() {
      this.$router.push('/contact');
    }
  }
};
</script>
