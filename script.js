// Get elements
const projectGrid = Array.from(document.getElementsByClassName('projects-grid'))[0];
const projects = Array.from(document.getElementsByClassName('project'));
const linkedin = document.getElementById('linkedin');
const instagram = document.getElementById('instagram');
const github = document.getElementById('github');
const email = document.getElementById('email');

// Define links
const linkedinLink = 'https://www.linkedin.com/in/victorpowilleit/'
const instagramLink = 'https://www.instagram.com/_victor.powilleit_/'
const githubLink = 'https://github.com/victorpowilleit'
const emailLink = 'mailto:contato@vpdev.com.br'

// Auxiliary functions
function findStyleById(id) {
    for (const sheet of Array.from(document.styleSheets)) {
        try {
            for (const rule of sheet.cssRules) {
                if (rule.selectorText === `#${id}`) {
                    return rule.style
                }
            }
        } catch (e) {
        }
    }
    const el = document.getElementById(id)
    return el ? el.style : null
}

function setLink(element, link) {
    element.onclick = () => {
        window.open(link, '_blank');
    }
}

// Setting Links
setLink(linkedin, linkedinLink);
setLink(instagram, instagramLink);
setLink(email, emailLink);
setLink(github, githubLink);

// Defining dynamic styles and animations
const arrowDownStyles = findStyleById('arrow-down');
const delayStep = 0.1
let animated = false
window.onscroll = () => {
    const opacity = Math.max(0, Math.min(100, 100 - ((window.scrollY - 10) * 0.75)))
    const targetScrollPosition = projectGrid.getBoundingClientRect().top;
    arrowDownStyles.opacity = `${opacity}%`;
    if (animated && opacity > 1) {
        animated = false
        projects.forEach(project => {
            project.classList.remove('animated')
        })
    }
    if (!animated) {
        if (window.innerHeight > targetScrollPosition + 100) {
            projects.forEach((project, index) => {
                project.classList.add('animated')
                project.style.animationDelay = `${index * delayStep}s`
            })
            animated = true
        }
    }
}