// Slider
var myIndex = 0;
carousel();

function carousel() {
   var i;
   var x = document.getElementsByClassName("mySlides");
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   myIndex++;
   if (myIndex > x.length) {
      myIndex = 1
   }
   x[myIndex - 1].style.display = "block";
   setTimeout(carousel, 9000);
}

let slideIndex = 0;
showSlides();

function showSlides() {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {
      slideIndex = 1
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
   setTimeout(showSlides, 3000); // Change image every 3 seconds
}

window.onscroll = function () {
   myFunction()
};

// Nav bar
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
   if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
   } else {
      navbar.classList.remove("sticky");
   }
}