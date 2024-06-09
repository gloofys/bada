<template>
  <header class="navigation-header-mobile">
    <button @click="toggleDropdown" class="dropdown-button">
      Menu
    </button>
    <ul v-if="showDropdown" class="dropdown-content">
      <li @click="closeDropdown"><router-link to="/">{{ $t('home.home') }}</router-link></li>
      <li>
        <details>
          <summary>{{ $t('housing.housing') }}</summary>
          <ul class="dropdown-subcontent">
            <li @click="closeDropdown"><router-link to="/housing/rooms">{{ $t('housing.rooms') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/housing/pricing">{{ $t('housing.pricing') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/housing/extra-services">{{ $t('housing.extra_services') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/housing/booking-policies">{{ $t('housing.booking_policies') }}</router-link></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>{{ $t('wineRegion.wine_region') }}</summary>
          <ul class="dropdown-subcontent">
            <li @click="closeDropdown"><router-link to="/wineRegion/biggest-wine-producers">{{ $t('wineRegion.biggest_wine_producers') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/wineRegion/small-wine-producers">{{ $t('wineRegion.small_wine_producers') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/wineRegion/our-favourites">{{ $t('wineRegion.our_favourites') }}</router-link></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>{{ $t('location.location') }}</summary>
          <ul class="dropdown-subcontent">
            <li @click="closeDropdown"><router-link to="/location/how-to-get-here">{{ $t('location.how_to_get_here') }}</router-link></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>{{ $t('activities.activities') }}</summary>
          <ul class="dropdown-subcontent">
            <li @click="closeDropdown"><router-link to="/activities/hiking">{{ $t('activities.hiking') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/activities/cycling">{{ $t('activities.cycling') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/activities/lakeBalaton">{{ $t('activities.lakeBalaton') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/activities/beaches">{{ $t('activities.beaches') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/activities/nearby-cities">{{ $t('activities.nearby_cities') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/activities/spa">{{ $t('activities.spa') }}</router-link></li>
            <li @click="closeDropdown"><router-link to="/activities/badacsonyEvents">{{ $t('activities.badacsonyEvents') }}</router-link></li>
          </ul>
        </details>
      </li>
      <li @click="closeDropdown"><router-link to="/gallery">{{ $t('gallery') }}</router-link></li>
      <li @click="closeDropdown"><router-link to="/contact">{{ $t('contact') }}</router-link></li>
    </ul>
    <div class="navigation-content">
      <div>
        <button @click="changeLanguage('en')">English</button>
        <button @click="changeLanguage('et')">Eesti</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavigationHeaderMobile',
  data() {
    return {
      showDropdown: false
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    closeDropdown() {
      this.showDropdown = false;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style scoped>
.navigation-header-mobile {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.dropdown-content {
  display: block;
  background-color: #f9f9f9;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 100%;
}

.dropdown-content li {
  padding: 12px 16px;
  list-style: none;
}

.dropdown-content li a {
  text-decoration: none;
  color: #333;
}

.dropdown-subcontent {
  display: none;
  padding-left: 1rem;
}

details[open] > .dropdown-subcontent {
  display: block;
}

details summary {
  cursor: pointer;
}

.navigation-content {
  margin-top: 1rem;
}
</style>
