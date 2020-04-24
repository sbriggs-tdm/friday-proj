<template>
  <v-app>
    <v-app-bar app color="primary" dark >

      <v-tabs>
        <v-tab v-for="link in links" :key="`${link.label}-header-link`" :to="link.url">
          {{ link.label }}
        </v-tab>
      </v-tabs>

    </v-app-bar>
    <v-content>

      <router-view></router-view>
      <!-- <HelloWorld/> -->

    </v-content>
    <v-footer>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
/* import HelloWorld from './components/HelloWorld'; */

export default {
  name: 'App',

  components: {
    /* HelloWorld, */
  },

  data: () => ({
    links: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Table',
        url: '/table'
      },
      {
        label: 'Todos Table',
        url: '/todos-table'
      }
    ]
  }),
};
</script>
