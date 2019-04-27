<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar
        color="orange darken-1"
        dark>
        <v-toolbar-title>Vue Sign</v-toolbar-title>
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
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit" color="orange" block dark>Login</v-btn>
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
      }
    },
  }
</script>

<style scoped>

</style>
