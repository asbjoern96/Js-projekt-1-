//Variablerne er her:
const navbar = document.querySelector('.topnav');
const dropdownKnapper = document.querySelectorAll('[data-dropdown-btn]');
const tojKnap = document.querySelector('[data-dropdown-btn="toj"]');
const tojPanel = document.getElementById('dd-toj');
const klubKnap = document.querySelector('[data-dropdown-btn="klub"]');
const klubPanel = document.getElementById('dd-klub');

tojPanel.style.display = 'none';
klubPanel.style.display = 'none';


function toggleTojDropdown() {
    if (tojPanel.style.display === 'none') {
        tojPanel.style.display = 'flex';
        tojKnap.setAttribute('aria-expanded', 'true');
        console.log('åbner Tøj menu');
    } else {
        tojPanel.style.display = 'none';
        tojKnap.setAttribute('aria-expanded', 'false');
        console.log('lukker TØj menu');
    }
}

function toggleKlubDropdown() {
    if (klubPanel.style.display === 'none') {
        klubPanel.style.display = 'flex';
        klubKnap.setAttribute('aria-expanded', 'true');
        console.log('ÅBNER Klub menu');
    } else {
        klubPanel.style.display = 'none';
        klubKnap.setAttribute('aria-expanded', 'false');
        console.log('LUKKER Klub menu');
    }
}

tojKnap.addEventListener('click', toggleTojDropdown);
klubKnap.addEventListener('click', toggleKlubDropdown);