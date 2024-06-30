<template>
  <div>
    <table>
      <caption>Room Pricing Table</caption>
      <tr>
        <th>Room Type</th>
        <th>Price (In-Season)</th>
        <th>Price (Off-Season)</th>
        <th>Beds & Occupancy</th>
      </tr>
      <tr>
        <td>Standard Room</td>
        <td>$200</td>
        <td>$140</td>
        <td>1 Queen Bed, Sleeps 2</td>
      </tr>
      <tr>
        <td>Deluxe Room</td>
        <td>$250</td>
        <td>$180</td>
        <td>1 King Bed, Sleeps 2</td>
      </tr>
      <tr>
        <td>Suite</td>
        <td>$300</td>
        <td>$220</td>
        <td>1 King Bed, 1 Sofa Bed, Sleeps 4</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Pricing'
}
document.querySelectorAll('.plan-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.plan-tab').forEach(t => t.classList.remove('selected'));
    tab.classList.add('selected');
  });
});
</script>

<style scoped>

</style>