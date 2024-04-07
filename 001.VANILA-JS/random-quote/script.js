function generate() {
  var quotes = {
    "- Albert Einstein":
      "“Tugas kita adalah membebaskan diri kita sendiri... dengan memperluas lingkaran belas kasih kita untuk merangkul semua makhluk hidup dan seluruh alam serta keindahannya.”",
    "- Jules Renard, Jurnal Jules Renard":
      "“Orang yang benar-benar bebas adalah orang yang dapat menolak undangan makan malam tanpa memberikan alasan.”",
    "- Monique Duval":
      "“Dia memutuskan untuk membebaskan dirinya, menari mengikuti angin, menciptakan bahasa baru. Dan burung-burung beterbangan di sekelilingnya, menulis “ya” di langit.”",
  };
  var authors = Object.keys(quotes);
  //   console.log(author);
  var author = authors[Math.floor(Math.random() * authors.length)];

  var quote = quotes[author];
  document.getElementById("quote").innerHTML = quote;

  document.getElementById("author").innerHTML = author;
}
