function scrollIt(element){
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

const btns = document.querySelectorbyId('#design');
const sections = document.querySelector('.parallaxImg1');

btns[0].addEventListener('click', () => {
  scrollIt(sections[0]);
})


// script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
//
// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {
//
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "design") {
//       // Prevent default anchor click behavior
//       event.preventDefault();
//
//       // Store hash
//       var hash = this.hash;
//
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(#design).offset().top
//       }, 1000, function(){
//
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = #design;
//       });
//     } // End if
//   });
// });
