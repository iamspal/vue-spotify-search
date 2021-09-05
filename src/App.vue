<template>
  <Header>
    <h1>
      <img src="./assets/img/spotify.png" alt="Spotify">
      Spotify Search
    </h1>
  </Header>
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
};
</script>
