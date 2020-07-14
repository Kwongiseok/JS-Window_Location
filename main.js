"use strict";

const target = document.querySelector(".target");
const vertical = document.querySelector(".vertical");
const horozontal = document.querySelector(".horozontal");
const tag = document.querySelector(".tag");
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  vertical.style.transform = `translateX(${x}px)`;
  horozontal.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x - targetHalfWidth}px,${
    y - targetHalfHeight
  }px)`;
  tag.style.transform = `translate(${x}px,${y}px)`;
  tag.innerHTML = `${x}px, ${y}px`;
});
