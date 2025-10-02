class Painting {
    constructor(name, artist, imageUrl, isFramed) {
        this.name = name;
        this.artist = artist;
        this.imageUrl = imageUrl;
        this.isFramed = isFramed;
    }

    getSection() {
        const section = document.createElement('div');
        section.className = 'painting-section';
        section.onclick = () => this.showModal();

        const title = document.createElement('div');
        title.className = 'painting-title';
        title.textContent = this.name;

        const img = document.createElement('img');
        img.className = 'painting-image';
        img.src = this.imageUrl;
        img.alt = this.name;

        section.appendChild(title);
        section.appendChild(img);

        return section;
    }
    showModal() {
        document.getElementById('modalTitle').textContent = this.name;
        document.getElementById('modalArtist').textContent = `by ${this.artist}`;
        
        const modalImg = document.getElementById('modalImage');
        modalImg.src = this.imageUrl;
        
        const frameLabel = document.getElementById('frameLabel');
        if (this.isFramed) {
            modalImg.classList.add('framed');
            frameLabel.textContent = 'Framed';
            frameLabel.style.display = 'block';
        } else {
            modalImg.classList.remove('framed');
            frameLabel.style.display = 'none';
        }

        document.getElementById('paintingModal').style.display = 'block';
    }
}
function closeModal() {
    document.getElementById('paintingModal').style.display = 'none';
}
window.onclick = function(event) {
    const modal = document.getElementById('paintingModal');
    if (event.target == modal) {
        closeModal();
    }
}
const paintings = [
    new Painting(
        'The Bee',
        'natural bee',
        'images/bee.png',
        false
    ),
    new Painting(
        'The Kitten',
        'kitty lovers',
        'images/kitten.png',
        true
    ),
    new Painting(
        'The Flowers ',
        'botanical garden',
        'images/flowers.png',
        false
    ),
    new Painting(
        'The Rabbit',
        'wildlife',
        'images/rabbit.png',
        true
    ),
    new Painting(
        'The Sunset',
        'landscape sunsets',
        'images/sunset.png',
        false
    )
];
function loadGallery() {
    const container = document.getElementById('galleryContainer');
    paintings.forEach(painting => {
        const section = painting.getSection();
        container.appendChild(section);
    });
}

loadGallery();