<template>
  <section id="article">
    <banner  v-for="(post,i) in post"
        :key="i"
        :size="layout[i]"
        :value="post"
    ></banner>
    <content v-for="(post,i) in post"
        :key="i"

        :size="layout[i]" >{{post.content}}</content>

  </section>
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
      Banner: () => import('@/components/post/Banner'),
      Content: () => import('@/components/post/Content')

    },

    data: () => ({
      post: {},
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1
    }),
    created() {
    axios.get(`http://localhost:3007/posts/${this.$route.params.id}`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.post = response.data

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
