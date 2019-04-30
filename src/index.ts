import Vue from "vue";
import MainComponent from "./components/Main.vue";

let v = new Vue({
  el: "#app",
  template: "<main-component />",
  components: {
    MainComponent: MainComponent
  }
});
