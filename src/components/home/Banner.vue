<template>
  <base-card   dark >
    <v-img
      class="grey lighten-2"
      height="400px"
      width="100%"
      :src="require('@/assets/articles/banner.jpg')"
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
            Matt Tavern Blog
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            Finding Beauty, On the free time
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

