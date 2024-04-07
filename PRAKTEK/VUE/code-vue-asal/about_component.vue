<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card mt-5">
          <div class="card-header">
            <h2 class="text-center">CPNS INDONESIA</h2>
          </div>
          <div class="card-body">
            <h3 class="text-center mb-4">Try Out CPNS INDONESIA</h3>
            <div class="row">
              <div class="col-md-6">
                <button class="btn btn-primary btn-block mb-3" @click="startTest('tryout10')">
                  TRY OUT CPNS 10 (2023) PREMIUM
                </button>
                <button class="btn btn-primary btn-block mb-3" @click="startTest('tryout7')">
                  TRY OUT CPNS 7 (2023) PREMIUM
                </button>
                <button class="btn btn-primary btn-block mb-3" @click="startTest('tryout4')">
                  TRY OUT PREMIUM 4 (CPNS 2023)
                </button>
              </div>
              <div class="col-md-6">
                <button class="btn btn-primary btn-block mb-3" @click="startTest('tryout9')">
                  TRY OUT CPNS 9 (2023)
                </button>
                <button class="btn btn-primary btn-block mb-3" @click="startTest('tryout6')">
                  TRY OUT CPNS 6 (2023)
                </button>
                <button class="btn btn-primary btn-block mb-3" @click="startTest('tryout5')">
                  TRY OUT CPNS 5 (2023)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    startTest(testName) {
      this.$router.push({ name: testName });
    },
  },
  mounted() {
    // Initialize the page with any necessary data or API calls
  },
};
</script>
<style scoped>
.container {
  margin-top: 5rem;
}

.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #007bff;
  color: white;
  padding: 1rem;
  border-bottom: none;
}

.card-body {
  padding: 2rem;
}

h2,
h3 {
  margin-bottom: 1rem;
}

button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

@media (max-width: 767.98px) {
  .container {
    margin-top: 3rem;
  }

  .card {
    margin-top: 1rem;
  }

  .card-header {
    font-size: 1.5rem;
  }

  button {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }
}
</style>