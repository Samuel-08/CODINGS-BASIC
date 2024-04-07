<template>
<div class="sidebar">
    <!-- Sidebar content -->
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-item title="Sidebar Title">
          <v-list-item-subtitle>Subtitle</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
        { title: 'Users', icon: 'mdi-account-group', route: '/users' },
        { title: 'Settings', icon: 'mdi-cog', route: '/settings' },
      ],
    };
  },
};
</script>
<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100%;
  background-color: #1a1a1a;
  color: #fff;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar a {
  display: block;
  padding: 15px;
  color: #fff;
  text-decoration: none;
}

.sidebar a:hover {
  background-color: #333;
}
</style>