<template>
  <v-card
  :class="'mx-auto ' + size"
  outlined
  color="red">
    <v-card-title class="d-inline-block">
      {{event.title}} - {{getArtists}}
    </v-card-title>
    <v-card-subtitle class="subTitle">
    {{getStyles}}
    </v-card-subtitle>
    <v-row no-gutters align="center" justify="center">
      <v-col cols="auto">
      <v-card-text>
        <div class="date">
          <span class="day">
            {{dateDay}}
          </span>
          <span class="month">
            {{dateMonth}}
          </span>
          <span class="hour">
          {{dateHourStart}} - {{dateHourEnd}}
          </span>
        </div>
      </v-card-text>
      </v-col>
      <v-col>
      <v-card-text v-if="size === 'large'">
        <span v-if="isMobile">
        {{event.description.substring(0, 205)}} ...
        </span>
        <span v-else>
        {{event.description}}
        </span>
      </v-card-text>
      <v-card-text>
        <span class="font-weight-bold">{{$t('event.price')}}: {{event.price}}</span>
      </v-card-text>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
      color="#111111"
      class="red--text"
      :to="`/event/${event.id}`">
        {{$t('button.moreInfos')}}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'EventCard',

  props: {
    event: {
      type: Object,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
    };
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    dateHourStart() {
      const splitDateTime = this.event.start_date.split(' ');
      const splitDate = splitDateTime[1].split(':');
      const getHourStart = `${splitDate[0]}h`;
      return getHourStart;
    },

    dateHourEnd() {
      const splitDateTime = this.event.end_date.split(' ');
      const splitDate = splitDateTime[1].split(':');
      const getHourEnd = `${splitDate[0]}h`;
      return getHourEnd;
    },

    dateDay() {
      const splitDateTime = this.event.start_date.split(' ');
      const splitDate = splitDateTime[0].split('-');
      const getDay = splitDate[2];
      return getDay;
    },

    dateMonth() {
      const splitDateTime = this.event.start_date.split(' ');
      const splitDate = splitDateTime[0].split('-');
      const getMonth = splitDate[1];
      let month = '';
      switch (getMonth) {
        case '01':
          month = this.$t('date.january.short');
          break;
        case '02':
          month = this.$t('date.february.short');
          break;
        case '03':
          month = this.$t('date.march.short');
          break;
        case '04':
          month = this.$t('date.april.short');
          break;
        case '05':
          month = this.$t('date.may.short');
          break;
        case '06':
          month = this.$t('date.june.short');
          break;
        case '07':
          month = this.$t('date.july.short');
          break;
        case '08':
          month = this.$t('date.august.short');
          break;
        case '09':
          month = this.$t('date.september.short');
          break;
        case '10':
          month = this.$t('date.october.short');
          break;
        case '11':
          month = this.$t('date.november.short');
          break;
        case '12':
          month = this.$t('date.december.short');
          break;
        default:
          month = 'error';
      }
      return month;
    },

    getStyles() {
      let stylesText = '';
      for (let i = 0; i < this.event.styles.length; i += 1) {
        if (i === this.event.styles.length - 1) {
          stylesText += this.event.styles[i];
        } else {
          stylesText += `${this.event.styles[i]} / `;
        }
      }
      return stylesText;
    },

    getArtists() {
      let artistsText = '';
      for (let i = 0; i < this.event.artists.length; i += 1) {
        if (i === this.event.artists.length - 1) {
          artistsText += this.event.artists[i];
        } else {
          artistsText += `${this.event.artists[i]} / `;
        }
      }
      return artistsText;
    },
  },
};
</script>

<style lang="scss">
.date {
  display: flex;
  flex-direction: column;
  font-family: 'GT-America-expanded-rg', 'Arial';
  letter-spacing: .2em;
  text-transform: uppercase;
  text-align: center;
  .day {
    font-size: 3.2em;
    margin-bottom: .3em;
  }
  .month {
    font-size: 2em;
  }
  .hour {
    font-size: .8em;
    font-weight: bold;
    letter-spacing: 0;
  }
}

.subTitle {
  font-family: 'GT-America-expanded-md'!important;
}

.v-application .overline.style {
  font-family: 'GT-America-md'!important;
  padding: 0px 16px;
}
</style>
