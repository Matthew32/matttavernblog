<template>

  <v-container grid-list-xl>
<v-layout
         align-center justify-space-around row fill-height>
      <v-flex>
        <v-card
        dark
        color="primary"
        >
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card
        dark
        color="secondary"
        >
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card
        dark
        color="accent"
        >
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
   name: 'Data',
    props: {
      value: {
        default: () => ({})
      }
    },
  }
</script>
