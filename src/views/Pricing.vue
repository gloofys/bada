
<template>
  <div class="container">
    <!-- Introduction Section -->
    <section class="intro-section">
      <h2>Rental Options</h2>
      <p>Welcome to our beautiful accommodation options. We offer a variety of renting options to suit your needs, whether you are looking for individual room rentals, entire floor rentals, or renting the whole house for a larger group or family gathering.</p>
      <p>All bookings are done via phone or email. Please contact us to get the best price quote for long stays.</p>
    </section>

    <!-- Section 1: Room Prices -->
    <section class="pricing-section">
      <h3>Room Pricing</h3>
      <table>
        <tr>
          <th>Room Type</th>
          <th>Price <span class="note">(per night)</span></th>
          <th>Beds & Occupancy</th>
        </tr>
        <tr>
          <td>Bedroom</td>
          <td>€40</td>
          <td>1 Queen Bed, Sleeps 2</td>
        </tr>
        <tr>
          <td>Bedroom downstairs</td>
          <td>€40</td>
          <td>1 King Bed, Sleeps 2</td>
        </tr>
        <tr>
          <td>Bedroom with balcony</td>
          <td>€60</td>
          <td>1 King Bed, Sleeps 2</td>
        </tr>
      </table>
    </section>

    <!-- Section 2: Whole Floor Prices -->
    <section class="pricing-section">
      <h3>Whole Floor Pricing</h3>
      <table>
        <tr>
          <th>Floor</th>
          <th>Price <span class="note">(per night)</span></th>
          <th>Beds & Occupancy</th>
        </tr>
        <tr>
          <td>1st Floor</td>
          <td>€100</td>
          <td>1 Bedroom, Sleeps 6</td>
        </tr>
        <tr>
          <td>2nd Floor</td>
          <td>€150</td>
          <td>3 Bedrooms, Sleeps 6</td>
        </tr>
      </table>
    </section>

    <!-- Section 3: Whole House Rental -->
    <section class="pricing-section">
      <h3>Whole House Rental</h3>
      <table>
        <tr>
          <th>Rental Type</th>
          <th>Price <span class="note">(per night)</span></th>
          <th>Beds & Occupancy</th>
        </tr>
        <tr>
          <td>Whole House</td>
          <td>€250</td>
          <td>4 Bedrooms, Sleeps 12</td>
        </tr>
      </table>
    </section>
    <section class="booking-info">
      <p>To book your stay, please contact us via email or phone. We are happy to provide you with a customized quote for long stays.</p>
      <a @click="goToContacts">Contact Us</a>
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
