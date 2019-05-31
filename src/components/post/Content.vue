<template>
<p>
     {{description}}
</p>
</template>
<script>
export default {
  name: 'Content',
    props: {
      description: {
        default: () => ({})
      }
    },
  }
</script>
