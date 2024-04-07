<template>
  <div class="login-container">
    <h1>IKUT CPNS</h1>
    <div class="social-login">
      <button @click="googleSignIn">
        <img src="@/assets/google-icon.png" alt="Google" />
        <span>Sign up with Google</span>
      </button>
    </div>
    <div class="or-separator">
      <span>Atau</span>
    </div>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email atau Username</label>
        <input v-model="email" type="text" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <button type="submit">Masuk</button>
    </form>
    <div class="register-link">
      <span
        >Belum punya akun?
        <router-link to="/register">Daftar</router-link></span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async googleSignIn() {
      // Implementasi sign in dengan Google
    },
    async login() {
      // Implementasi login dengan email dan password
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.login-container h1 {
  font-size: 2.5em;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 50px;
}

.social-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.social-login button {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  cursor: pointer;
}

.social-login button:hover {
  background-color: #f5f5f5;
}

.social-login button img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.or-separator {
  display: flex;
  align-items: center;
  margin: 30px 0;
  font-size: 1.2em;
  color: #8a8a8a;
}

.or-separator span {
  padding: 0 10px;
  background-color: #ddd;
}

.form-group {
  margin-bottom: 20px;
  width: 300px;
}

.form-group label {
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 5px;
}

.form-group input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2em;
  color: #4a4a4a;
}
</style>