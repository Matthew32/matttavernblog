<template>
  <div id="post">
    <articles>
      <banner />
    </articles>

    <!-- <about /> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
  export default {
    name: 'Post',
   components: {
      Articles: () => import('@/components/post/Article'),
      Banner: () => import('@/components/post/Banner'),
    }
  }



</script>
