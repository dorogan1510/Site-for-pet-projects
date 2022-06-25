/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./resources/js/about.js ***!
  \*******************************/
// Change theme
var aboutSwitcher = document.getElementById('about-switcher');

aboutSwitcher.onclick = function () {
  var theme = document.getElementById('about');
  var sun = document.getElementById('sun');
  var moon = document.getElementById('moon');

  if (theme.getAttribute('href') == './css/about.css') {
    theme.href = './css/about-dark.css';
    sun.classList.toggle('hide-icon');
    moon.classList.toggle('hide-icon');
  } else {
    theme.href = './css/about.css';
    sun.classList.toggle('hide-icon');
    moon.classList.toggle('hide-icon');
  }
}; // Change switcher position


aboutSwitcher.addEventListener('click', function () {
  aboutSwitcher.classList.toggle('switch-on');
  localStorage.setItem('about-theme', document.getElementById('about').getAttribute('href'));
  localStorage.setItem('switcher', aboutSwitcher.classList.value);
}); // Local storage

var activeTheme = localStorage.getItem('about-theme');
var switcherPosition = localStorage.getItem('switcher');

if (activeTheme === null) {
  document.getElementById('about').href = './css/about.css';
  aboutSwitcher.className.value = 'switch-btn';
} else {
  document.getElementById('about').href = activeTheme;
  aboutSwitcher.className = switcherPosition;
}
/******/ })()
;