const projectGrid = Array.from(document.getElementsByClassName('projects-grid'))[0];
const projects = Array.from(document.getElementsByClassName('project'));

const delayStep = 0.1
const totalDelay = projects.length * delayStep;

window.onscroll = () => {
    const targetScrollPosition = projectGrid.getBoundingClientRect().top;
    if (window.innerHeight > targetScrollPosition + 100) {
        projects.forEach((project, index) => {
            project.classList.add('animated');
            project.style.animationDelay = `${totalDelay - (index * delayStep)}s`
        })
        window.onscroll = null
    }
}