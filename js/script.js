/*----- Start Bootstrap Carousel -----*/

let myCarousel = document.querySelector("#carousel");
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2500,
  wrap: true,
});

/*----- Get curret Year -----*/

const currentYear = document.querySelector("#currentYear");
let year = new Date().getFullYear();
currentYear.innerHTML = year;

/*----- Close Dropdown Navigation -----*/

let navLinks = document.querySelectorAll(".nav-link");
let navbarNavDropdown = document.querySelector("#navbarNavDropdown");
let navbarToggler = document.querySelector(".navbar-toggler");
navLinks.forEach(navLink => {
  navLink.addEventListener("click", function () {
    navbarNavDropdown.classList.remove("show");
    navbarToggler.classList.add("collapsd");
    navbarToggler.setAttribute("aria-expanded", false);
  })
})


$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  dots: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    }
  }
})