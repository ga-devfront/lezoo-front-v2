<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="10" md="8" lg="6" xl="6" cols="12">
        <v-card color="red">
          <v-card-title>
            {{$t('menu.podcast')}}
          </v-card-title>
          <iframe
          width="100%"
          height="500"
          scrolling="yes"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https://soundcloud.com/le-zoo-official/&color=%23ff0000&auto_play=false&buying=true&liking=true&download=true&sharing=true&show_artwork=true&show_comments=true&show_playcount=true&show_user=true&hide_related=false&visual=true&start_track=0&callback=true"
          >
          </iframe>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Podcast',
};
</script>
