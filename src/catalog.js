import './catalog.html';
import './index.scss';

import { showNav } from "./modules/burger-menu.js";
import { showMore } from "./modules/showmore.js";
import { products } from "./modules/product-list.js";
import { createCardProductList } from "./modules/create-element.js";

const productCard = document.getElementById("product-card");
const productList = document.getElementById("product-list");

for (let i = 0; i < products.length; i++) {
  createCardProductList(productList, productCard, { cardId: products[i].id, brand: products[i].title, type: products[i].product_type, price: Number(products[i].price), img: products[i].image })

  console.log(typeof (products[i].price));
}


// show header menu
showNav();

// adding padding-top
const headerHeight = document.getElementById("header").offsetHeight;
const containerCatalog = document.querySelector(".catalog__container");

document.documentElement.style.setProperty('--height-header', headerHeight + "px");

containerCatalog.style.paddingTop = headerHeight + 60 + "px";


// dropdown
const selects = document.querySelectorAll('.select');

function closeAllSelects() {
  selects.forEach(select => {
    select.classList.remove('is-active');
  });
}

function select(selects) {
  selects.forEach(select => {
    const selectHeader = select.querySelector('.select__header');
    const selectItems = select.querySelectorAll(".select__item");
    const selectCurrent = selectHeader.querySelector(".select__current");

    selectHeader.addEventListener("click", () => {
      if (select.classList.contains("is-active")) {
        select.classList.remove('is-active');
      } else {
        closeAllSelects();
        select.classList.add('is-active');
      }
    })

    selectItems.forEach(item => {
      item.addEventListener("click", function () {
        let text = this.innerText;
        selectCurrent.innerText = text;
        select.classList.remove('is-active');
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".select, .select__header, .select__current, .select__item")) {
        closeAllSelects();
      }
    });
  });
}

select(selects);

// show all cards
const more = document.getElementById('catalog-more');
const items = document.querySelectorAll('.product-list__card');
const text = 'Покажите ещё';

showMore(more, items, text);

// show more details
function readMore(text, btn, overlay) {
  if (!text.classList.contains("catalog-details__more--show")) {
    text.classList.add("catalog-details__more--show");
    btn.innerHTML = "Скрыть";
    overlay.classList.add("hide");
  } else {
    text.classList.remove("catalog-details__more--show");
    btn.innerHTML = "Читать полностью";
    overlay.classList.remove("hide");
  }
}

const detailsMoreText = document.querySelector(".catalog-details__more");
const detailsMoreBtn = document.getElementById("details-more-btn");
const detailsOverlay = document.querySelector(".catalog-details__overlay");

detailsMoreBtn.addEventListener("click", function () {
  readMore(detailsMoreText, this, detailsOverlay);
});
