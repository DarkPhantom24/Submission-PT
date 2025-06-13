var masuk = document.querySelector("button");
masuk.addEventListener("click", function () {
  alert("mohon maaf fitur ini akan tersedia secepatnya");
});

var selengkapnya = document.querySelectorAll(".btn");
for (var i = 0; i < selengkapnya.length; i++) {
  selengkapnya[i].addEventListener("click", function (event) {
    event.preventDefault();
    alert("layanan ini belum tersedia");
  });
}
