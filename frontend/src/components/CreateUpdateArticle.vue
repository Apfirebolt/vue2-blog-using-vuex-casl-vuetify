<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Create Article</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              v-model="details.title"
              label="Title"
              type="text"
              required
              :rules="titleValidation"
            ></v-text-field>
            <v-textarea
              name="content"
              filled
              label="Content"
              auto-grow
              v-model="details.content"
              :rules="contentValidation"
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.native="createArticle" name="register"
            >Create Article</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, email } from "../validation";

export default {
  name: "CreateUpdateArticleForm",
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
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
  methods: {
    createUpdate() {
      console.log("Create update function called..");
    },
  },
};
</script>
