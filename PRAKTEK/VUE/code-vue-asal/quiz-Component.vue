<template>
  <div id="app">
    <div class="quiz-container">
      <div class="quiz-header">
        <h2>Kuisioner</h2>
      </div>
      <div class="quiz-content">
        <div class="question-container">
          <p class="question-text">
            1. Untuk merebut hati penduduk Indonesia, Jepang menggaungkan semboyan 3A,
            yaitu Jepang pemimpin Asia, Jepang pelindung Asia, dan Jepang cahaya Asia.
            Penggaungan semboyan tersebut merupakan contoh dari sikap ...
          </p>
          <div class="option-container">
            <label class="option-label">
              <input type="radio" name="question1" value="A" v-model="pilihan1" />
              A. Etnosentrisme
            </label>
            <label class="option-label">
              <input type="radio" name="question1" value="B" v-model="pilihan1" />
              B. Cinta tanah air
            </label>
            <label class="option-label">
              <input type="radio" name="question1" value="C" v-model="pilihan1" />
              C. Primordialisme
            </label>
            <label class="option-label">
              <input type="radio" name="question1" value="D" v-model="pilihan1" />
              D. Chauvinisme
            </label>
            <label class="option-label">
              <input type="radio" name="question1" value="E" v-model="pilihan1" />
              E. Nasionalisme
            </label>
          </div>
        </div>
        <!-- Tambahkan soal-soal lainnya di sini -->
      </div>
      <div class="quiz-footer">
        <button @click="submitQuiz" :disabled="!isQuizCompleted">
          Kirim jawaban
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pilihan1: '',
      pilihan2: '',
      // Tambahkan jawaban lainnya di sini
      isQuizCompleted: false,
    };
  },
  methods: {
    submitQuiz() {
      // Logika untuk mengirim jawaban ke server
      console.log('Jawaban:', {
        pilihan1: this.pilihan1,
        pilihan2: this.pilihan2,
        // Tambahkan jawaban lainnya di sini
      });
      this.isQuizCompleted = true;
    },
  }
  ,data1() {
    return {
      pilihan1: '',
      // Tambahkan jawaban lainnya di sini
      isQuizCompleted: false,
    };
  },
  methods: {
    submitQuiz() {
      // Logika untuk mengirim jawaban ke server
      console.log('Jawaban:', {
        pilihan1: this.pilihan1,
        // Tambahkan jawaban lainnya di sini
      });
      this.isQuizCompleted = true;
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.quiz-container {
  width: 100%;
  max-width: 600px;
  padding: 24px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.quiz-header {
  text-align: center;
  margin-bottom: 24px;
}

.question-container {
  margin-bottom: 24px;
}

.question-text {
  margin-bottom: 12px;
}

.option-container {
  display: flex;
  flex-direction: column;
}
 @media (min-width: 600px) { .quiz-container { padding: 48px; } .question-container { margin-bottom: 32px; } .option-container { flex-direction: row; justify-content: space-between; } .option-label { flex-basis: calc(20% - 12px); margin-bottom: 0; } } 
</style>