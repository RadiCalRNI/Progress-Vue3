Vue.createApp({
  data() {
    return {
      progress: 0,
      isFirst: true,
      isCenter: false,
      isLast: false,
    };
  },

  methods: {
    increase() {
      if (this.progress == 100) return;

      if (this.progress > 30 && this.progress < 70) {
        this.isFirst = false;
        this.isCenter = true;
      } else if (this.progress >= 70) {
        this.isCenter = false;
        this.isLast = true;
      }

      this.progress += 1;
    },

    decrease() {
      if (this.progress == 0) return;
      if (this.progress > 30 && this.progress < 70) {
        this.isCenter = true;
        this.isLast = false;
      } else if (this.progress <= 30) {
        this.isFirst = true;
        this.isCenter = false;
      }
      this.progress -= 1;
    },
  },
}).mount("#app");
