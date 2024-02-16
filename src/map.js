import './map.html';
import './index.scss';

import { showNav } from "./modules/burger-menu.js";

showNav();
const headerHeight = document.getElementById("header").offsetHeight;
const containerMap = document.querySelector(".map__container");

document.documentElement.style.setProperty('--height-header', headerHeight + "px");

containerMap.style.paddingTop = headerHeight + 60 + "px";

