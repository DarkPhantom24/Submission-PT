var masuk = document.querySelector("button");
masuk.addEventListener("click", function () {
  alert("mohon maaf fitur ini akan tersedia secepatnya");
});

const formKirim = document.querySelector(".search");
formKirim.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const tanya = data.get("tanya");
  alert("Pertanyaan: " + tanya + "\nsudah terinput!");
});
