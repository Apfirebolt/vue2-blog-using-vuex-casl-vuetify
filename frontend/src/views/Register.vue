<template>
  <v-layout align-center justify-center>
   <v-flex xs12 sm8 md4>
     <v-card class="elevation-12">
       <v-toolbar dark color="primary">
         <v-toolbar-title>Register form</v-toolbar-title>
       </v-toolbar>
       <v-card-text>
         <v-form ref="form">
           <v-text-field v-model="details.name" label="Name" type="text" required :rules="nameValidation"></v-text-field>
           <v-text-field v-model="details.email" label="Email" type="email" required :rules="emailValidation"></v-text-field>
           <v-text-field v-model="details.password" label="Password" type="password" required :rules="passwordValidation"></v-text-field>
         </v-form>
       </v-card-text>
       <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn color="primary" @click.native="registerUser" name="register">Register</v-btn>
       </v-card-actions>
     </v-card>
   </v-flex>
  </v-layout>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { required, email, minLength } from '../validation'

  export default {
    data() {
      return {
        details: {
          name: '',  
          email: '',
          password: ''
        },
        nameValidation: [
          required,
          minLength(4)
        ],
        emailValidation: [
          required,
          email
        ],
        passwordValidation: [
          required,
          minLength(6)
        ]
      }
    },
    methods: {
      ...mapActions(['register']),

      registerUser() {
        const isValid = this.$refs.form.validate(true)

        if (!isValid) {
          return
        }

        return this.register(this.details)
          .then(() => this.$router.push('/'))
          .catch(error => {
            this.$store.dispatch('notifications/error', error.message)
          })
      }
    },
    created() {
      this.$store.dispatch('setTitle', 'Login')
    }
  }
</script>
