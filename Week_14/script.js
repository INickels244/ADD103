const rootEl = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
    rootEl.setAttribute('data-bs-theme', theme);
    localStorage.setItem('moraineTheme', theme);

    if (themeToggle) {
        themeToggle.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
        themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
    }
}

const savedTheme = localStorage.getItem('moraineTheme');
setTheme(savedTheme === 'dark' ? 'dark' : 'light');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const nextTheme = rootEl.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    });
}

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        formStatus.textContent = 'Thank you! Your trail note has been recorded for this visit.';
        contactForm.reset();
    });
}
