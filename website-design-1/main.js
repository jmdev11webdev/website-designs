const sections = Array.from(document.querySelectorAll('section'));
const scrollTopBtn = document.querySelector('.scroll-top-btn');
const homeSection = document.querySelector('#home');

/* show / hide button when leaving home */
const observer = new IntersectionObserver(
    ([entry]) => {
        scrollTopBtn.classList.toggle('show', !entry.isIntersecting);
    },
    { threshold: 0.6 }
);

observer.observe(homeSection);

/* scroll up ONE section at a time */
scrollTopBtn.addEventListener('click', () => {
    const scrollPosition = window.scrollY;

    for (let i = sections.length - 1; i >= 0; i--) {
        const sectionTop = sections[i].offsetTop;

        if (sectionTop < scrollPosition - 10) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
});

function opensidebar() {
  document.getElementById("mySidebar").style.display = "block";
}

function closesidebar() {
  document.getElementById("mySidebar").style.display = "none";
}