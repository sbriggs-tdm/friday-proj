import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  methods: {
    vlog1(e){

      console.log(e); 
      if (e.altKey == true) {
        console.log("Alt + :" + e.key);
        switch (e.key) {
          case "h": router.push('/'); break;
          case "c": router.push('/desserts-table'); break;
          case "t": router.push('/todos-table'); break;
          case "s": router.push('/desserts-form'); break;
          case "r": router.push('/responsiveness'); break;
          default: break;
        }
      }
    }
  },
  mounted() {
    this._keyListener = function(e) {
        /* if (e.key === "s" && (e.ctrlKey || e.metaKey)) { */
            /* e.preventDefault(); */ // prevent "Save Page" from getting triggered.

            this.vlog1(e);
        }
    /* }; */

    document.addEventListener('keydown', this._keyListener.bind(this));
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
