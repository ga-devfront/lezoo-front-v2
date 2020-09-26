<template>
  <v-select
    rounded
    dense
    color="red"
    v-model="$i18n.locale"
    :items="locales"
    prepend-icon="mdi-earth"
    hide-details
  >
  </v-select>
</template>

<script>
export default {
  name: 'SelectLocal',

  data() {
    return {
      locales: [
        { value: 'fr', text: 'Français' },
        { value: 'en', text: 'English' },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>
