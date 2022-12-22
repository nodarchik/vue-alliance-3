const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      logic: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 0) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 5000);
      }
      if (value < 37) {
        this.logic = "Not there yet";
      } else if ((value == 37)) {
        this.logic = "";
      } else{
        this.logic = "Too much!";
      }
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#assignment");
