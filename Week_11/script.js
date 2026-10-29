const themeToggleBtn = document.getElementById('themeToggleBtn');
const statusText = document.getElementById('statusText');
const bodyElement = document.body;

function toggleDarkMode() {
    bodyElement.classList.toggle('dark-mode');

    if (bodyElement.classList.contains('dark-mode')) {
        statusText.textContent = 'LIGHT SWITCH: OFF';
    } else {
        statusText.textContent = 'LIGHT SWITCH: ON';
    }
}

themeToggleBtn.addEventListener('click', toggleDarkMode);
