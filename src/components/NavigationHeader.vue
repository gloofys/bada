<template>
  <header class="navigation-header">
    <nav>
      <ul>
        <li><router-link to="/">{{ $t('home.home') }}</router-link></li>
        <li class="dropdown">
          <router-link to="/housing">{{ $t('housing.housing') }}</router-link>
          <ul class="dropdown-content">
            <li><router-link to="/housing/rooms">{{ $t('housing.rooms') }}</router-link></li>
            <li><router-link to="/housing/pricing">{{ $t('housing.pricing') }}</router-link></li>
            <li><router-link to="/housing/extra-services">{{ $t('housing.extra_services') }}</router-link></li>
            <li><router-link to="/housing/booking-policies">{{ $t('housing.booking_policies') }}</router-link></li>
          </ul>
        </li>
        <li><router-link to="/location">{{ $t('location') }}</router-link></li>
        <li><router-link to="/wineRegion">{{ $t('wineRegion') }}</router-link></li>
        <li><router-link to="/activities">{{ $t('activities') }}</router-link></li>
        <li><router-link to="/gallery">{{ $t('gallery') }}</router-link></li>
        <li><router-link to="/contact">{{ $t('contact') }}</router-link></li>
      </ul>
    </nav>
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
  name: 'NavigationHeader',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
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
</style>
