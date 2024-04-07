<template>
  <div id="app">
    <div class="menu">
      <button @click="goTo('dashboard')">Dashboard</button>
      <button @click="goTo('tryout')">Tryout</button>
      <button @click="goTo('ranking')">Ranking</button>
      <button @click="goTo('practice')">2 Latihan Soal</button>
      <button @click="goTo('statistics')">Statistika</button>
      <button @click="goTo('faq')">FAQ</button>
      <button @click="goTo('setting')">SETTING</button>
    </div>
    <div class="content">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Tryout from "./components/Tryout.vue";
import Ranking from "./components/Ranking.vue";
import Practice from "./components/Practice.vue";
import Statistics from "./components/Statistics.vue";
import Faq from "./components/Faq.vue";
import Setting from "./components/Setting.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    Tryout,
    Ranking,
    Practice,
    Statistics,
    Faq,
    Setting,
  },
  data() {
    return {
      currentComponent: "Dashboard",
    };
  },
  methods: {
    goTo(component) {
      this.currentComponent = component;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
}

.menu button {
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}

.content {
  width: 80%;
}
</style>