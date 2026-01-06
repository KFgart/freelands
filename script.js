const thumbs = document.querySelectorAll('.thumb');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.lightbox .left');
const nextBtn = document.querySelector('.lightbox .right');

let currentIndex = 0;

/* Открытие */
thumbs.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

/* Обновление */
function updateLightbox() {
    lightboxImg.src = thumbs[currentIndex].src;
}

/* Перелистывание */
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % thumbs.length;
    updateLightbox();
};

prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
    updateLightbox();
};

/* Закрытие */
closeBtn.onclick = () => {
    lightbox.classList.remove('active');
};

lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
};











// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    
    // Получаем элементы
    const thumbs = document.querySelectorAll('.thumb');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    // Если на странице нет галереи, скрипт не выполняется (чтобы не было ошибок на странице Инфо)
    if (thumbs.length === 0) return;

    let currentIndex = 0;

    // Функция открытия фото
    function openImage(index) {
        currentIndex = index;
        lightboxImg.src = thumbs[currentIndex].src;
        lightbox.classList.add('active');
    }

    // Добавляем клик на каждое фото
    thumbs.forEach((img, index) => {
        img.addEventListener('click', () => {
            openImage(index);
        });
    });

    // Кнопка закрытия
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Закрытие по клику на черный фон
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Листание ВПЕРЕД
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= thumbs.length) {
            currentIndex = 0; // Если конец, идем в начало
        }
        lightboxImg.src = thumbs[currentIndex].src;
    });

    // Листание НАЗАД
    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = thumbs.length - 1; // Если начало, идем в конец
        }
        lightboxImg.src = thumbs[currentIndex].src;
    });

    // Листание клавишами клавиатуры
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'Escape') closeBtn.click();
    });
});