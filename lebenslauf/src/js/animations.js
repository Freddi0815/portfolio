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

// Smooth scroll navigation
document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.site-nav a');

const observerOptions = {
  root: null,
  rootMargin: '-50% 0px -50% 0px',
  threshold: 0
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => navObserver.observe(section));

// Section fade-in on scroll
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

sections.forEach(section => sectionObserver.observe(section));

// Scroll to top button
const scrollBtn = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Parallax effect on profile card
const profileCard = document.querySelector('.profile-card');

document.addEventListener('mousemove', (e) => {
  if (!profileCard || window.innerWidth < 960) return;
  
  const rect = profileCard.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const deltaX = (e.clientX - centerX) / 30;
  const deltaY = (e.clientY - centerY) / 30;
  
  profileCard.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
});

profileCard?.addEventListener('mouseleave', () => {
  profileCard.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
});

// Skill items stagger animation
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
});

// Glitch effect on hover for section titles
document.querySelectorAll('.section-title').forEach(title => {
  title.addEventListener('mouseenter', () => {
    title.style.animation = 'none';
    setTimeout(() => {
      title.style.animation = 'glitch 0.3s ease';
    }, 10);
  });
});

console.log('%c🎮 Welcome to Benjamin\'s Portfolio!', 'color: #b829ff; font-size: 20px; font-weight: bold;');