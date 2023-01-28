Vue.createApp({
  data() {
    return {
      progress: 0,
    };
  },

  methods: {
    increase() {
      if (this.progress == 100) return;
      this.progress += 1;
    },

    decrease() {
      if (this.progress == 0) return;
      this.progress -= 1;
    },
  },
}).mount("#app");
