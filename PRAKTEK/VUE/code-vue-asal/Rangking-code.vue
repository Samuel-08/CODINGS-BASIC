<template>
  <div id="app">
    <h1>Ranking</h1>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Nama</th>
          <th>Provinsi</th>
          <th>TWK</th>
          <th>TIU</th>
          <th>Pilih Tryout</th>
          <th>Total</th>
          <th>Keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.nama">
          <td>{{ index + 1 }}</td>
          <td>{{ user.nama }}</td>
          <td>{{ user.provinsi }}</td>
          <td>{{ user.twk }}</td>
          <td>{{ user.tiu }}</td>
          <td>{{ user.tryout }}</td>
          <td>{{ user.total }}</td>
          <td>{{ user.keterangan }}</td>
        </tr>
      </tbody>
    </table>
    <p>Informasi Ranking :</p>
    <ul>
      <li>
        Halaman Ranking ini selalu diupdate setiap ada peserta yang mengumpulkan
        pengerjaan paket soal.
      </li>
      <li>
        Halaman Ranking ini hanya diupdate selama periode pengerjaan per masing
        masing paket soal.
      </li>
      <li>
        Agar bisa LULUS, kamu harus mencapai Passing Grade: TWK 65 poin, TIU 80
        poin, TKP 166 poin.
      </li>
      <li>
        Untuk hasil keseluruhan, perankingan dilihat dari berapa kali lulus lalu
        jumlah poin yang didapatkan.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      users: [
        {
          nama: "John Doe",
          provinsi: "Jawa Barat",
          twk: 150,
          tiu: 175,
          tryout: 175,
          total: 500,
          keterangan: "LULUS",
        },
        {
          nama: "Jane Doe",
          provinsi: "DI Yogyakarta",
          twk: 150,
          tiu: 175,
          tryout: 175,
          total: 500,
          keterangan: "LULUS",
        },
        // ...
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table {
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

li {
  margin-bottom: 10px;
}
</style>