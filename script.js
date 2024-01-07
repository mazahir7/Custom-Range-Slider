"use strict";

const range = document.getElementById("range");
const btn = document.getElementById("btn");
const userMinValue = document.getElementById("min");
const userMaxValue = document.getElementById("max");

btn.addEventListener("click", function () {
  console.log(userMinValue.value, userMaxValue.value);

  range.setAttribute("min", userMinValue.value);
  range.setAttribute("max", userMaxValue.value);
});

range.addEventListener("input", function (e) {

  const value = +e.target.value;

  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
  const labelWidth = getComputedStyle(label).getPropertyValue("width");

  const numRangeWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
  const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

  const min = +e.target.min;
  const max = +e.target.max;


  const leftValue = value * (numRangeWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10);

  // console.log(leftValue);

  label.style.left = `${leftValue}px`;

  label.innerHTML = value;
});

function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}