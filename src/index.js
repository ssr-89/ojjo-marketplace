import './index.html';
import './index.scss';
// import { mult, sum } from './modules/calc';

import { changeBgHeader, scrollLink, scrollLogoLink } from "./modules/scroll.js";
import { tabsShow } from "./modules/tabs.js";
import { showMore } from "./modules/showmore.js";
import { showNav } from "./modules/burger-menu.js";

const designBtn = document.querySelector(".design__btn");
const designItems = document.querySelectorAll(".design__item");
const textShow = "Читать наш блок"

changeBgHeader();
scrollLink();
scrollLogoLink();
showMore(designBtn, designItems, textShow);
tabsShow();
showNav();


const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

document.documentElement.style.setProperty('--height-header', headerHeight + "px");
