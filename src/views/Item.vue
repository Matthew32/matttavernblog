<template>
  <div id="post">
    <items>

    </items>
      <content />

    <!-- <about /> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
  export default {
    name: 'Post',
   components: {
      Items: () => import('@/components/post/Item'),


    }
  }



</script>
