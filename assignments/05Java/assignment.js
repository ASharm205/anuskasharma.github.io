

const colorPicker = document.getElementById("color-picker");
const colorText = document.getElementById("color-text");
const colorCode = document.getElementById("color-code");

colorPicker.addEventListener("input", (event) => {
  const chosenColor = event.target.value;
  colorText.style.color = chosenColor;
  colorCode.textContent = `Selected Color: ${chosenColor}`;
});

document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('img-change');
  img.addEventListener('click', () => {
    img.src = "sunny.jpg"; 
    img.alt = 'Sunny Weather';
  });
});


imgChange.addEventListener("click", (event) => {
  if (event.currentTarget.src.includes(CLOUDY_IMG)) {
    event.currentTarget.src = SUNNY_IMG;
  }
});
