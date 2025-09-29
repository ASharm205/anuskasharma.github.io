const beforeImages = {
    "Rocky": "images/before/rocky.png",
    "Romi": "images/before/romi.png",
    "Romii": "images/before/rr.png",
};

const afterImages = {
    "Rocky": "images/after/rockysad.png",
    "Romi": "images/after/romiafter.png",
    "Romii": "images/after/rommi.png",
};
// sources from W3 Schools 
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupImage = document.getElementById('popup-image');
const closeButton = document.getElementById('close');

function createDogCards() {
    for (const dogName in beforeImages) {
        const dogCard = document.createElement('div');
        dogCard.className = 'dog-card';
        dogCard.setAttribute('data-dog', dogName);

        const img = document.createElement('img');
        img.src = beforeImages[dogName];
        img.alt = `${dogName} before adoption`;
        img.className = 'dog-image';

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = `Please adopt ${dogName}`;

        dogCard.appendChild(img);
        dogCard.appendChild(tooltip);

        dogCard.addEventListener('click', () => openPopup(dogName));

        gallery.appendChild(dogCard);
    }
}

function openPopup(dogName) {
    popupTitle.textContent = `${dogName} after adoption`;
    popupImage.src = afterImages[dogName];
    popupImage.alt = `${dogName} after adoption`;
    
    popup.classList.remove('hidden');
}

function closePopup() {
    popup.classList.add('hidden');
}

closeButton.addEventListener('click', closePopup);

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
        closePopup();
    }
});

document.addEventListener('DOMContentLoaded', createDogCards);