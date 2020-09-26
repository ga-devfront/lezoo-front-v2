<template>
  <div>
    <v-app-bar
    :hide-on-scroll="isMobile"
    app
    color="#111111"
    dark
    flat
    class="nav"
    >
      <v-btn
      x-large
      text
      color="#111111"
      to="/">
        <v-img src="../assets/logo.png" contain max-width="120"></v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
      x-large
      color="red"
      v-if="isMobile"
      @click="drawer = !drawer">
      </v-app-bar-nav-icon>
        <v-list-item v-if="!isMobile">
        <v-btn
        v-for="item in menu"
        v-bind:key="item.url"
        text
        x-large
        color="red"
        :to="item.url">
          {{$t(item.traduction)}}
        </v-btn>
        </v-list-item>
        <v-spacer v-if="!isMobile"></v-spacer>
      <v-col cols="2">
        <SelectLocale v-if="!isMobile"/>
      </v-col>
    </v-app-bar>
    <v-navigation-drawer
    v-if="isMobile"
    v-model="drawer"
    fixed
    color="#111111"
    temporary
    dark
    class="nav"
    >
      <v-list
      nav
      dense
      >
        <v-list-item-group
          active-class="red--text"
        >
          <v-list-item
          v-for="item in menu"
          :key="item.url"
          :to="item.url">
            <v-list-item-title class="red--text">
              {{$t(item.traduction)}}
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <SelectLocale/>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SelectLocale from './SelectLocale.vue';

export default {
  name: 'Header',

  components: {
    SelectLocale,
  },

  data() {
    return {
      toggle_exclusive: undefined,
      drawer: false,
      menu: [
        {
          url: '/agenda',
          traduction: 'menu.agenda',
        },
        {
          url: '/podcast',
          traduction: 'menu.podcast',
        },
        {
          url: '/ticket',
          traduction: 'menu.ticket',
        },
        {
          url: '/gallery',
          traduction: 'menu.gallery',
        },
        {
          url: '/about',
          traduction: 'menu.about',
        },
        {
          url: '/access',
          traduction: 'menu.access',
        },
      ],
    };
  },

  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
  },
};
</script>

<style lang="scss">
.nav {
  font-family: 'GT-America-md', 'Arial';
}
</style>
