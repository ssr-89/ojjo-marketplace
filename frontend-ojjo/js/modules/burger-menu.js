import { bodyLock, bodyUnLock } from "./bodylock.js";
export function showNav() {
  const burger = document.getElementById("burger");
  const nav = document.querySelector(".header__nav");
  const links = document.querySelectorAll(".close-menu");

  function menuOpenClose() {
    if (!nav.classList.contains("show-nav")) {
      nav.classList.add("show-nav");
      burger.classList.add("open-menu");
      bodyLock();
    } else {
      nav.classList.remove("show-nav");
      burger.classList.remove("open-menu");
      bodyUnLock();
    }
    return;
  }

  burger.addEventListener("click", function () {
    menuOpenClose();
  });
  links.forEach(e => {
    e.addEventListener("click", () => {
      menuOpenClose();
    })
  })
}
