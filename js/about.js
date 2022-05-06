/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./resources/js/about.js ***!
  \*******************************/
var aboutSwitcher = document.getElementById('about-switcher');

aboutSwitcher.onclick = function () {
  var theme = document.getElementById('about');

  if (theme.getAttribute('href') == './css/theme-light.css') {
    theme.href = './css/theme-dark.css';
  } else {
    theme.href = './css/theme-light.css';
  }
};

aboutSwitcher.addEventListener('click', function () {
  aboutSwitcher.classList.toggle('switch-on');
});
/******/ })()
;