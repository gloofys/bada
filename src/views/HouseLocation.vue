<template>
  <div class="container-maps">

    <h3>Római út 245, Badacsonytomaj,  Hungary, 8261</h3>

    <!-- Desktop Map -->
    <iframe class="desktop-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.9244452534077!2d17.480548269668784!3d46.790559216405946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476900c0026887a1%3A0x9eb4dfa4c3fffd99!2sBadacsonytomaj%2C%20R%C3%B3mai%20%C3%BAt%20245%2C%208261%20Ungari!5e0!3m2!1set!2sfi!4v1720014732489!5m2!1set!2sfi" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <iframe class="tablet-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2731.6978427513595!2d17.481192!3d46.790558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476900c0026887a1%3A0x9eb4dfa4c3fffd99!2sBadacsonytomaj%2C%20R%C3%B3mai%20%C3%BAt%20245%2C%208261%20Ungari!5e0!3m2!1set!2sfi!4v1720018791256!5m2!1set!2sfi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <!-- Mobile Map -->
    <iframe class="mobile-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.9244452534077!2d17.480548269668784!3d46.790559216405946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476900c0026887a1%3A0x9eb4dfa4c3fffd99!2sBadacsonytomaj%2C%20R%C3%B3mai%20%C3%BAt%20245%2C%208261%20Ungari!5e0!3m2!1set!2sfi!4v1720014732489!5m2!1set!2sfi" width="380" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div class="house-location">
        <ul>
          <li><strong>{{ $t('location_info.closest_airport.strong') }}</strong>{{ $t('location_info.closest_airport.text') }}</li>
          <li><strong>{{ $t('location_info.closest_train_station.strong') }}</strong>{{ $t('location_info.closest_train_station.text') }}</li>
          <li><strong>{{ $t('location_info.distance_budapest.strong') }}</strong>{{ $t('location_info.distance_budapest.text') }}</li>
          <li><strong>{{ $t('location_info.distance_vienna.strong') }}</strong>{{ $t('location_info.distance_vienna.text') }}</li>
          <li><strong>{{ $t('location_info.distance_tallinn.strong') }}</strong>{{ $t('location_info.distance_tallinn.text') }}</li>
        </ul>
      </div>
  </div>
</template>

<script >
export default {
  name: 'HouseLocation',
}
</script>