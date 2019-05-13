import Vue from 'vue';
import vueDebounce from 'vue-debounce';
import UserManagement from './user_management.vue';

Vue.use(vueDebounce);

new Vue({
  el: '#mail-app',

  components: { UserManagement },

  template: '<UserManagement />',
});
