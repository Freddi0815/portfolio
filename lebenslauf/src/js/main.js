// This file contains the main JavaScript functionality for the website, including event listeners and DOM manipulation.

document.addEventListener('DOMContentLoaded', () => {
    // Initialize any necessary functions or event listeners here
    const toggleMenuButton = document.getElementById('toggle-menu');
    const menu = document.getElementById('menu');

    if (toggleMenuButton) {
        toggleMenuButton.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Additional functionality can be added here
});