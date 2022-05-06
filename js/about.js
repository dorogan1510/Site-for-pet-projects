/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./resources/js/about.js ***!
  \*******************************/
var aboutSwitcher = document.getElementById('about-switcher');

aboutSwitcher.onclick = function () {
  var theme = document.getElementById('about');

  if (theme.getAttribute('href') == './css/about.css') {
    theme.href = './css/about-dark.css';
  } else {
    theme.href = './css/about.css';
  }
};

aboutSwitcher.addEventListener('click', function () {
  aboutSwitcher.classList.toggle('switch-on');
});
/******/ })()
;