// Get elements
const projectGrid = Array.from(document.getElementsByClassName('projects-grid'))[0];
const projects = Array.from(document.getElementsByClassName('project'));
const hoverTargets = Array.from(document.getElementsByClassName('cursor-interaction'))
const clickTargets = Array.from(document.getElementsByClassName('cursor-click'))
const linkedin = document.getElementById('linkedin');
const instagram = document.getElementById('instagram');
const github = document.getElementById('github');
const email = document.getElementById('email');
const cursor = document.getElementById('cursor');

// Define links
const linkedinLink = 'https://www.linkedin.com/in/victorpowilleit/'
const instagramLink = 'https://www.instagram.com/_victor.powilleit_/'
const githubLink = 'https://github.com/victorpowilleit'
const emailLink = 'mailto:contato@vpdev.com.br'

// Auxiliary Variables
let lastCursorY

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

function updateCursorPosition(e=null){
    if(e){
        cursorX = e.clientX;
        cursorY = lastCursorY = e.clientY;
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY+window.scrollY}px`;
    } else {
        if(lastCursorY){
            cursor.style.top = `${lastCursorY + window.scrollY}px`;
        }
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
    updateCursorPosition();
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

let cursorX, cursorY;
//Cursor - Set Hover Event
hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => cursor.classList.add('transparent'))
    target.addEventListener('mouseleave', () => cursor.classList.remove('transparent'))
})
clickTargets.forEach(target => {
    target.addEventListener('mouseenter', () => cursor.classList.add('click-me'))
    target.addEventListener('mouseleave', () => cursor.classList.remove('click-me'))
})

// Cursor - Set mouse position update
window.addEventListener('mousemove', e => {
    updateCursorPosition(e);
})
