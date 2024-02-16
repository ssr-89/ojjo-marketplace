import { products as catalog } from "./product-list.js";

function createNavCard(parent, type, title) {
  const catalogContainer = document.querySelector('.catalog__container');
  catalogContainer.classList.add("catalog__open-card");

  const navCard = document.createElement("div");
  navCard.classList.add("catalog-card__nav");
  parent.appendChild(navCard);

  const navCardLinkMain = document.createElement('a');
  navCardLinkMain.classList.add('catalog-card__nav-link', 'link');
  navCardLinkMain.href = 'index.html';
  navCardLinkMain.innerHTML = "Главная";
  const navCardLinkCatalog = document.createElement('a');
  navCardLinkCatalog.classList.add('catalog-card__nav-link', 'link');
  navCardLinkCatalog.href = 'catalog.html';
  navCardLinkCatalog.innerHTML = "Каталог";
  const navCardLinkCategory = document.createElement('a');
  navCardLinkCategory.classList.add('catalog-card__nav-link', 'link');
  navCardLinkCategory.href = '#';
  navCardLinkCategory.innerHTML = "Категории";
  const navCardLinkCurrent = document.createElement('span');
  navCardLinkCurrent.classList.add('catalog-card__nav-link', 'catalog-card__nav-link--last');
  navCardLinkCurrent.innerHTML = type + " " + title;
  const navCardSlash = document.createElement('span');
  navCardSlash.classList.add('catalog-card__slash');
  navCardSlash.innerHTML = "/";


  navCard.append(navCardLinkMain, navCardSlash.cloneNode(true), navCardLinkCatalog, navCardSlash.cloneNode(true), navCardLinkCategory, navCardSlash.cloneNode(true), navCardLinkCurrent);

  if (parent.innerHTML === "") {
    catalogContainer.classList.remove("catalog__open-card");
  }

  return parent;
}

function createCardProduct(
  parent,
  { imgOne, imgTwo, imgThree, imgFour },
  type,
  title,
  price
) {
  const card = document.createElement("div");
  card.classList.add("catalog-card__box");
  parent.appendChild(card);

  /* box-images */
  const cardImages = document.createElement("div");
  cardImages.classList.add(
    "catalog-card__box-item",
    "catalog-card__box-item--images"
  );
  card.appendChild(cardImages);

  const cardImgOne = document.createElement("img");
  cardImgOne.classList.add("catalog-card__img", "img");
  if (imgOne !== null) {
    cardImgOne.src = imgOne;
  } else {
    cardImgOne.src = "img/Нет изображения 280х220.jpg";
  }
  cardImgOne.alt = "Драгоценности";
  cardImages.appendChild(cardImgOne);
  const cardImgTwo = document.createElement("img");
  cardImgTwo.classList.add("catalog-card__img", "img");
  if (imgTwo !== null) {
    cardImgTwo.src = imgTwo;
  } else {
    cardImgTwo.src = "img/Нет изображения 280х220.jpg";
  }
  cardImgTwo.alt = "Драгоценности";
  cardImages.appendChild(cardImgTwo);
  const cardImgThree = document.createElement("img");
  cardImgThree.classList.add("catalog-card__img", "img");
  if (imgThree !== null) {
    cardImgThree.src = imgTwo;
  } else {
    cardImgThree.src = "img/Нет изображения 280х220.jpg";
  }
  cardImgThree.alt = "Драгоценности";
  cardImages.appendChild(cardImgThree);
  const cardImgFour = document.createElement("img");
  cardImgFour.classList.add("catalog-card__img", "img");
  if (imgFour !== null) {
    cardImgFour.src = imgFour;
  } else {
    cardImgFour.src = "img/Нет изображения 280х220.jpg";
  }
  cardImgFour.alt = "Драгоценности";
  cardImages.appendChild(cardImgFour);

  /* box-content */
  const cardContent = document.createElement("div");
  cardContent.classList.add(
    "catalog-card__box-item",
    "catalog-card__box-item--content"
  );
  card.appendChild(cardContent);

  const cardContentTitle = document.createElement("h2");
  cardContentTitle.classList.add("catalog-card__title", "title");
  cardContentTitle.innerHTML = type + " " + title;
  cardContent.appendChild(cardContentTitle);

  const cardContentPlacement = document.createElement("div");
  cardContentPlacement.classList.add("catalog-card__placement");
  cardContent.appendChild(cardContentPlacement);
  const cardContentPlacementElemOne = document.createElement("span");
  cardContentPlacementElemOne.classList.add("catalog-card__elem");
  cardContentPlacementElemOne.innerHTML = "Категория:";
  cardContentPlacement.appendChild(cardContentPlacementElemOne);
  const cardContentPlacementElemTwo = document.createElement("span");
  cardContentPlacementElemTwo.classList.add("catalog-card__elem");
  cardContentPlacementElemTwo.innerHTML = type;
  cardContentPlacement.appendChild(cardContentPlacementElemTwo);
  const cardContentPlacementElemThree = document.createElement("span");
  cardContentPlacementElemThree.classList.add("catalog-card__elem");
  cardContentPlacementElemThree.innerHTML = "Бренд:";
  cardContentPlacement.appendChild(cardContentPlacementElemThree);
  const cardContentPlacementElemFour = document.createElement("span");
  cardContentPlacementElemFour.classList.add("catalog-card__elem");
  cardContentPlacementElemFour.innerHTML = title;
  cardContentPlacement.appendChild(cardContentPlacementElemFour);

  const cardContentDescriptions = document.createElement("div");
  cardContentDescriptions.classList.add("catalog-card__descriptions");
  cardContent.appendChild(cardContentDescriptions);

  const cardContentDescriptionsOne = document.createElement("p");
  cardContentDescriptionsOne.classList.add("catalog-card__descr", "text");
  cardContentDescriptionsOne.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.";
  cardContentDescriptions.appendChild(cardContentDescriptionsOne);
  const cardContentDescriptionsTwo = document.createElement("p");
  cardContentDescriptionsTwo.classList.add("catalog-card__descr", "text");
  cardContentDescriptionsTwo.innerHTML =
    "Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. Et nulla sit convallis orci est, fames sit luctus lacus.";
  cardContentDescriptions.appendChild(cardContentDescriptionsTwo);

  const cardContentPrice = document.createElement("p");
  cardContentPrice.classList.add("catalog-card__price", "text");
  cardContentPrice.innerHTML = price.toLocaleString("ru-RU") + " " + "₽";
  cardContent.appendChild(cardContentPrice);

  const cardContentBtns = document.createElement("div");
  cardContentBtns.classList.add("catalog-card__btns");
  cardContent.appendChild(cardContentBtns);

  const cardContentBtnsBuy = document.createElement("button");
  cardContentBtnsBuy.classList.add(
    "catalog-card__btn",
    "catalog-card__btn--buy",
    "btn"
  );
  cardContentBtnsBuy.innerHTML = "Купить";
  cardContentBtns.appendChild(cardContentBtnsBuy);

  const cardContentBtnsCart = document.createElement("button");
  cardContentBtnsCart.classList.add(
    "catalog-card__btn",
    "catalog-card__btn--cart",
    "btn"
  );
  cardContentBtnsCart.innerHTML = "Добавить в&nbsp;корзину";
  cardContentBtns.appendChild(cardContentBtnsCart);

  return parent;
}

export function createCardProductList(parent, productCard, { cardId, brand, type, price, img }) {
  const productListCard = document.createElement("li");
  productListCard.classList.add("product-list__card");
  productListCard.id = cardId;
  parent.appendChild(productListCard);

  const productListCardLink = document.createElement("a");
  productListCardLink.classList.add("product-list__card-link", "link");
  productListCardLink.href = "#product-card";
  productListCard.appendChild(productListCardLink);

  const productListCardLinkImg = document.createElement("img");
  productListCardLinkImg.classList.add("product-list__img", "img");
  productListCardLinkImg.alt = "Драгоценности";
  if (img !== null) {
    productListCardLinkImg.src = img;
  } else {
    productListCardLinkImg.src = 'img/Нет изображения 280х220.jpg';
  }
  const productListCardLinkName = document.createElement("span");
  productListCardLinkName.classList.add("product-list__name");
  productListCardLinkName.innerHTML = type;
  const productListCardLinkBrand = document.createElement("span");
  productListCardLinkBrand.innerHTML = brand;
  productListCardLinkBrand.classList.add("product-list__brand");
  const productListCardLinkPrice = document.createElement("span");
  productListCardLinkPrice.innerHTML =
    price.toLocaleString("ru-RU") + " " + "₽";
  productListCardLinkPrice.classList.add("product-list__price");

  productListCardLink.append(
    productListCardLinkImg,
    productListCardLinkName,
    productListCardLinkBrand,
    productListCardLinkPrice
  );

  productListCardLink.addEventListener("click", function () {

    console.log(typeof (cardId));

    const currentCard = catalog.find(card => card.id === Number(cardId));
    console.log(currentCard);

    productCard.innerHTML = "";

    createNavCard(productCard, currentCard.product_type, currentCard.title);

    createCardProduct(productCard, { imgOne: currentCard.image, imgTwo: currentCard.image, imgThree: currentCard.image, imgFour: currentCard.image }, currentCard.product_type, currentCard.title, Number(currentCard.price));
  });

  return parent;
}
