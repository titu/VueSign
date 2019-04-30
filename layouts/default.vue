<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      v-if="isUserSignedIn"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      v-if="isUserSignedIn"
    >
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

  import {mapGetters} from 'vuex';
  import {auth} from 'firebase';

  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          {
            icon: 'apps',
            title: 'Dashboard',
            to: '/'
          }, {
            icon: 'exit_to_app',
            title: 'Logout',
            to: '/login'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vue Sign'
      }
    },
    mounted() {
      this.$nextTick(() => {
        auth().onAuthStateChanged(this.handleAuthStateChange);
      });
    },
    watch: {
      '$route'(to) {
        if (to.name === 'login') {
          this.$store.dispatch('signOut');
        }
      }
    },
    computed: {
      ...mapGetters(['isUserSignedIn'])
    },
    methods: {
      handleAuthStateChange(user) {
        if (user) {
          this.$store.commit('setUser', user);
          if (this.$route.name === 'login' || this.$route.name === 'signup') {
            this.$router.push('/')
          }
        } else {
          this.$router.push('/login')
        }
      }
    }
  }
</script>
