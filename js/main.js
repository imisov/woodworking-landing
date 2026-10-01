// Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// --- Логика Карусели ---
const carousel = document.querySelector('.portfolio-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (carousel && prevBtn && nextBtn) {
    // Шаг прокрутки равен ширине одной карточки + отступ (gap)
    nextBtn.addEventListener('click', () => {
        const itemWidth = carousel.querySelector('.portfolio-item').offsetWidth;
        carousel.scrollBy({ left: itemWidth + 20, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        const itemWidth = carousel.querySelector('.portfolio-item').offsetWidth;
        carousel.scrollBy({ left: -(itemWidth + 20), behavior: 'smooth' });
    });
}

// --- Логика Модального окна для фото (Лайтбокс) ---
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImg");
const zoomableImages = document.querySelectorAll('.zoomable');
const closeModal = document.querySelector('.close-modal');

// Открытие модалки при клике на картинку
zoomableImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

// Закрытие по крестику
if (closeModal) {
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
}

// Закрытие при клике на пустой темный фон (вне картинки)
if (modal) {
    modal.addEventListener('click', function(e) {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    });
}
