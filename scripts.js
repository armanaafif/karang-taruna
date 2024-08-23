const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slide.length;

// Clone first and last slides
const firstClone = slide[0].cloneNode(true);
const lastClone = slide[totalSlides - 1].cloneNode(true);

// Add cloned slides to the beginning and end of the slides
slides.appendChild(firstClone);
slides.insertBefore(lastClone, slide[0]);

// Update slide collection and current index
const allSlides = document.querySelectorAll('.slide');
currentIndex = 1;
slides.style.transform = `translateX(-${currentIndex * 100}%)`;

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

function nextSlide() {
    currentIndex++;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    if (currentIndex === allSlides.length - 1) {
        setTimeout(() => {
            slides.style.transition = 'none';
            currentIndex = 1;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 500);
    }
}

function prevSlide() {
    currentIndex--;
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    if (currentIndex === 0) {
        setTimeout(() => {
            slides.style.transition = 'none';
            currentIndex = allSlides.length - 2;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 500);
    }
}

function updateSlidePosition() {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Fungsi untuk mengatur interval otomatis
function autoSlide() {
    nextSlide();
}

// Set interval untuk bergeser otomatis setiap 3 detik
setInterval(autoSlide, 3000);

