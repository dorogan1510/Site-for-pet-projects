// Change theme

let indexSwitcher = document.getElementById('index-switcher')

indexSwitcher.onclick = () => {
    let theme = document.getElementById('index')
    const githubIconColor = document.getElementById('github_icon')
    const externalIconColor = document.getElementById('external_icon')

    if (theme.getAttribute('href') == './css/index.css') {
        theme.href = './css/index-dark.css'
        githubIconColor.src = './resources/img/GitHub_light.png'
        externalIconColor.src = './resources/img/External_link_light.png'
    } else {
        theme.href = './css/index.css'
        githubIconColor.src = './resources/img/GitHub_dark.png'
        externalIconColor.src = './resources/img/External_link_dark.png'
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
