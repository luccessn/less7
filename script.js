"use strict";

let nvmenu = document.getElementById("navmenu");
let burgerbar = document.getElementById("burgerbr");
let social = document.getElementById("social");
// let uptosky = document.querySelector(".up");
burgerbar.addEventListener("click", function () {
  nvmenu.classList.toggle("newnav");
  burgerbar.classList.toggle("activebrg");
  social.classList.toggle("newsocial");
});
let header = document.getElementById("all");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    header.classList.add("newheader");
  } else {
    header.classList.remove("newheader");
  }
});
let fb = document.getElementById("fb").setAttribute("target", "_blank");
let tw = document.getElementById("tw").setAttribute("target", "_blank");
let yt = document.getElementById("yt").setAttribute("target", "_blank");
let ins = document.getElementById("ins").setAttribute("target", "_blank");

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 300) {
//     uptosky.style.display = "flex";
//   } else {
//     uptosky.style.display = "none";
//   }
// });
// uptosky.addEventListener("click", function () {
//   window.scrollTo(0, 0);
// });
