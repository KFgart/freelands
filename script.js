document.addEventListener('DOMContentLoaded', () => {

    const thumbs = document.querySelectorAll('.thumb');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.lightbox .left');
    const nextBtn = document.querySelector('.lightbox .right');

    // Если галереи нет — выходим (для других страниц)
    if (!thumbs.length || !lightbox) return;

    let currentIndex = 0;

    /* Открытие */
    thumbs.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });

    /* Обновление картинки */
    function updateLightbox() {
        lightboxImg.src = thumbs[currentIndex].src;
    }

    /* Вперед (бесконечно) */
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % thumbs.length;
        updateLightbox();
    });

    /* Назад (бесконечно) */
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
        updateLightbox();
    });

    /* Закрытие */
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    /* Клавиатура */
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'Escape') closeBtn.click();
    });

});
