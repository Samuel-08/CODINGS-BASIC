document.addEventListener("DOMContentLoaded", function () {
  // ... (rest of your code)

  function simpanKeStorage(id, title, author, year, isComplete) {
    let buku = {
      id: id,
      title: title,
      author: author,
      year: year,
      isComplete: isComplete,
    };

    let bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];

    bukuData.push(buku);

    localStorage.setItem("daftarBuku", JSON.stringify(bukuData));
  }

  // ... (rest of your code)

  document.addEventListener("click", function (event) {
    const triggerEvent = event.target;

    if (triggerEvent.classList.contains("btn-success")) {
      pindahBuku(
        triggerEvent.parentElement.parentElement,
        !triggerEvent.dataset.iscomplete
      );
    } else if (triggerEvent.classList.contains("btn-danger")) {
      hapusBuku(triggerEvent.parentElement.parentElement);
    }
  });

  // ... (rest of your code)

  function moveBook(card, isComplete) {
    const idBuku = card.querySelector(".nomorBuku").textContent;
    const sudahBaca =
      card.querySelector("strong").textContent.trim() === "sudah";

    const bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];

    const index = findIndex(bukuData, { id: idBuku });
    if (index !== -1) {
      bukuData[index].isComplete = isComplete;
      localStorage.setItem("daftarBuku", JSON.stringify(bukuData));
    }

    card.remove();
    if (isComplete) {
      belumSelesaiContainer.appendChild(card);
    } else {
      terbacaContainer.appendChild(card);
    }
  }

  // ... (rest of your code)

  function deleteBook(card) {
    const idBuku = card.querySelector(".nomorBuku").textContent;
    const bukuData = JSON.parse(localStorage.getItem("daftarBuku")) || [];

    const updatedBukuData = bukuData.filter((buku) => buku.id != idBuku);
    localStorage.setItem("daftarBuku", JSON.stringify(updatedBukuData));

    card.remove();
  }

  // ... (rest of your code)
});
