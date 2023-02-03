let container = document.querySelector(".container");
let refreshBtn = document.querySelector(".refresh-btn");
let maxBoxes = 10;

generatePalette = () => {
  container.innerHTML = "";
  for (let i = 0; i < maxBoxes; i++) {
    // Genreate Random Hex Code
    let randomHex = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    let color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background-color: ${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>`;
    // Copy Color Onclick
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};

generatePalette();

let copyColor = (ele, hexValue) => {
  console.log(ele, hexValue);
  let colorEle = ele.querySelector(".hex-value");
  navigator.clipboard.writeText(hexValue).then(() => {
    colorEle.innerText = "Copied!";
    setTimeout(() => (colorEle.innerText = hexValue), 1000);
  });
};

refreshBtn.addEventListener("click", generatePalette);
