let query = document.querySelector(".query");
let searchBtn = document.querySelector(".searchBtn");
let feelingBtn = document.querySelector(".feelingBtn");

// Array of words
const words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "pineapple",
  "javascript",
  "python",
  "java",
  "typescript",
  "ruby",
  "csharp",
  "html",
  "css",
  "php",
  "go",
  "swift",
  "rust",
  "kotlin",
];

// Function to generate a random word
function generateRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

const randomWord = generateRandomWord();

// Function to perform the search
const performSearch = () => {
  if (query.value === "") {
    query.value = randomWord;
  }
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
