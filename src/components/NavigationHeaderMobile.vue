<template>
  <header class="navigation-header-mobile">
    <div class="menu-icon-container">
      <div class="box-menu-icon" @click="toggleDropdown">
        <div class="menu-icon"></div>
        <div class="menu-icon"></div>
        <div class="menu-icon"></div>
      </div>
    </div>
    <div class="logo-container" @click="closeDropdown">
      <router-link to="/">
        <img src="/LOGO.png" alt="logo" class="logo-image" />
      </router-link>
    </div>
    <ul v-if="showDropdown" class="dropdown-content">
      <li @click="closeDropdown">
        <router-link to="/">{{ $t('home.home') }}</router-link>
      </li>
      <li>
        <details>
          <summary>{{ $t('housing.housing') }}</summary>
          <ul class="dropdown-subcontent">
            <li @click="closeDropdown">
              <router-link to="/housing/layout">{{ $t('housing.layout') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/housing/rooms">{{ $t('housing.rooms') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/housing/pricing">{{ $t('housing.pricing') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/housing/extra-services">{{ $t('housing.extra_services') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/housing/booking-policies">{{ $t('housing.booking_policies') }}</router-link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>{{ $t('wineRegion.wine_region') }}</summary>
          <ul class="dropdown-subcontent">
            <li @click="closeDropdown">
              <router-link to="/wineRegion/biggest-wine-producers">{{ $t('wineRegion.biggest_wine_producers') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/wineRegion/small-wine-producers">{{ $t('wineRegion.small_wine_producers') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/wineRegion/our-favourites">{{ $t('wineRegion.our_favourites') }}</router-link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>{{ $t('location.location') }}</summary>
          <ul class="dropdown-subcontent">
            <li @click="closeDropdown">
              <router-link to="/location/house-location">{{ $t('location.house_location') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/location/how-to-get-here">{{ $t('location.how_to_get_here') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/location/tallinn-badacsony">{{ $t('location.tallinn_badacsony') }}</router-link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>{{ $t('activities.activities') }}</summary>
          <ul class="dropdown-subcontent">
            <li @click="closeDropdown">
              <router-link to="/activities/hiking">{{ $t('activities.hiking') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/activities/cycling">{{ $t('activities.cycling') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/activities/lakeBalaton">{{ $t('activities.lakeBalaton') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/activities/nearby-cities">{{ $t('activities.nearby_cities') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/activities/LakeHeviz">{{ $t('activities.lakeHévíz') }}</router-link>
            </li>
            <li @click="closeDropdown">
              <router-link to="/activities/badacsonyEvents">{{ $t('activities.badacsonyEvents') }}</router-link>
            </li>
          </ul>
        </details>
      </li>
      <li @click="closeDropdown">
        <router-link to="/gallery">{{ $t('gallery') }}</router-link>
      </li>
      <li @click="closeDropdown">
        <router-link to="/contact">{{ $t('contact') }}</router-link>
      </li>
      <li @click="changeLanguage('en')">🇬🇧 English</li>
      <li @click="changeLanguage('et')">🇪🇪 Eesti</li>
    </ul>
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


</style>
