<template>
  <header class="navigation-header">
    <nav>
      <ul>
        <li><router-link to="/">{{ $t('home') }}</router-link></li>
        <li><router-link to="/housing">{{ $t('housing') }}</router-link></li>
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

.logo img {
  height: 40px;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin-left: 1rem;
}

router-link {
  text-decoration: none;
  color: #333;
}
</style>