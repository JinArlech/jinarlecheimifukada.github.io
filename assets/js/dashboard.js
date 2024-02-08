const app = Vue.createApp({
  data() {
    return {
      currentView: 'visitorStats' // Default view
    };
  },
  methods: {
    logout() {
      // Implement logout functionality here
      console.log('Logging out...');
    }
  }
});

app.mount('#adminDashboardApp');