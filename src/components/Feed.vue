<template>
  <v-container
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>

      <feed-card
        v-for="(post,i) in posts"
        :key="i"
        :size="layout[i]"
        :value="post"
      />
    </v-layout>
  </v-container>
</template>

<script>
  // Utilities
  import { mapState, mapActions } from 'vuex';
import axios from 'axios';

  export default {
    name: 'Feed',
watch: {
      page () {
        window.scrollTo(0, 0)
      }
    },
    components: {
      FeedCard: () => import('@/components/FeedCard')
    },

    data: () => ({
      posts: [],
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1
    }),
    created() {
    axios.get(`http://localhost:3007/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data

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
