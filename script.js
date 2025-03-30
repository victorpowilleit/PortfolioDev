const projectGrid = Array.from(document.getElementsByClassName('projects-grid'))[0];
const projects = Array.from(document.getElementsByClassName('project'));

const arrowDown = document.getElementById('arrow-down');

const linkedin = document.getElementById('linkedin');
const linkedinLink = 'https://www.linkedin.com/in/victorpowilleit/'
const instagram = document.getElementById('instagram');
const instagramLink = 'https://www.instagram.com/_victor.powilleit_/'
const github = document.getElementById('github');
const githubLink = 'https://github.com/victorpowilleit'
const email = document.getElementById('email');
const emailLink = 'mailto:contato@vpdev.com.br'

linkedin.onclick = () => {
    window.open(linkedinLink, '_blank')
}
github.onclick = () => {
    window.open(githubLink, '_blank')
}
instagram.onclick = () => {
    window.open(instagramLink, '_blank')
}
email.onclick = () => {
    window.open(emailLink, '_blank')
}

const delayStep = 0.1
const totalDelay = projects.length * delayStep;

let animated = false

window.onscroll = () => {
    const targetScrollPosition = projectGrid.getBoundingClientRect().top;
    if (window.scrollY > 0) {
        arrowDown.style.opacity = `${100 - (window.scrollY*0.75)}%`
    }
    if (!animated) {
        if (window.innerHeight > targetScrollPosition + 100) {
            projects.forEach((project, index) => {
                project.classList.add('animated')
                project.style.animationDelay = `${totalDelay - (index * delayStep)}s`
            })
            animated = true
            // window.onscroll = null
        }
    }
}