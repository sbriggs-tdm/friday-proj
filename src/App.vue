<template>

  <v-app>
      <v-app-bar app color="primary" dark >

        <v-tabs>
          <v-tab v-for="link in links" :key="`${link.label}-header-link`" :to="link.url">
            {{ link.label + " (" + link.hotKey + ")" }}
          </v-tab>
        </v-tabs>

      </v-app-bar>
      <v-content>

        <router-view></router-view>
        <!-- <HelloWorld/> -->

      </v-content>
      <v-footer color="primary" dark>
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
        url: '/',
        hotKey: "h"
      },
      {
        label: 'Desserts Form',
        url: '/desserts-form',
        hotKey: "s"
      },
      {
        label: 'Desserts Vuex',
        url: '/desserts-table',
        hotKey: "c"
      },
      {
        label: 'Todos Vuex',
        url: '/todos-table',
        hotKey: "t"
      },
      {
        label: 'Responsiveness',
        url: '/responsiveness',
        hotKey: "r"
      },
    ]
  }),
  methods: {

  },
};


  

/*   document.onkeydown = e => {
        
  if (e.altKey == true) {
    console.log("Alt + :" + e.key);
    console.log(e);
    switch (e.key) {
      case "1": document.querySelector("#home-tab").click();break;
      case "2": document.querySelector("#shane-api-tab").click();break;
      case "3": document.querySelector("#shane-language-api-tab").click();break;
      case "4": document.querySelector("#form-tab").click();break;
      case "5": document.querySelector("#data-tab").click();break;
      case "6": document.querySelector("#help-page-tab").click();break;
      default: break;
    }
  }
}; */
</script>
