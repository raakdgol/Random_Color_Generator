// const colorBox = document.getElementsByClassName("color-box");

// document.addEventListener("DOMContentLoaded", function generateColor() {
//   button.addEventListener("click", function getRandomColor() {
//     const colorBox = document.getElementsByClassName("color-box");
//     return "#" + Math.floor(Math.random() * 16777215).toString(16);
//   });
//   $(".color-box").css("background-color", getRandomColor());
// });

document.addEventListener("DOMContentLoaded", function generateColor() {
  // Select the button
  const button = document.querySelector(".btn");

  // Function to generate a random hex color
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  // Add event listener to button
  button.addEventListener("click", function displayColor() {
    const colorBox = document.querySelector(".color-box");
    colorBox.style.backgroundColor = getRandomColor();
  });
});
