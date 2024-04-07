<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

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

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
    methods: {
    closeClick() {
      // Method to close the sidebar
    }
  },
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
        { title: 'Users', icon: 'mdi-account-group', route: '/users' },
        { title: 'Products', icon: 'mdi-cart', route: '/products' },
      ],
    };
  },
};
</script>
 
<style>
#app {
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
}

#default-sidebar {
  background-color: rgb(25, 118, 210);
  color: #ffffff;
  width: 250px;
  padding: 20px;
}

.title {
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
}

.sub-title {
  color: #cccccc;
  font-size: 14px;
  margin-top: 10px;
}

.close-btn {
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px;
  margin-top: 20px;
}

.close-btn:hover {
  color: #fafafa;
}

#main-content {
  padding: 20px;
  flex: 1;
}
</style>