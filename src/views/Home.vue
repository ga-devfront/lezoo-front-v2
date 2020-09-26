<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="12" md="10" lg="8" xl="8" cols="12">
        <EventCard :event="event" :size="'large'"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventCard from '../components/EventCard.vue';

export default {
  name: 'Home',

  components: {
    EventCard,
  },

  data() {
    return {
      event: {
        id: 1,
        start_date: '2020-09-19 23:00:00',
        end_date: '2020-09-20 03:00:00',
        title: 'For violence',
        description: `L’histoire commence dans le bâtiment de l’Usine. Depuis 1985, l’association « Etat d’Urgence » occupe le bâtiment
        de l’Usine de Dégrossissage d’Or situé place des Volontaires sur les bords du Rhône. Après quelques années de batailles politiques
        et médiatiques, la ville octroie le bâtiment de manière légale à l’association. Les associations PTR et Kab occupent le Rez de chaussée
        tandis que le 1er étage est attribué au Moloko et au Débido, un lieu étant à la fois un café, une brasserie populaire et un lieu de fête. `,
        styles: ['hardcore', 'dubstep'],
        artists: ['Skrillex', 'dr peacock', 'pom-pom'],
        price: '10.- avant 00h / 14.- le reste du temps',
      },
    };
  },

  computed: {
  },
};
</script>

<style lang="scss">
section {
  background: none;
}
</style>
