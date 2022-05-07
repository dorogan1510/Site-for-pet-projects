// Change theme

let indexSwitcher = document.getElementById('index-switcher')

indexSwitcher.onclick = () => {
  let theme = document.getElementById('index')

  if (theme.getAttribute('href') == './css/index.css') {
    theme.href = './css/index-dark.css'
  } else {
    theme.href = './css/index.css'
  }
}

// Change switcher position
indexSwitcher.addEventListener('click', function () {
  indexSwitcher.classList.toggle('switch-on')
  localStorage.setItem(
    'index-theme',
    document.getElementById('index').getAttribute('href')
  )
  localStorage.setItem('switcher', indexSwitcher.classList.value)
})

// Local storage
let activeTheme = localStorage.getItem('index-theme')
let switcherPosition = localStorage.getItem('switcher')

if (activeTheme === null) {
  document.getElementById('index').href = './css/index.css'
  indexSwitcher.className.value = 'switch-btn'
} else {
  document.getElementById('index').href = activeTheme
  indexSwitcher.className = switcherPosition
}

// localStorage.removeItem('index-theme')
// localStorage.removeItem('switcher')
