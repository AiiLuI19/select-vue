<template>
  <div id="app" class="mt-2">
    <form class="p-2 form w-full bg-x" action>
      <label style="display: block; margin-bottom: 10px"
        >Select Autocomplete
      </label>

      <vue-single-select v-model="fruit" :options="fruits"></vue-single-select>
    </form>
  </div>
</template>

<script>
import VueSingleSelect from "./components/VueSingleSelect";

export default {
  name: "app",
  created() {
    //this.numbers = _.range(20,40);
    //this.thread = this.threads[1]
  },
  methods: {
    getCustomDescription(opt) {
      return opt.a_title;
    },
    addOption(opt) {
      //this.myThreads.push(opt);
      //this.threads.push(opt);
      this.fruits.push(opt);
    },
    zed(opt) {
      return opt + " fruit";
    },
  },
  mounted() {
    //let r = _.sample(this.fruits)
    //this.fruit = 'peach'
    setTimeout(() => {
      /* let threads = _.sampleSize(this.threads, 2);
       * this.myThreads = [this.threads[0]];*/
    }, 2000);
    setInterval(() => {
      //      this.fruit = _.sample(this.fruits)
      //this.myThreads = [];
    }, 1000);
  },
  components: {
    VueSingleSelect,
  },
  data() {
    return {
      nums: [],
      numbers: [],
      fruit: "apple",
      veggies: [],
      fruits: [
        "apple",
        "cherry",
        "pear",
        "peach",
        "banana",
        "orange",
        "plum",
        "grape",
      ],
      myThreads: [],
      thread: "",
    };
  },
};
</script>

<style>
body {
  font-size: 16px;
}
.w-50 {
  width: 50%;
}
.container {
  width: 1000px;
  margin: 0 auto;
}
.emoji-happy::before {
  content: "\1F600";
}
.emoji-sad::before {
  content: "\1F622";
}
#app {
  font-family: "Oxygen", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  _font-size: 16px;
}
.pill {
}
</style>
