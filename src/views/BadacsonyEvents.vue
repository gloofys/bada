<template>
  <div class="container">
    <div v-for="event in events" :key="event.title" class="events">
      <h4>{{ event.title }}</h4>
      <p><strong>{{ event.dates }}</strong></p>
      <p>{{ event.description }}</p>
      <p><em>{{ event.location }}</em></p>
    </div>
    <div class = booking-info>
    <a :href="'https://badacsony.com/en/events'" target="_blank">{{ $t('bookingInfo.eventsWebsite') }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BadacsonyEvents',
  data() {
    return {
      events: [
        {
          title: this.$t('events.wineWeek.title'),
          dates: this.$t('events.wineWeek.dates'),
          description: this.$t('events.wineWeek.description'),
          location: this.$t('events.wineWeek.location')
        },
        {
          title: this.$t('events.abrahamhegyWineDays.title'),
          dates: this.$t('events.abrahamhegyWineDays.dates'),
          description: this.$t('events.abrahamhegyWineDays.description'),
          location: this.$t('events.abrahamhegyWineDays.location')
        },
        {
          title: this.$t('events.greybeardFestival.title'),
          dates: this.$t('events.greybeardFestival.dates'),
          description: this.$t('events.greybeardFestival.description'),
          location: this.$t('events.greybeardFestival.location')
        },
        {
          title: this.$t('events.kingStStephenDays.title'),
          dates: this.$t('events.kingStStephenDays.dates'),
          description: this.$t('events.kingStStephenDays.description'),
          location: this.$t('events.kingStStephenDays.location')
        },
        {
          title: this.$t('events.medievalDay.title'),
          dates: this.$t('events.medievalDay.dates'),
          description: this.$t('events.medievalDay.description'),
          location: this.$t('events.medievalDay.location')
        },
        {
          title: this.$t('events.harvestFestival.title'),
          dates: this.$t('events.harvestFestival.dates'),
          description: this.$t('events.harvestFestival.description'),
          location: this.$t('events.harvestFestival.location')
        },
        {
          title: this.$t('events.perchFestival.title'),
          dates: this.$t('events.perchFestival.dates'),
          description: this.$t('events.perchFestival.description'),
          location: this.$t('events.perchFestival.location')
        },
        {
          title: this.$t('events.wineTriathlon.title'),
          dates: this.$t('events.wineTriathlon.dates'),
          description: this.$t('events.wineTriathlon.description'),
          location: this.$t('events.wineTriathlon.location')
        },
        {
          title: this.$t('events.newYearsEveSwim.title'),
          dates: this.$t('events.newYearsEveSwim.dates'),
          description: this.$t('events.newYearsEveSwim.description'),
          location: this.$t('events.newYearsEveSwim.location')
        }
      ]
    }
  },
  methods: {
    redirectToEventsPage() {
      window.location.href = 'https://badacsony.com/en/events';
    }
  }
}
</script>