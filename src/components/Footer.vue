<template>
  <v-footer
  absolute
  app
  dark
  padless
  color="#111111">
      <v-card-text class="red--text" align="center">
        <v-btn
          v-for="icon in contacts"
          :key="icon.mdi"
          :href="icon.url"
          class="mx-4"
          color="red"
          icon
          link
        >
          <v-icon size="24px">{{ icon.mdi }}</v-icon>
        </v-btn>
        <svg id="signature-zoo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2722.51 953.13">
          <!-- eslint-disable-next-line -->
          <polygon points="2696.6 523.9 7.21 523.9 129.49 25.93 308.63 917.23 436.51 305.5 575.05 738.55 725 164.01 840.81 812.63 936.22 311.81 1059.99 707.51 1180.33 289.56 1333.5 812.63 1436.11 122.19 1562.32 716.52 1694.99 333.6 1860.74 674.93 1983.57 184.94 2081.2 918.22 2201.34 302.1 2337.63 733.53 2416.69 395.7 2696.6 523.9"
          fill="none"
          stroke="#FF0000"
          stroke-miterlimit="8"
          stroke-width="31.3"/>
        </svg>
      </v-card-text>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',

  data() {
    return {
      contacts: [
        {
          mdi: 'mdi-facebook',
          url: 'https://www.facebook.com/search/top?q=le%20zoo%20%2F%20usine%20(officiel)',
        },
        {
          mdi: 'mdi-instagram',
          url: 'https://www.instagram.com/lezoo_usine/',
        },
        {
          mdi: 'mdi-email',
          url: 'mailto: info@lezoo.ch',
        },
        {
          mdi: 'mdi-phone',
          url: 'tel: +41223216749',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#signature-zoo {
  max-height: 30px;
  margin-bottom: -10px;
  fill: #FF0000;
}
</style>
