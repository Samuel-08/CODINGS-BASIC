document.getElementById("form").addEventListener("submit", function (ev) {
  ev.preventDefault();
  let tombol = document.getElementById("warna_bg").value;
  document.body.style.backgroundColor = tombol;
  document.getElementById("ganti_warna").innerHTML = tombol;
});
