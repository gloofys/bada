<template>
  <div class="container">
    <div class="room-container">
      <div class="room-content">
        <h2>{{ $t('rooms.downstairs_living_room.title') }}</h2>
        <p><strong>{{ $t('rooms.downstairs_living_room.room_size') }}</strong></p>
        <ul>
          <li>{{ $t('rooms.downstairs_living_room.features.wifi') }}</li>
          <li>{{ $t('rooms.downstairs_living_room.features.safe') }}</li>
        </ul>
        <p><strong>{{ $t('rooms.downstairs_living_room.room_fits') }}</strong></p>
      </div>
      <div class="room-image">
        <img src="/room_images/1st_floor/1st_living_room.jpg" alt="{{ $t('rooms.downstairs_living_room.image_alt') }}">
      </div>
    </div>

    <div class="room-container reverse-layout">
      <div class="room-content">
        <h2>{{ $t('rooms.second_floor_ne_bedroom.title') }}</h2>
        <p><strong>{{ $t('rooms.second_floor_ne_bedroom.room_size') }}</strong></p>
        <ul>
          <li>{{ $t('rooms.second_floor_ne_bedroom.features.wifi') }}</li>
          <li>{{ $t('rooms.second_floor_ne_bedroom.features.safe') }}</li>
        </ul>
        <p><strong>{{ $t('rooms.second_floor_ne_bedroom.room_fits') }}</strong></p>
      </div>
      <div class="room-image">
        <img src="/room_images/2nd_floor/2nd_bedroom_NE.jpg" alt="{{ $t('rooms.second_floor_ne_bedroom.image_alt') }}">
      </div>
    </div>

    <div class="room-container">
      <div class="room-content">
        <h2>{{ $t('rooms.second_floor_sw_bedroom.title') }}</h2>
        <p><strong>{{ $t('rooms.second_floor_sw_bedroom.room_size') }}</strong></p>
        <ul>
          <li>{{ $t('rooms.second_floor_sw_bedroom.features.wifi') }}</li>
          <li>{{ $t('rooms.second_floor_sw_bedroom.features.safe') }}</li>
        </ul>
        <p><strong>{{ $t('rooms.second_floor_sw_bedroom.room_fits') }}</strong></p>
      </div>
      <div class="room-image">
        <img src="/room_images/2nd_floor/2nd_bedroom_SW.jpg" alt="{{ $t('rooms.second_floor_sw_bedroom.image_alt') }}">
      </div>
    </div>

    <div class="room-container reverse-layout">
      <div class="room-content">
        <h2>{{ $t('rooms.second_floor_bedroom_balcony.title') }}</h2>
        <p><strong>{{ $t('rooms.second_floor_bedroom_balcony.room_size') }}</strong></p>
        <ul>
          <li>{{ $t('rooms.second_floor_bedroom_balcony.features.wifi') }}</li>
          <li>{{ $t('rooms.second_floor_bedroom_balcony.features.safe') }}</li>
        </ul>
        <p><strong>{{ $t('rooms.second_floor_bedroom_balcony.room_fits') }}</strong></p>
      </div>
      <div class="room-image">
        <img src="/room_images/2nd_floor/balcony_bedroom.jpg" alt="{{ $t('rooms.second_floor_bedroom_balcony.image_alt') }}">
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: 'Rooms'
}
</script>

<style scoped>

</style>