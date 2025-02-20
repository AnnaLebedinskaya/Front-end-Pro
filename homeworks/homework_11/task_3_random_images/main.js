const imgElement = document.getElementById("random-image");
const button = document.getElementById("generate-btn");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener("click", function () {
  const randomNumber = getRandomNumber(1, 9);
  imgElement.src = `images/${randomNumber}.jpg`;
});
