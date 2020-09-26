<template>
  <v-app>
    <Header />
    <v-layout align-center>
    <v-main fill-height fluid>
      <router-view></router-view>
      <div id="customBackground"></div>
    </v-main>
    </v-layout>
    <Footer />
  </v-app>
</template>

<script>
/* eslint-disable max-len */
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data() {
    return {
    };
  },

  mounted() {
    this.vantaEffect = NET({
      el: '#customBackground',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.00,
      scaleMobile: 1.00,
      points: 20.00,
      maxDistance: 27.00,
      spacing: 18.00,
      color: 0xff0000,
      color2: 0xff0000,
      size: 2.00,
      backgroundColor: 0x111111,
      THREE,
    // ...
    });
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "GT-America-rg";
  src: url('../public/fonts/GT-America-Standard-Regular.woff2') format('woff2');
}
@font-face {
  font-family: "GT-America-md";
  src: url('../public/fonts/GT-America-Standard-Medium.woff2') format('woff2');
}
@font-face {
  font-family: "GT-America-expanded-rg";
  src: url('../public/fonts/GT-America-Expanded-Regular.woff2') format('woff2');
}
@font-face {
  font-family: "GT-America-expanded-md";
  src: url('../public/fonts/GT-America-Expanded-Medium.woff2') format('woff2');
}

body {
  min-width: 100%;
  min-height: 100%;
}

html {
  min-width: 100%;
  min-height: 100%;
}

.v-application {
  font-family: 'GT-America-rg', 'Roboto'!important;
}

#customBackground {
  position: fixed!important;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.theme--light.v-application {
  background: none!important;
}

.v-card__title {
  font-family: 'GT-America-expanded-md';
  font-size: 2em!important;
  word-break: normal!important;
}

.v-card__text {
  font-size: 1.1em!important;
  color: #111111!important;
  word-break: normal!important;
}

.theme--dark.v-select .v-select__selection--comma, .theme--light.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selection--comma {
  color: #FF0000!important;
}

.theme--dark.v-icon {
  color: #FF0000!important;
}
</style>
