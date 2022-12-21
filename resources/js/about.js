// Change theme
let aboutSwitcher = document.getElementById('about-switcher')

aboutSwitcher.onclick = () => {
    let theme = document.getElementById('about')

    const sun = document.getElementById('sun')
    const moon = document.getElementById('moon')

    const footerGithub = document.getElementById('github')
    const telegramGithub = document.getElementById('telegram')
    const whatsappGithub = document.getElementById('whatsapp')
    const skypeGithub = document.getElementById('skype')
    const linkedinGithub = document.getElementById('linkedin')

    if (theme.getAttribute('href') == './css/about.css') {
        theme.href = './css/about-dark.css'

        footerGithub.src = './resources/img/github_light2.png'
        telegramGithub.src = './resources/img/telegram_light.png'
        whatsappGithub.src = './resources/img/whatsapp_light.png'
        skypeGithub.src = './resources/img/skype_light.png'
        linkedinGithub.src = './resources/img/linkedin_light.png'

        sun.classList.toggle('hide-icon')
        moon.classList.toggle('hide-icon')
    } else {
        theme.href = './css/about.css'

        footerGithub.src = './resources/img/github_dark2.png'
        telegramGithub.src = './resources/img/telegram_dark.svg'
        whatsappGithub.src = './resources/img/whatsapp_dark.svg'
        skypeGithub.src = './resources/img/skype_dark.svg'
        linkedinGithub.src = './resources/img/linkedin_dark.png'

        sun.classList.toggle('hide-icon')
        moon.classList.toggle('hide-icon')
    }
}

// Change switcher position
aboutSwitcher.addEventListener('click', function () {
    aboutSwitcher.classList.toggle('switch-on')
})
