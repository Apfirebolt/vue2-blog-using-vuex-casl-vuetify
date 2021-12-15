<template>
  <v-layout>
    <div>
        List Article Page
    </div>
  </v-layout>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'ListArticlePage', 
    data() {
      return {
        article: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      ...mapActions('articles', {
        getArticle: 'findById'
      })
    },
  }
</script>
