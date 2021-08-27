let query = document.querySelector(".query");
let searchBtn = document.querySelector(".searchBtn");

searchBtn.onclick = function () {
  let url = "https://www.google.com/search?q="+ query.value;
  window.open(url, "_self");
};
