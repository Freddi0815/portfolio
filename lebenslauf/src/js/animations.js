// This file contains JavaScript code for animations and transitions to enhance user experience on the website.

document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.animate');

    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
    });

    const hoverElements = document.querySelectorAll('.hover-effect');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('hovered');
        });

        element.addEventListener('mouseleave', () => {
            element.classList.remove('hovered');
        });
    });
});