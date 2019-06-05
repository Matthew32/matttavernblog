<template>
  <base-card   dark >
    <v-img
      class="grey lighten-2"
      height="250px"
      width="100%"
      :src="value.avatar"

    >
      <v-layout
        fill-height
        align-center
        box-shadow
        pa-3
      >
        <v-flex
          xs12
          md7
          offset-md6
        >
          <h1  class=" black-text display-3 font-weight-thin">
            {{value.title}}
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            {{value.subtitle}}
          </div>
          <!--<v-btn
            color="primary"
            depressed
            round
          >
             Subscribe
          </v-btn>-->
        </v-flex>
      </v-layout>
    </v-img>

  </base-card>

</template>
<script>
export default {
    props: {
      value: {
        default: () => ({})
      }
    },
  }
</script>
