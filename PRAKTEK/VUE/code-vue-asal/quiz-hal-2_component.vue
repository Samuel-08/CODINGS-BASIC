<template>
  <div id="app">
    <h1>Kuisioner</h1>
    <p v-if="showResult">Hasil: {{ result }}</p>
    <form @submit.prevent="submitForm" v-else>
      <div>
        <label for="name">Nama:</label>
        <input type="text" id="name" v-model.trim="name" required>
      </div>
      <div>
        <label for="question">Pilih sikap yang paling mendekati penggaungan semboyan 3A Jepang:</label>
        <select id="question" v-model.number="question" required>
          <option value="">-- Pilih --</option>
          <option value="1">A. Etnosentrisme</option>
          <option value="2">B. Cinta tanah air</option>
          <option value="3">C. Primordialisme</option>
          <option value="4">D. Chauvinisme</option>
          <option value="5">E. Nasionalisme</option>
        </select>
      </div>
      <button type="submit">Kirim</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      question: '',
      showResult: false,
      result: ''
    }
  },
  methods: {
    submitForm() {
      if (this.name && this.question) {
        this.result = `Nama: ${this.name}, Pilihan: ${this.question}`
        this.showResult = true
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

input, select {
  display: block;
  margin: 10px auto;
  width: 80%;
  padding: 5px;
  font-size: 16px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

button:hover {
  background-color: #3e8e41;
}
</style>