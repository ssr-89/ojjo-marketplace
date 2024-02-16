/* SHOW MORE SECTION DESIGN */
export function showMore(btn, items, text) {

  btn.addEventListener("click", function () {
    items.forEach(item => {
      if (!item.classList.contains("show-items")) {
        item.classList.add("show-items");
        btn.textContent = "Скрыть";
      } else if (item.classList.contains("show-items")) {
        item.classList.remove("show-items");
        btn.textContent = text;
      }
    });
  });
}
