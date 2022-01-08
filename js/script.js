var myCarousel = document.querySelector("#carousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2500,
  wrap: true,
});


const currentYear = document.querySelector("#currentYear");
var year = new Date().getFullYear();
currentYear.innerHTML = year;