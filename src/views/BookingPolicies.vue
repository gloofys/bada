<template>
  <div class="container">
    <section class="booking-policies">
      <h3>{{ $t('bookingPolicies.reservationPolicy') }}</h3>
      <ul>
        <li>{{ $t('bookingPolicies.reservationPolicyText1') }}</li>
        <li>{{ $t('bookingPolicies.reservationPolicyText2') }}</li>
        <li>{{ $t('bookingPolicies.reservationPolicyText3') }}</li>
      </ul>

      <h3>{{ $t('bookingPolicies.cancellationPolicy') }}</h3>
      <ul>
        <li>{{ $t('bookingPolicies.cancellationPolicyText1') }}</li>
        <li>{{ $t('bookingPolicies.cancellationPolicyText2') }}</li>
        <li>{{ $t('bookingPolicies.cancellationPolicyText3') }}</li>
      </ul>

      <h3>{{ $t('bookingPolicies.noShowPolicy') }}</h3>
      <ul>
        <li>{{ $t('bookingPolicies.noShowPolicyText') }}</li>
      </ul>
      <h3>{{ $t('bookingPolicies.additionalServices') }}</h3>
      <ul>
        <li>{{ $t('bookingPolicies.additionalServicesText1') }}</li>
        <li>{{ $t('bookingPolicies.additionalServicesText2') }}</li>
        <li>{{ $t('bookingPolicies.additionalServicesText3') }}</li>
      </ul>

      <h3>{{ $t('bookingPolicies.childrenPolicy') }}</h3>
      <ul>
        <li>{{ $t('bookingPolicies.childrenPolicyText1') }}</li>
        <li>{{ $t('bookingPolicies.childrenPolicyText2') }}</li>
      </ul>

      <h3>{{ $t('bookingPolicies.petsPolicy') }}</h3>
      <ul>
        <li>{{ $t('bookingPolicies.petsPolicyText1') }}</li>
        <li>{{ $t('bookingPolicies.petsPolicyText2') }}</li>
      </ul>

      <h3>{{ $t('bookingPolicies.damagePolicy') }}</h3>
      <ul>
        <li>{{ $t('bookingPolicies.damagePolicyText1') }}</li>
        <li>{{ $t('bookingPolicies.damagePolicyText2') }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BookingPolicies',

}
</script>
