<template>
  <v-layout>
    Home Page
  </v-layout>
</template>

<script>

  export default {
    created() {
      console.log('This can ', this.$can('create', 'Article'));
      this.$store.dispatch('setTitle', 'List of Articles')
    }
  }
</script>
