<template>
  <v-layout justify-center>
    <v-flex>
      <update-article-form />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, email } from "../../validation";
import UpdateArticleForm from "../../components/CreateUpdateArticle.vue";

export default {
  name: 'UpdateArticlePage',
  data() {
    return {
      details: {
        title: "",
        content: "",
      },
      titleValidation: [required],
      contentValidation: [required],
    };
  },
  components: {
    UpdateArticleForm
  },
  methods: {
    ...mapActions(["createArticle"]),

    createArticle() {
      const isValid = this.$refs.form.validate(true);

      if (!isValid) {
        return;
      }

      return this.updateArticle(this.details)
        .then(() => this.$router.push("/"))
        .catch((error) => {
          this.$store.dispatch("notifications/error", error.message);
        });
    },
  },
  created() {
    this.$store.dispatch("setTitle", "Login");
  },
};
</script>
