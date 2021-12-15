<template>
  <v-layout>
    <div>
        Create Article Page
    </div>
  </v-layout>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'CreateArticlePage',   
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
