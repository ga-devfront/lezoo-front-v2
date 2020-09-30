<template>
  <v-container>
    <v-row>
      <v-col
      cols="12"
      xs="12"
      sm="12"
      md="8"
      lg="6"
      xl="4"
      >
        <v-card color="#111111" class="pa-2">
          <v-select
          rounded
          :label="$t('event.filterStyle')"
          dense
          dark
          class="red--text"
          color="red"
          v-model="selectedStyles"
          :items="styles"
          chips
          multiple
          hide-details
          >
          </v-select>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
      class="fullHeight"
      xs="12"
      sm="6"
      md="6"
      lg="4"
      xl="2"
      cols="12"
      v-for="event in displayEvents"
      :key="event.id"
      >
        <EventCard :event="event" :size="'small'"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EventCard from '../components/EventCard.vue';

export default {
  name: 'Agenda',

  components: {
    EventCard,
  },

  data() {
    return {
      events: [
        {
          id: 1,
          start_date: '2020-09-19 23:00:00',
          end_date: '2020-09-20 03:00:00',
          title: 'For violence',
          description: `L’histoire commence dans le bâtiment de l’Usine. Depuis 1985, l’association « Etat d’Urgence » occupe le bâtiment
          de l’Usine de Dégrossissage d’Or situé place des Volontaires sur les bords du Rhône. Après quelques années de batailles politiques
          et médiatiques, la ville octroie le bâtiment de manière légale à l’association. Les associations PTR et Kab occupent le Rez de chaussée
          tandis que le 1er étage est attribué au Moloko et au Débido, un lieu étant à la fois un café, une brasserie populaire et un lieu de fête. `,
          styles: ['Hardcore', 'Dubstep'],
          artists: ['Skrillex', 'dr peacock', 'pom-pom'],
          price: '10.- avant 00h / 14.- le reste du temps',
        },
        {
          id: 2,
          start_date: '2020-09-20 22:00:00',
          end_date: '2020-09-21 05:00:00',
          title: 'Groovadelic',
          description: `L’histoire commence dans le bâtiment de l’Usine. Depuis 1985, l’association « Etat d’Urgence » occupe le bâtiment
          de l’Usine de Dégrossissage d’Or situé place des Volontaires sur les bords du Rhône. Après quelques années de batailles politiques
          et médiatiques, la ville octroie le bâtiment de manière légale à l’association. Les associations PTR et Kab occupent le Rez de chaussée
          tandis que le 1er étage est attribué au Moloko et au Débido, un lieu étant à la fois un café, une brasserie populaire et un lieu de fête. `,
          styles: ['Goa', 'Dub'],
          artists: ['Xmongo', 'Michael', 'Jesus'],
          price: '16.- all night',
        },
        {
          id: 3,
          start_date: '2020-09-27 22:00:00',
          end_date: '2020-09-28 04:00:00',
          title: 'Stump',
          description: `L’histoire commence dans le bâtiment de l’Usine. Depuis 1985, l’association « Etat d’Urgence » occupe le bâtiment
          de l’Usine de Dégrossissage d’Or situé place des Volontaires sur les bords du Rhône. Après quelques années de batailles politiques
          et médiatiques, la ville octroie le bâtiment de manière légale à l’association. Les associations PTR et Kab occupent le Rez de chaussée
          tandis que le 1er étage est attribué au Moloko et au Débido, un lieu étant à la fois un café, une brasserie populaire et un lieu de fête. `,
          styles: ['Chill', 'Experimental', 'Yolo'],
          artists: ['Zazi', 'Mongo', 'Yousen', 'DJx'],
          price: '10.- preloc, 10.- avant 23h / 14.- le reste du temps',
        },
        {
          id: 4,
          start_date: '2020-09-28 23:00:00',
          end_date: '2020-09-29 03:00:00',
          title: 'Residents',
          description: `L’histoire commence dans le bâtiment de l’Usine. Depuis 1985, l’association « Etat d’Urgence » occupe le bâtiment
          de l’Usine de Dégrossissage d’Or situé place des Volontaires sur les bords du Rhône. Après quelques années de batailles politiques
          et médiatiques, la ville octroie le bâtiment de manière légale à l’association. Les associations PTR et Kab occupent le Rez de chaussée
          tandis que le 1er étage est attribué au Moloko et au Débido, un lieu étant à la fois un café, une brasserie populaire et un lieu de fête. `,
          styles: ['All style'],
          artists: ['chat-jambon', 'tirebouch', 'pom-pom', 'medium'],
          price: 'libre',
        },
        {
          id: 5,
          start_date: '2020-10-05 22:00:00',
          end_date: '2020-10-06 04:00:00',
          title: 'Projet Y',
          description: `L’histoire commence dans le bâtiment de l’Usine. Depuis 1985, l’association « Etat d’Urgence » occupe le bâtiment
          de l’Usine de Dégrossissage d’Or situé place des Volontaires sur les bords du Rhône. Après quelques années de batailles politiques
          et médiatiques, la ville octroie le bâtiment de manière légale à l’association. Les associations PTR et Kab occupent le Rez de chaussée
          tandis que le 1er étage est attribué au Moloko et au Débido, un lieu étant à la fois un café, une brasserie populaire et un lieu de fête. `,
          styles: ['Hardcore', 'Dub'],
          artists: ['Infected Mushrooms', 'JP-5'],
          price: '10.- avant 00h / 14.- le reste du temps',
        },
        {
          id: 6,
          start_date: '2020-10-06 23:00:00',
          end_date: '2020-10-07 06:00:00',
          title: 'Pony',
          description: `L’histoire commence dans le bâtiment de l’Usine. Depuis 1985, l’association « Etat d’Urgence » occupe le bâtiment
          de l’Usine de Dégrossissage d’Or situé place des Volontaires sur les bords du Rhône. Après quelques années de batailles politiques
          et médiatiques, la ville octroie le bâtiment de manière légale à l’association. Les associations PTR et Kab occupent le Rez de chaussée
          tandis que le 1er étage est attribué au Moloko et au Débido, un lieu étant à la fois un café, une brasserie populaire et un lieu de fête. `,
          styles: ['Chill', 'Dubstep'],
          artists: ['Zaya', 'Jimy Ndrix', 'HyperLoop'],
          price: '10.- avant 00h / 14.- le reste du temps',
        },
        {
          id: 7,
          start_date: '2020-10-12 23:00:00',
          end_date: '2020-10-13 03:00:00',
          title: 'UltraTrick',
          description: `L’histoire commence dans le bâtiment de l’Usine. Depuis 1985, l’association « Etat d’Urgence » occupe le bâtiment
          de l’Usine de Dégrossissage d’Or situé place des Volontaires sur les bords du Rhône. Après quelques années de batailles politiques
          et médiatiques, la ville octroie le bâtiment de manière légale à l’association. Les associations PTR et Kab occupent le Rez de chaussée
          tandis que le 1er étage est attribué au Moloko et au Débido, un lieu étant à la fois un café, une brasserie populaire et un lieu de fête. `,
          styles: ['Hardcore', 'Goa'],
          artists: ['Hungerfist', 'Momo', 'Bb-brun'],
          price: '10.- avant 00h / 14.- le reste du temps',
        },
        {
          id: 8,
          start_date: '2020-10-13 22:00:00',
          end_date: '2020-10-14 04:00:00',
          title: 'Monsters',
          description: `L’histoire commence dans le bâtiment de l’Usine. Depuis 1985, l’association « Etat d’Urgence » occupe le bâtiment
          de l’Usine de Dégrossissage d’Or situé place des Volontaires sur les bords du Rhône. Après quelques années de batailles politiques
          et médiatiques, la ville octroie le bâtiment de manière légale à l’association. Les associations PTR et Kab occupent le Rez de chaussée
          tandis que le 1er étage est attribué au Moloko et au Débido, un lieu étant à la fois un café, une brasserie populaire et un lieu de fête. `,
          styles: ['Experimental', 'Dubstep'],
          artists: ['Z.Init', 'X05ss', 'Master Pump'],
          price: '10.- avant 00h / 14.- le reste du temps',
        },
      ],
      styles: [
        'Hardcore',
        'Dubstep',
        'Goa',
        'Dub',
        'Chill',
        'Experimental',
        'Yolo',
        'All style',
      ],
      selectedStyles: [],
    };
  },

  computed: {
    displayEvents() {
      if (this.selectedStyles.length > 0) {
        // eslint-disable-next-line
        const eventFiltered = this.events.filter((event) => { 
          let stylesFiltered = 0;
          event.styles.forEach((style) => {
            if (this.selectedStyles.indexOf(style) > -1) {
              stylesFiltered += 1;
            }
          });
          if (stylesFiltered > 0) {
            return true;
          }
        });
        return eventFiltered;
      }
      return this.events;
    },
  },

  methods: {
  },

};
</script>

<style lang="scss" scoped>
</style>
