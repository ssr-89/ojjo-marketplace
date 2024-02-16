const body = document.body;
const wrapper = document.getElementById("wrapper");
const lockPadding = document.querySelectorAll(".lock-padding");

const timeout = 300;

export function bodyLock() {
  const t = window.innerWidth - wrapper.offsetWidth + "px";
  let e = window.scrollY;
  if (lockPadding.length > 0)
    for (let e = 0; e < lockPadding.length; e++) {
      lockPadding[e].style.paddingRight = t;
    }
  (body.style.paddingRight = t),
    body.classList.add("lock"),
    (body.dataset.position = e),
    (body.style.top = -e + "px");
}

export function bodyUnLock() {
  setTimeout(function () {
    let t = parseInt(body.dataset.position, 10);
    if (((body.style.top = "auto"), lockPadding.length > 0))
      for (let t = 0; t < lockPadding.length; t++) {
        lockPadding[t].style.paddingRight = "0px";
      }
    (body.style.paddingRight = "0px"),
      body.classList.remove("lock"),
      window.scroll({ top: t, left: 0 }),
      body.removeAttribute("data-position");
  }, timeout);
}
