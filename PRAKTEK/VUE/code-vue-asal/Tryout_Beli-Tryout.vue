<template>
  <!-- kurang css -->
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h1>IKUT CPNS</h1>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-card>
              <v-card-title>Dashboard</v-card-title>
              <v-card-subtitle>Halaman Utama</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card>
              <v-card-title>Tryout</v-card-title>
              <v-card-subtitle>Mulai Tryout Sekarang</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card>
              <v-card-title>Ranking</v-card-title>
              <v-card-subtitle>Lihat Ranking Terbaru</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4">
            <v-card>
              <v-card-title>Statistika</v-card-title>
              <v-card-subtitle>Lihat Statistik Keseluruhan</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card>
              <v-card-title>Latihan Soal</v-card-title>
              <v-card-subtitle>Latihan Soal CPNS</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card>
              <v-card-title>FAQ</v-card-title>
              <v-card-subtitle
                >Jawab Pertanyaan yang Sering Diajukan</v-card-subtitle
              >
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>Pengaturan</v-card-title>
              <v-card-subtitle>Atur Pengaturan Akun Anda</v-card-subtitle>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Keluar</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
 scope
<style scope>
.container {
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
}

.v-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
}

.v-card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.v-card-subtitle {
  font-size: 0.9rem;
  color: #777;
}

@media (max-width: 600px) {
  .v-col {
    padding: 10px;
  }

  h1 {
    font-size: 1.8rem;
  }
}
</style>