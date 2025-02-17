// JavaScript to move carousel
let index = 0;

function moveCarousel(direction) {
    const items = document.querySelector('.carousel-items');
    const images = items.querySelectorAll('img');
    const totalItems = images.length;

    if (direction === 'right') {
        index = (index + 1) % totalItems;
    } else {
        index = (index - 1 + totalItems) % totalItems;
    }

    items.style.transform = `translateX(-${index * 315}px)`;
}
