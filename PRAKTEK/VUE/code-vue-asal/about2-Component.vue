<template>
  <div id="app">
    <header class="header">
      <h1 class="title">CPNS INDONESIA</h1>
      <nav class="navigation">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/tryout" class="nav-link">Tryout</router-link>
        <router-link to="/career" class="nav-link">Career</router-link>
      </nav>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <p class="copyright">© 2024 CPNS INDONESIA</p>
      <nav class="social-media">
        <a href="#" class="social-link">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="social-link">
          <i class="fab fa-telegram"></i>
        </a>
      </nav>
    </footer>
  </div>
</template>

<script>
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Tryout from './components/Tryout.vue'
import Career from './components/Career.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/tryout', component: Tryout },
    { path: '/career', component: Career },
  ],
})

const app = createApp({
  components: {
    Home,
    Tryout,
    Career,
  },
})

app.use(router)
app.mount('#app')
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: #333;
}

.header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  margin: 0;
}

.navigation {
  display: flex;
}

.nav-link {
  color: #fff;
  padding: 0 1rem;
}

.nav-link:hover {
  background-color: #555;
}

.main {
  padding: 2rem;
}

.footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.copyright {
  margin: 0;
}

.social-media {
  display: flex;
}

.social-link {
  color: #fff;
  padding: 0 1rem;
  display: flex;
  align-items: center;
}

.social-link:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  .header,
  .footer {
    flex-direction: column;
  }

  .navigation,
  .social-media {
    flex-direction: column;
  }

  .nav-link,
  .social-link {
    padding: 1rem;
  }
}
</style>