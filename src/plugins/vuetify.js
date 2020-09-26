import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import fr from 'vuetify/es5/locale/fr';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#FF0000',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF0000',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        red: '#FF0000',
      },
    },
  },
  lang: {
    locales: { fr },
    current: 'fr',
  },
});
