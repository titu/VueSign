<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      Vue Sign Dashboard {{isUserSignedIn}}
    </v-flex>
  </v-layout>
</template>

<script>

  import {mapGetters} from 'vuex';

  export default {

    watch: {
      isUserSignedIn: {
        immediate: true,
        handler(value) {
          if (!value) {
            this.$router.push('/login')
          }
        }
      }
    },

    computed: {
      ...mapGetters(['isUserSignedIn'])
    }
  }
</script>
