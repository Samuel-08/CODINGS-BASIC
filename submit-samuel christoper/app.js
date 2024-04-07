document.addEventListener("DOMContentLoaded", function () {
  const formBuku = document.getElementById("bukuBaru");
  const terbacaContainer = document.getElementById("terbaca");
  const belumSelesaiContainer = document.getElementById("belumSelesai");

  formBuku.addEventListener("submit", eksekusi);

  document.addEventListener("click", function (event) {
    const triggerEvent = event.target;

    if (triggerEvent.classList.contains("btnPindah")) {
      pindahBuku(triggerEvent.parentElement.parentElement);
    }

    if (triggerEvent.classList.contains("btnHapus")) {
      hapusBuku(triggerEvent.parentElement.parentElement);
    }
  });

  const simpan = document.getElementById("btn-simpan");
  simpan.addEventListener("click", eksekusi);

  function eksekusi(event) {
    event.preventDefault();

    let randomId = Math.floor(Math.random() * 1000);

    let id = randomId;
    let title = document.getElementById("judul").value;
    let author = document.getElementById("penulis").value;
    let year = document.getElementById("tahun").value;
    let isComplete = document.getElementById("tanda").checked;
    let cardData = document.createElement("div");

    cardData.classList.add("card-data");

    cardData.innerHTML = `
      <span>
        <strong style="color:${isComplete ? "blue" : "green"}">${
      isComplete ? "sudah" : "belum"
    }</strong>
      </span>
      <small class="nomorBuku" style="display:none">${id}</small>
      <h1 class="card-head">${title}</h1>
      <h2 class="card-sub-head">${author}</h2>
      <p class="card-text">${year}</p>
      <div class="group-btn">
        <button class="btn-info btnPindah">Pindah</button>
        <button class="btn-info btnHapus">Hapus</button>
      </div>
    `;

    if (isComplete) {
      terbacaContainer.appendChild(cardData);
    } else {
      belumSelesaiContainer.appendChild(cardData);
    }

    simpanKeStorage(id, title, author, year, isComplete);
  }

  function simpanKeStorage(id, judul, penulis, tahun, sudahBaca) {
    let buku = {
      id: id,
      judul: judul,
      penulis: penulis,
      tahun: tahun,
      sudahBaca: sudahBaca,
    };

    let bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];

    bukuData.push(buku);

    localStorage.setItem("daftarBuku", JSON.stringify(bukuData));
  }
  selesai;
  function pindahBuku(card) {
    const idBuku = card.querySelector(".nomorBuku").textContent;
    const sudahBaca =
      card.querySelector("strong").textContent.trim() === "sudah";

    const bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];

    const index = bukuData.findIndex((buku) => buku.id == idBuku);
    if (index !== -1) {
      bukuData[index].sudahBaca = !sudahBaca;
      localStorage.setItem("daftarBuku", JSON.stringify(bukuData));
    }

    card.remove();
    if (sudahBaca) {
      belumSelesaiContainer.appendChild(card);
    } else {
      terbacaContainer.appendChild(card);
    }
  }

  function hapusBuku(card) {
    const idBuku = card.querySelector(".nomorBuku").textContent;
    const bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];

    const updatedBukuData = bukuData.filter((buku) => buku.id != idBuku);
    localStorage.setItem("daftarBuku", JSON.stringify(updatedBukuData));

    card.remove();
  }

  let lastButton = "";
  let btnBelum = document.getElementById("btnBelum");
  let btnSelesai = document.getElementById("btnSelesai");

  btnBelum.addEventListener("click", function (event) {
    event.preventDefault();

    if (lastButton !== "btnBelum") {
      btnBelum.classList.add("active");
      btnBelum.disabled = true;

      belumSelesaiContainer.classList.remove("d-none");

      btnSelesai.classList.remove("active");
      btnSelesai.disabled = false;

      terbacaContainer.classList.add("d-none");

      lastButton = "btnBelum";
    }
  });

  btnSelesai.addEventListener("click", function (event) {
    event.preventDefault();

    if (lastButton !== "btnSelesai") {
      btnSelesai.classList.add("active");
      btnSelesai.disabled = true;
      btnBelum.classList.remove("active");
      btnBelum.disabled = false;

      terbacaContainer.classList.remove("d-none");
      belumSelesaiContainer.classList.add("d-none");

      lastButton = "btnSelesai";
    }
  });
});
