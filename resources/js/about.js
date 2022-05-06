let aboutSwitcher = document.getElementById('about-switcher')

aboutSwitcher.onclick = () => {
  let theme = document.getElementById('about')

  if (theme.getAttribute('href') == './css/about.css') {
    theme.href = './css/about-dark.css'
  } else {
    theme.href = './css/about.css'
  }
}

aboutSwitcher.addEventListener('click', function () {
  aboutSwitcher.classList.toggle('switch-on')
})
