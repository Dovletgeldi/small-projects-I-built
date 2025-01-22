const inputValue = document.getElementById("value");
const lengthValue = document.getElementById("length-value");
const volumeValue = document.getElementById("volume-value");
const massValue = document.getElementById("mass-value");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.innerHTML = `${inputValue.value} meters  = ${meterToFeet(
    inputValue.value
  ).toFixed(3)} feet | ${inputValue.value} feet = ${feetToMeter(
    inputValue.value
  ).toFixed(3)} meters`;
  const firstPartsDiv = document.querySelector(".first-part");
  firstPartsDiv.appendChild(p);
  p.classList.add("p");

  const p2 = document.createElement("p");
  p2.innerHTML = `${inputValue.value} liters  = ${literToGallon(
    inputValue.value
  ).toFixed(3)} gallons | ${inputValue.value} gallons = ${gallonToLiter(
    inputValue.value
  ).toFixed(3)} liters`;
  const secondPartsDiv = document.querySelector(".second-part");
  secondPartsDiv.appendChild(p2);
  p2.classList.add("p");

  const p3 = document.createElement("p");
  p3.innerHTML = `${inputValue.value} kilos  = ${kilogramToPound(
    inputValue.value
  ).toFixed(3)} pounds | ${inputValue.value} pounds = ${poundToKilogram(
    inputValue.value
  ).toFixed(3)} kilos`;
  const thirdPartsDiv = document.querySelector(".third-part");
  thirdPartsDiv.appendChild(p3);
  p3.classList.add("p");
});

function meterToFeet(a) {
  return a * 3.2808399;
}

function feetToMeter(a) {
  return a * 0.3048;
}

function literToGallon(a) {
  return a * 0.264172052;
}

function gallonToLiter(a) {
  return a * 3.78541178;
}

function kilogramToPound(a) {
  return a * 2.20462262;
}

function poundToKilogram(a) {
  return a * 0.45359237;
}
