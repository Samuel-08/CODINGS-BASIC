<template>
  <div id="app">
  <button @click="toggleFAQ = !toggleFAQ">FAQ</button>
  <div v-if="toggleFAQ">
    <div class="faq" v-for="(faq, index) in faqs" :key="index">
      <h3>{{ faq.question }}</h3>
      <p v-html="faq.answer"></p>
    </div>
  </div>
</div>
</template>

<script>
// export default {
// 
// }
const { createApp } = Vue;
// index.js/main.js

createApp({
  data() {
    return {
      toggleFAQ: false,
      faqs: [
        {
          question: "Bagaimana cara mengumpulkan pengerjaan paket soal?",
          answer: `<p>Pengerjaan paket soal dapat dikumpulkan melalui tombol "Kumpul" di pojok kanan atas halaman setiap paket soal.</p>`
        },
        {
          question: "Bagaimana cara melihat hasil keseluruhan pengerjaan?",
          answer: `<p>Hasil keseluruhan pengerjaan dapat dilihat di halaman "Statistika" atau "Ranking", yang dapat diakses melalui menu di pojok kiri atas.</p>`
        },
        {
          question: "Bagaimana cara menentukan passing grade?",
          answer: `<p>Passing grade untuk setiap paket soal dapat dilihat di halaman "Tryout", setelah mengerjakan paket soal.</p>`
        },
        {
          question: "Bisa saya membeli Paket CPNS yang sudah habis masa pendaftaran?",
          answer: `<p>Tidak, Paket CPNS hanya tersedia untuk dibeli selama masa pendaftaran yang telah ditentukan.</p>`
        }
      ]
    }
  }
}).mount('#app');
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.faq {
  margin-bottom: 20px;
}

.faq h3 {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
}

@media (max-width: 600px) {
  .faq h3 {
    font-size: 16px;
  }

  .faq p {
    font-size: 14px;
  }
}
</style>