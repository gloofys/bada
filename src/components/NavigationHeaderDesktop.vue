<template>
  <header class="navigation-header">
    <div class="logo-container">
      <router-link to="/">
        <img src="/LOGO.png" alt="logo" class="logo-image" />
      </router-link>
    </div>
    <div class="nav-container">
      <nav>
        <ul>
          <li>
            <router-link to="/">{{ $t('home.home') }}</router-link>
          </li>
          <li class="dropdown">
            <span>{{ $t('housing.housing') }}</span>
            <ul class="dropdown-content">
              <li>
                <router-link to="/housing/layout">{{ $t('housing.layout') }}</router-link>
              </li>
              <li>
                <router-link to="/housing/rooms">{{ $t('housing.rooms') }}</router-link>
              </li>
              <li>
                <router-link to="/housing/pricing">{{ $t('housing.pricing') }}</router-link>
              </li>
              <li>
                <router-link to="/housing/extra-services">{{ $t('housing.extra_services') }}</router-link>
              </li>
              <li>
                <router-link to="/housing/booking-policies">{{ $t('housing.booking_policies') }}</router-link>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <span>{{ $t('wineRegion.wine_region') }}</span>
            <ul class="dropdown-content">
              <li>
                <router-link to="/wineRegion/biggest-wine-producers">{{ $t('wineRegion.biggest_wine_producers') }}</router-link>
              </li>
<!--              <li>-->
<!--                <router-link to="/wineRegion/small-wine-producers">{{ $t('wineRegion.small_wine_producers') }}</router-link>-->
<!--              </li>-->
              <li>
                <router-link to="/wineRegion/our-favourites">{{ $t('wineRegion.our_favourites') }}</router-link>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <span>{{ $t('location.location') }}</span>
            <ul class="dropdown-content">
              <li>
                <router-link to="/location/house-location">{{ $t('location.house_location') }}</router-link>
              </li>
              <li>
                <router-link to="/location/how-to-get-here">{{ $t('location.how_to_get_here') }}</router-link>
              </li>
              <li>
                <router-link to="/location/tallinn-badacsony">{{ $t('location.tallinn_badacsony') }}</router-link>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <span>{{ $t('activities.activities') }}</span>
            <ul class="dropdown-content">
              <li>
                <router-link to="/activities/hiking">{{ $t('activities.hiking') }}</router-link>
              </li>
              <li>
                <router-link to="/activities/cycling">{{ $t('activities.cycling') }}</router-link>
              </li>
              <li>
                <router-link to="/activities/lakeBalaton">{{ $t('activities.lakeBalaton') }}</router-link>
              </li>
              <li>
                <router-link to="/activities/nearby-cities">{{ $t('activities.nearby_cities') }}</router-link>
              </li>
              <li>
                <router-link to="/activities/LakeHeviz">{{ $t('activities.lakeHévíz') }}</router-link>
              </li>
              <li>
                <router-link to="/activities/badacsonyEvents">{{ $t('activities.badacsonyEvents') }}</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/gallery">{{ $t('gallery') }}</router-link>
          </li>
          <li>
            <router-link to="/contact">{{ $t('contact') }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="language-selector-container">
      <div class="language-selector">
        <img @click="changeLanguage('en')" src="/gb.png" alt="English" width="48" height="32">
        <img @click="changeLanguage('et')" src="/ee.png" alt="Estonian" width="48" height="32">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavigationHeaderDesktop',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  },
  mounted() {
    // Select all dropdown contents
    const dropdowns = document.querySelectorAll('.dropdown-content');

    dropdowns.forEach(dropdownContent => {
      // Select the first list item within each dropdown
      const firstItem = dropdownContent.querySelector('li:first-child');

      if (firstItem && dropdownContent) {
        // Add event listener for when the user hovers over the first item
        firstItem.addEventListener('mouseenter', () => {
          dropdownContent.style.setProperty('--arrow-bg-color', '#daddda'); // Change arrow background color
        });

        // Add event listener for when the user moves the mouse away from the first item
        firstItem.addEventListener('mouseleave', () => {
          dropdownContent.style.setProperty('--arrow-bg-color', '#f9f9f9'); // Reset arrow background color
        });
      }
    });
  }
}
</script>

