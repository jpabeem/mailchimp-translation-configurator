// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import HomeComponent from './components/Home.vue';
import BrowserLanguageConfigurator from './components/BrowserLanguageConfigurator.vue';
import FormFieldConfigurator from './components/FormFieldConfigurator.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.component('browser-language-configurator',
  BrowserLanguageConfigurator
);

Vue.component('home',
  HomeComponent
);

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components
const Home = {
  App
};
const BrowserLanguage = {
  BrowserLanguageConfigurator
};
const FormField = {
  FormFieldConfigurator
};

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/mailchimp-translation-configurator',
      name: 'home',
      component: require('./components/Home.vue').default
    },
    {
      path: '/mailchimp-translation-configurator/browser-language',
      name: 'browser-language',
      component: require('./components/BrowserLanguageConfigurator.vue').default
    },
    {
      path: '/mailchimp-translation-configurator/form-field',
      name: 'form-field',
      component: require('./components/FormFieldConfigurator.vue').default
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
})
