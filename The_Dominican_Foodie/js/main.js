var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 

function shareOnFacebook() {
    var url = encodeURIComponent(window.location.href);
    var shareUrl = "https://www.facebook.com/sharer.php?u=" + url;
    window.open(shareUrl, '_blank');
  }
  
  function shareOnTwitter() {
    var url = encodeURIComponent(window.location.href);
    var shareUrl = "https://twitter.com/intent/tweet?url=" + url;
    window.open(shareUrl, '_blank');
  }
  
  function shareOnLinkedIn() {
    var url = encodeURIComponent(window.location.href);
    var shareUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + url;
    window.open(shareUrl, '_blank');
  }