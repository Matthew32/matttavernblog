<template>
  <v-container pa-0>
    <base-subheading>Tags</base-subheading>
    <v-chip
      tag
      label
      small
      color="secondary"
      text-color="white"
    >
      Home
    </v-chip>
  </v-container>
</template>

<script>
  // Utilities
  import {
    mapGetters
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['categories'])
    }
  }
</script>
