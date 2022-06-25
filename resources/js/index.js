// Change theme

let indexSwitcher = document.getElementById('index-switcher')

indexSwitcher.onclick = () => {
    let theme = document.getElementById('index')
    const githubIconColor = document.querySelectorAll('.github-icon')
    const externalIconColor = document.querySelectorAll('.external-icon')
    const sun = document.getElementById('sun')
    const moon = document.getElementById('moon')

    if (theme.getAttribute('href') == './css/index.css') {
        theme.href = './css/index-dark.css'
        githubIconColor.forEach(
            item => (item.src = './resources/img/GitHub_light.png')
        )
        externalIconColor.forEach(
            item => (item.src = './resources/img/External_link_light.png')
        )
        sun.classList.toggle('hide-icon')
        moon.classList.toggle('hide-icon')
    } else {
        theme.href = './css/index.css'
        githubIconColor.forEach(
            item => (item.src = './resources/img/GitHub_dark.png')
        )
        externalIconColor.forEach(
            item => (item.src = './resources/img/External_link_dark.png')
        )
        sun.classList.toggle('hide-icon')
        moon.classList.toggle('hide-icon')
        // sun.classList.revome('show-icon').add('hide-icon')
        // moon.classList.remove('hide-icon').add('show-icon')
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
