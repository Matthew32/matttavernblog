<template>

  <section id="items">
 <v-container grid-list-xl text-xs-center>
    <v-layout v-for="(y,i) in item"
        :key="i"
        :size="layout[i]"
        :value="y" row wrap>
      <v-flex xs12>
          <banner  v-for="(y,i) in item"
        :key="i"
        :size="layout[i]"
        :value="y"
    ></banner>
      </v-flex>
      <v-flex xs12 >
        <v-card  v-html="y.content" >

          </v-card>
      </v-flex>


      <v-flex xs12 >

           <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="100%"
  >
    <v-card-title
      >
      <v-icon
        large
        left
      >
        mdi-xbox-controller
      </v-icon>
      <span class="title font-weight-light">{{y.user.username}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      "{{y.user.description}}"
    </v-card-text>

    <v-card-actions>
      <v-list-tile class="grow">
        <v-list-tile-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
          :src="y.user.avatar"
          ></v-img>
        </v-list-tile-avatar>




      </v-list-tile>
    </v-card-actions>
  </v-card></v-flex>




    </v-layout>
  </v-container>

  </section>
</template>

<script>
  // Utilities
  import { mapState, mapActions } from 'vuex';
import axios from 'axios';

  export default {
    name: 'Items',
watch: {
      page () {
        window.scrollTo(0, 0)
      }
    },
    components: {
      Banner: () => import('@/components/post/Banner'),
      Data: () => import('@/components/post/Data')

    },

    data: () => ({
      item: {},
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1
    }),
    created() {
    axios.get(`http://localhost:3007/posts/${this.$route.params.id}`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.item = response.data

    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
  }

</script>
