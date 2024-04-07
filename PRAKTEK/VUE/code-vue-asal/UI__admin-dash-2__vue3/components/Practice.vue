<template>
  <div class="practice">
    <h1>2 Latihan Soal</h1>
    <p>Silakan latihan soal disini!</p>
  </div>
</template>
<script>
export default {
  name: "practice",
};
</script>
<style scoped>
.practice {
  text-align: center;
  margin-top: 50px;
}

body {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 10px;
}

.container {
  padding: 20px;
}

.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: #ddd;
  color: black;
}

.v-card {
  border-radius: 10px;
  transition: transform 0.3s;
}

.v-card:hover {
  transform: scale(1.05);
}

.v-card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.v-card-subtitle {
  font-size: 0.9rem;
  color: #666;
}

.v-list-item {
  padding: 10px;
}

.v-list-item-title {
  font-size: 0.9rem;
  color: #333;
}

.v-app-bar {
  padding: 10px;
}

.v-app-bar__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 400px;
}
.form {
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-success {
  color: #28a745;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-danger {
  color: #dc3545;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #4caf50;
  color: white;
}
</style>