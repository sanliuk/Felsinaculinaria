// Select the carousel element
const carouselContainer = document.getElementById('imageCarousel');

// Total number of images
const totalImages = 8;

// Loop to generate image elements and populate the carousel
for (let i = 1; i <= totalImages; i++) {
  const imageElement = document.createElement('div');
  imageElement.classList.add('item');

  // Modify the naming convention for images
  imageElement.innerHTML = `<img src="image/P${i}.jpg" alt="">`;

  carouselContainer.appendChild(imageElement);
}

// Initialize Owl Carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});
