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
const carousel = document.querySelector('.portfolio__carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (carousel && prevBtn && nextBtn) {
    // Шаг прокрутки равен ширине одной карточки + отступ (gap)
    nextBtn.addEventListener('click', () => {
        const itemWidth = carousel.querySelector('.portfolio__item').offsetWidth;
        carousel.scrollBy({ left: itemWidth + 20, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        const itemWidth = carousel.querySelector('.portfolio__item').offsetWidth;
        carousel.scrollBy({ left: -(itemWidth + 20), behavior: 'smooth' });
    });
}

// --- Логика Модального окна для фото (Лайтбокс) ---
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('expandedImg');
const zoomableImages = document.querySelectorAll('.zoomable');

// Открытие модалки при клике на картинку
zoomableImages.forEach(img => {
    img.addEventListener('click', (event) => {
        event.preventDefault();
        modalImg.src = img.src;
        modal.showModal();
    });
});

// Закрытие по крестику и клику на фон
modal.addEventListener('click', (event) => {
    if (event.target !== modalImg) {
        event.preventDefault();
        modal.close();
    }
});

// Закрытие по Escape
modal.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        modal.close();
    }
});
