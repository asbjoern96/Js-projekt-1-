
const tojKnap = document.querySelector('[data-dropdown-btn="toj"]');
const tojPanel = document.getElementById('dd-toj');
const klubKnap = document.querySelector('[data-dropdown-btn="klub"]');
const klubPanel = document.getElementById('dd-klub');
const populaereKategorier = ['Trøjer', 'Bukser', 'Sko', 'Tilbud', 'Jakker'];

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

//den her del er for at vise brug af array og loop

if (tojPanel) {
    
    // (En streg som adskiller populært og det normale)
    const separator = document.createElement('hr');
    tojPanel.appendChild(separator);
    
    const overskrift = document.createElement('p');
    overskrift.textContent = 'Populært lige nu:';
    overskrift.style.cssText = 'font-weight: bold; margin: 10px 0 5px 0; color: #111;';
    tojPanel.appendChild(overskrift);
    
    // Her har er der et loop til at gå igennem kategorierne i arrayet
    for (let i = 0; i < populaereKategorier.length; i++) {
        
        const kategori = populaereKategorier[i];
        
        // Opret link
        const link = document.createElement('a');
        link.textContent = kategori;
        link.href = '#';
        link.style.cssText = 'color: #ff5a00; font-weight: bold; display: block; padding: 8px 12px;';
        
        // Tilføj link til panelet
        tojPanel.appendChild(link);
    }
    
    console.log('✅ Populære kategorier tilføjet til Tøj dropdown:', populaereKategorier.length);
}