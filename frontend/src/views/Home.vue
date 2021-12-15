<template>
  <v-layout column>
    <ArticleList />
  </v-layout>
</template>

<script>
  import ArticleList from '../components/ArticleList'

  export default {
    components: {
      ArticleList
    },
    created() {
      console.log('This can ', this.$can('create', 'Article'));
      this.$store.dispatch('setTitle', 'List of Articles')
    }
  }
</script>
