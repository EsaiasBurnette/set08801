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

  var isPlaying = false; // Create a variable to track the audio playback status

		function toggleAudio() {
			// Get the audio element by its id
			var audio = document.getElementById("myAudio");

            // Get the image element by its id for each slider
			var img1 = document.getElementById("audio-icon1");
            var img2 = document.getElementById("audio-icon2");
            var img3 = document.getElementById("audio-icon3");

			// Toggle the audio playback status and update the icon for each slider
			if (isPlaying) {
				audio.pause();
				isPlaying = false;
				img1.src = 'img/audio.png'; // Change the image to show the play icon
                img2.src = 'img/audio.png'; // Change the image to show the pause icon
                img3.src = 'img/audio.png'; // Change the image to show the pause icon
			} else {
				audio.play();
				isPlaying = true;
				img1.src = 'img/pause.png'; // Change the image to show the pause icon
                img2.src = 'img/pause.png'; // Change the image to show the pause icon
                img3.src = 'img/pause.png'; // Change the image to show the pause icon
			}
		}


        function addToWishList(item) {
            // Get the wishlist element
            const wishlist = document.getElementById("wishlist");
          
            // Check if the item already exists in the wishlist
            const wishlistItems = wishlist.querySelectorAll("li");
            for (let i = 0; i < wishlistItems.length; i++) {
              if (wishlistItems[i].innerText === item) {
                alert("This item is already in your wishlist!");
                return;
              }
            }
          
            // Create a new list item for the wishlist
            const listItem = document.createElement("li");
            listItem.innerText = item;
          
            // Append the list item to the wishlist
            wishlist.appendChild(listItem);
          
            // Save the wishlist items to localStorage
            saveWishlistItems();
          }
          
  
  // Define the saveWishlistItems function
  function saveWishlistItems() {
    // Get the wishlist element and its child items
    const wishlist = document.getElementById("wishlist");
    const wishlistItems = wishlist.querySelectorAll("li");
  
    // Create an array of wishlist item names
    const wishlistItemNames = [];
    wishlistItems.forEach(item => wishlistItemNames.push(item.innerText));
  
    // Save the wishlist items to localStorage
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItemNames));
  }
  
  // Define the loadWishlistItems function
  function loadWishlistItems() {
    // Get the wishlist element and its localStorage items
    const wishlist = document.getElementById("wishlist");
    const storedItems = localStorage.getItem("wishlistItems");
  
    // If there are stored items, create a new list item for each one and append it to the wishlist
    if (storedItems) {
      const wishlistItems = JSON.parse(storedItems);
      wishlistItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        wishlist.appendChild(listItem);
      });
    }
  }
  
  // Load the wishlist items on page load
  loadWishlistItems();
  
  // Add an event listener to the form to prevent default behavior and call addToWishList function
  const form = document.getElementById("wishlist-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const item = form.elements["item"].value.trim();
    
    // Check if the item is already in the wishlist
    const wishlist = document.getElementById("wishlist");
    const wishlistItems = wishlist.querySelectorAll("li");
    let exists = false;
    wishlistItems.forEach(wishlistItem => {
      if (wishlistItem.innerText === item) {
        exists = true;
      }
    });
  
    // If the item does not already exist, add it to the wishlist and reset the form input
    if (!exists) {
      addToWishList(item);
      form.elements["item"].value = "";
    }
  });

        