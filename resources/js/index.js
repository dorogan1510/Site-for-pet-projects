// Change theme

let indexSwitcher = document.getElementById('index-switcher')

indexSwitcher.onclick = () => {
    let theme = document.getElementById('index')
    const githubIconColor = document.querySelectorAll('.github-icon')
    const externalIconColor = document.querySelectorAll('.external-icon')
    const footerGithub = document.getElementById('github')
    const telegramGithub = document.getElementById('telegram')
    const whatsappGithub = document.getElementById('whatsapp')
    const skypeGithub = document.getElementById('skype')
    const linkedinGithub = document.getElementById('linkedin')

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

        footerGithub.src = './resources/img/github_light2.png'
        telegramGithub.src = './resources/img/telegram_light.png'
        whatsappGithub.src = './resources/img/whatsapp_light.png'
        skypeGithub.src = './resources/img/skype_light.png'
        linkedinGithub.src = './resources/img/linkedin_light.png'

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
indexSwitcher.addEventListener('click', function () {
    indexSwitcher.classList.toggle('switch-on')
})
