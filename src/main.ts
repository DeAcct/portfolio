import "./style/style.scss";

const $main = document.querySelector("main")!;
const $header = document.querySelector(".header")!;

document.addEventListener("scroll", () => {
  if (window.scrollY > $main.offsetTop) {
    $header.classList.add("header--filled");
  } else {
    $header.classList.remove("header--filled");
  }
});

const $naviOpenBtn = document.querySelector(".navi-open-btn")!;
const $navi = document.querySelector(".navi")!;
$naviOpenBtn.addEventListener("click", () => {
  $navi.classList.toggle("navi--opened");
});
