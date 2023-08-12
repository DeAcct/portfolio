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

const $naviOpenBtn = document.querySelector(
  ".navi-open-btn"
) as HTMLButtonElement;
const $navi = document.querySelector(".navi") as HTMLElement;
$naviOpenBtn.addEventListener("click", () => {
  $navi.classList.toggle("navi--opened");
  $naviOpenBtn.classList.toggle("navi-open-btn--open");
});
