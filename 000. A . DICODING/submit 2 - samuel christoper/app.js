document.addEventListener("DOMContentLoaded", function () {
  const formBuku = document.getElementById("bukuBaru");
  const terbacaContainer = document.getElementById("terbaca");
  const belumSelesaiContainer = document.getElementById("belumSelesai");
  const formCari = document.getElementById("formCari");
  const inputCari = document.getElementById("cari");

  function tampilkanBukuDariLocalStorage() {
    const bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];
    bukuData.forEach((buku) => {
      tambahkanBukuKeDaftar(buku);
    });
  }

  function tambahkanBukuKeDaftar(buku) {
    const cardData = document.createElement("div");
    cardData.classList.add("card-data");

    cardData.innerHTML = `
            <span>
                <strong style="font-size: 28px; color:${
                  buku.isComplete ? "blue" : "green"
                }">${buku.isComplete ? "Sudah" : "Belum"} terbaca</strong>
            </span>
            <small class="nomorBuku" style="display:none">${buku.id}</small>
            <h1 class="card-head">${buku.title}</h1>
            <h2 class="card-sub-head">${buku.author}</h2>
            <p class="card-text">${buku.year}</p>
            <div class="group-btn">
                <button class="btn-success">Pindah</button>
                <button class="btn-danger">Hapus</button>
            </div>
        `;

    if (buku.isComplete) {
      terbacaContainer.appendChild(cardData);
    } else {
      belumSelesaiContainer.appendChild(cardData);
    }
  }

  formBuku.addEventListener("submit", function (event) {
    event.preventDefault();
    let randomId = Math.floor(Math.random() * 1000);
    let id = randomId;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let year = parseInt(document.getElementById("year").value);
    let isComplete = document.getElementById("isComplete").checked;

    const buku = {
      id: id,
      title: title,
      author: author,
      year: year,
      isComplete: isComplete,
    };

    tambahkanBukuKeDaftar(buku);
    simpanKeStorage(buku);
  });

  document.addEventListener("click", function (event) {
    const triggerEvent = event.target;
    if (triggerEvent.classList.contains("btn-success")) {
      pindahBuku(triggerEvent.parentElement.parentElement);
    } else if (triggerEvent.classList.contains("btn-danger")) {
      hapusBuku(triggerEvent.parentElement.parentElement);
    }
  });

  formCari.addEventListener("submit", function (event) {
    event.preventDefault();
    const keyword = inputCari.value.trim().toLowerCase();
    filterBuku(keyword);
  });

  function filterBuku(keyword) {
    const bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];
    const hasilFilter = bukuData.filter((buku) => {
      const judul = buku.title.toLowerCase();
      const penulis = buku.author.toLowerCase();
      return judul.includes(keyword) || penulis.includes(keyword);
    });
    tampilkanHasilPencarian(hasilFilter);
  }

  function tampilkanHasilPencarian(bukuArray) {
    terbacaContainer.innerHTML = "";
    belumSelesaiContainer.innerHTML = "";
    bukuArray.forEach((buku) => {
      tambahkanBukuKeDaftar(buku);
    });
  }

  function simpanKeStorage(buku) {
    let bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];
    bukuData.push(buku);
    localStorage.setItem("daftarBuku", JSON.stringify(bukuData));
  }

  function pindahBuku(card) {
    const idBuku = card.querySelector(".nomorBuku").textContent;
    const bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];
    const bukuIndex = bukuData.findIndex(
      (buku) => buku.id === parseInt(idBuku)
    );

    bukuData[bukuIndex].isComplete = !bukuData[bukuIndex].isComplete;
    localStorage.setItem("daftarBuku", JSON.stringify(bukuData));

    card.remove();

    tambahkanBukuKeDaftar(bukuData[bukuIndex]);
  }

  function hapusBuku(card) {
    const idBuku = card.querySelector(".nomorBuku").textContent;
    const bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];

    const updatedBukuData = bukuData.filter((buku) => buku.id != idBuku);

    localStorage.setItem("daftarBuku", JSON.stringify(updatedBukuData));

    card.remove();
  }

  const btnBelum = document.getElementById("btnBelum");
  btnBelum.addEventListener("click", function (event) {
    event.preventDefault();

    btnBelum.classList.add("active");
    btnBelum.disabled = true;

    const btnSelesai = document.getElementById("btnSelesai");
    btnSelesai.classList.remove("active");
    btnSelesai.disabled = false;

    terbacaContainer.classList.add("d-none");
    belumSelesaiContainer.classList.remove("d-none");
  });

  const btnSelesai = document.getElementById("btnSelesai");
  btnSelesai.addEventListener("click", function (event) {
    event.preventDefault();

    btnSelesai.classList.add("active");
    btnSelesai.disabled = true;

    const btnBelum = document.getElementById("btnBelum");
    btnBelum.classList.remove("active");
    btnBelum.disabled = false;

    terbacaContainer.classList.remove("d-none");
    belumSelesaiContainer.classList.add("d-none");
  });

  tampilkanBukuDariLocalStorage();
});
