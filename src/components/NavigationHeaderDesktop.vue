<template>
  <header class="navigation-header">
    <nav>
      <ul>
        <li><router-link to="/">{{ $t('home.home') }}</router-link></li>
        <li class="dropdown">
          <span>{{ $t('housing.housing') }}</span>
          <ul class="dropdown-content">
            <li><router-link to="/housing/rooms">{{ $t('housing.rooms') }}</router-link></li>
            <li><router-link to="/housing/pricing">{{ $t('housing.pricing') }}</router-link></li>
            <li><router-link to="/housing/extra-services">{{ $t('housing.extra_services') }}</router-link></li>
            <li><router-link to="/housing/booking-policies">{{ $t('housing.booking_policies') }}</router-link></li>
          </ul>
        </li>
        <li class="dropdown">
          <span>{{ $t('wineRegion.wine_region') }}</span>
          <ul class="dropdown-content">
            <li><router-link to="/wineRegion/biggest-wine-producers">{{ $t('wineRegion.biggest_wine_producers') }}</router-link></li>
            <li><router-link to="/wineRegion/small-wine-producers">{{ $t('wineRegion.small_wine_producers') }}</router-link></li>
            <li><router-link to="/wineRegion/our-favourites">{{ $t('wineRegion.our_favourites') }}</router-link></li>
          </ul>
        </li>
        <li class="dropdown">
          <span>{{ $t('location.location') }}</span>
          <ul class="dropdown-content">
            <li><router-link to="/location/how-to-get-here">{{ $t('location.how_to_get_here') }}</router-link></li>
          </ul>
        </li>
        <li class="dropdown">
          <span>{{ $t('activities.activities') }}</span>
          <ul class="dropdown-content">
            <li><router-link to="/activities/hiking">{{ $t('activities.hiking') }}</router-link></li>
            <li><router-link to="/activities/cycling">{{ $t('activities.cycling') }}</router-link></li>
            <li><router-link to="/activities/lakeBalaton">{{ $t('activities.lakeBalaton') }}</router-link></li>
            <li><router-link to="/activities/beaches">{{ $t('activities.beaches') }}</router-link></li>
            <li><router-link to="/activities/nearby-cities">{{ $t('activities.nearby_cities') }}</router-link></li>
            <li><router-link to="/activities/spa">{{ $t('activities.spa') }}</router-link></li>
            <li><router-link to="/activities/badacsonyEvents">{{ $t('activities.badacsonyEvents') }}</router-link></li>
          </ul>
        </li>
        <li><router-link to="/gallery">{{ $t('gallery') }}</router-link></li>
        <li><router-link to="/contact">{{ $t('contact') }}</router-link></li>
      </ul>
    </nav>
    <div class="navigation-content">
      <div class="language-selector">
        <select @change="changeLanguage($event.target.value)">
          <option value="en">🇬🇧 English</option>
          <option value="et">🇪🇪 Eesti</option>
        </select>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavigationHeader',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style scoped>
.navigation-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin-left: 1rem;
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content li {
  padding: 12px 16px;
}

.dropdown-content li a {
  text-decoration: none;
  color: #333;
}

.dropdown-content li:hover {
  background-color: #f1f1f1;
}
.language-selector select {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
