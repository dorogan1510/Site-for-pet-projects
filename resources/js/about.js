// Change theme
let aboutSwitcher = document.getElementById('about-switcher')

aboutSwitcher.onclick = () => {
    let theme = document.getElementById('about')
    const sun = document.getElementById('sun')
    const moon = document.getElementById('moon')

    if (theme.getAttribute('href') == './css/about.css') {
        theme.href = './css/about-dark.css'
        sun.classList.toggle('hide-icon')
        moon.classList.toggle('hide-icon')
    } else {
        theme.href = './css/about.css'
        sun.classList.toggle('hide-icon')
        moon.classList.toggle('hide-icon')
    }
}

// Change switcher position
aboutSwitcher.addEventListener('click', function () {
    aboutSwitcher.classList.toggle('switch-on')

    localStorage.setItem(
        'about-theme',
        document.getElementById('about').getAttribute('href')
    )
    localStorage.setItem('switcher', aboutSwitcher.classList.value)
})

// Local storage
let activeTheme = localStorage.getItem('about-theme')
let switcherPosition = localStorage.getItem('switcher')

if (activeTheme === null) {
    document.getElementById('about').href = './css/about.css'
    aboutSwitcher.className.value = 'switch-btn'
} else {
    document.getElementById('about').href = activeTheme
    aboutSwitcher.className = switcherPosition
}
