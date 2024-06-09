


<template>
  <div>
    <!-- Show the map only if there is no child route active -->
    <div v-if="$route.name === 'Location'">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4594.365068526676!2d17.498081720005917!3d46.7880365522296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurant!5e0!3m2!1set!2see!4v1717876468656!5m2!1set!2see" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- Child routes will be rendered here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Location'
}
</script>


<style scoped>

</style>