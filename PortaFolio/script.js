document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const roles = ["Desarrollador en C#", "Programador Kotlin", "Estudiante de Ingeniería en Sistemas"];
let index = 0;
setInterval(() => {
    document.getElementById('dynamic-role').textContent = roles[index];
    index = (index + 1) % roles.length;
}, 3000);

const elements = document.querySelectorAll('.scroll-animation');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'animate__animated', 'animate__fadeIn');
        } else {
            entry.target.classList.remove('animate__animated', 'animate__fadeIn');
        }
    });
}, options);

elements.forEach(element => {
    observer.observe(element);
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    navbar.classList.toggle('scrolled', scrollPosition > 50);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight) {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('animate__animated', 'animate__pulse');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('animate__animated', 'animate__pulse');
    });
});

const icons = document.querySelectorAll('.card-title i');
icons.forEach(icon => {
    icon.classList.add('animate__animated', 'animate__bounceIn');
});

const projectImages = document.querySelectorAll('.carousel-item img');
projectImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    successMessage.classList.add('animate__animated', 'animate__fadeIn');
    form.reset();

    setTimeout(() => {
        successMessage.style.display = 'none';
        successMessage.classList.remove('animate__fadeIn');
    }, 3000);
});

document.querySelectorAll('.navbar-nav a').forEach(navItem => {
    navItem.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

window.addEventListener('scroll', () => {
    const heroOverlay = document.querySelector('.hero-overlay');
    const scrollPosition = window.scrollY;
    heroOverlay.style.opacity = 1 - scrollPosition / 600;
});
