// Change theme

let indexSwitcher = document.getElementById('index-switcher')

indexSwitcher.onclick = () => {
  let theme = document.getElementById('index')

  if (theme.getAttribute('href') == './css/theme-light.css') {
    theme.href = './css/theme-dark.css'
  } else {
    theme.href = './css/theme-light.css'
  }
}

// Change switcher position
indexSwitcher.addEventListener('click', function () {
  indexSwitcher.classList.toggle('switch-on')
  localStorage.setItem(
    'theme',
    document.getElementById('index').getAttribute('href')
  )
  localStorage.setItem('switcher', indexSwitcher.classList.value)
})

// Local storage
let activeTheme = localStorage.getItem('theme')
let switcherPosition = localStorage.getItem('switcher')

if (activeTheme === null) {
  document.getElementById('index').href = './css/theme-light.css'
  indexSwitcher.className.value = 'switch-btn'
} else {
  document.getElementById('index').href = activeTheme
  indexSwitcher.className.value = switcherPosition
}

localStorage.removeItem('theme')
