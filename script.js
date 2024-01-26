let query = document.querySelector(".query");
let searchBtn = document.querySelector(".searchBtn");
let feelingBtn = document.querySelector(".feelingBtn");

// Function to perform the search
const performSearch = () => {
  let url = "https://www.google.com/search?q=" + query.value;
  window.open(url, "_self");
};

// Trigger search on button click =>
searchBtn.onclick = performSearch;

feelingBtn.onclick = performSearch;

// Trigger search when Enter key is pressed in the input field
query.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});
