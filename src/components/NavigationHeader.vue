<template>
  <header class="navigation-header">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/housing">Housing</router-link></li>
        <li><router-link to="/contact">Location</router-link></li>
        <li><router-link to="/wineRegion">Wine region</router-link></li>
        <li><router-link to="/activities">Activities</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavigationHeader'
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