<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar color="orange lighten-5">
        <v-toolbar-title class="orange--text">Sign Up</v-toolbar-title>
      </v-toolbar>
      <v-card>
        <v-card-text>
          <v-container>
            <form>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="firstname"
                    label="First Name"
                    key="signup-first-name"
                    type="text"
                    v-model.trim="firstName"
                    required
                    :rules="[formRules.required]"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="lastname"
                    label="Last Name"
                    key="signup-last-name"
                    type="text"
                    v-model.trim="lastName"
                    required
                    :rules="[formRules.required]"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Email"
                    key="signup-email"
                    type="email"
                    v-model.trim="email"
                    required
                    :rules="[formRules.email, formRules.required]"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    key="signup-password"
                    type="password"
                    v-model.trim="password"
                    hint="Password should be minimum 8 characters"
                    counter
                    required
                    :rules="[formRules.passWordMinLength, formRules.required]"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="confirmpassword"
                    label="Confirm password"
                    v-model.trim="confirmPassword"
                    type="password"
                    key="signup_confirms_password"
                    hint="Password should be minimum 8 characters"
                    counter
                    :rules="[formRules.passwordConfirmationRules, formRules.required]"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit" color="orange lighten-5" class="orange--text" block>Submit</v-btn>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <p class="text-xs-right mt-3">Already have an account? <a href="/login" class="purple--text">LOGIN</a></p>
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
    name: "signup",
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        formRules: {
          email: v => /\S+@\S+\.\S+/.test(v) || "Not a valid Email address.",
          required: value => !!value || "Value is required to sign up.",
          passWordMinLength: v => v.length >= 8 || "Password should be minimum 8 characters",
          passwordConfirmationRules: v => v === this.password || "Confirmation password doesn't match!"
        }
      }
    },
  }
</script>

<style scoped>

</style>
