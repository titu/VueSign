<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar color="orange lighten-5">
        <v-toolbar-title class="orange--text">Login</v-toolbar-title>
      </v-toolbar>
      <v-card>
        <v-card-text>
          <v-container>
            <form>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Email"
                    key="login-email"
                    type="email"
                    v-model="email"
                    :rules="[formRules.email, formRules.required]"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    key="login-password"
                    type="password"
                    v-model="password"
                    :rules="[formRules.required]"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit" color="orange lighten-5" class="orange--text" block dark>Login</v-btn>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <p class="text-xs-right mt-3">Don't have an account? <a href="/signup" class="purple--text">SIGN UP</a></p>
                </v-flex>
              </v-layout>
            </form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "login",
    data () {
      return {
        email: '',
        password: '',
        formRules: {
          email: v => /\S+@\S+\.\S+/.test(v) || "Not a valid Email address.",
          required: value => !!value || "Value is required to login."
        }
      }
    },
  }
</script>

<style scoped>

</style>
