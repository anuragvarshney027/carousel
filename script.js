// JavaScript for the carousel functionality
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallary");
    const galleryItems = document.querySelectorAll(".gallaryImg");
    let currentIndex = 0;
    let isDragging = false;
  
    gallery.addEventListener("touchstart", handleTouchStart);
    gallery.addEventListener("touchmove", handleTouchMove);
    gallery.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("keydown", handleKeyDown);
  
    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        isDragging = true;
    }
  
    function handleTouchMove(event) {
        if (!isDragging) return;
        const currentX = event.touches[0].clientX;
        const diffX = currentX - startX;
  
        if (diffX > 0) {
            // Swipe right
            currentIndex = (currentIndex + galleryItems.length - 1) % galleryItems.length;
        } else {
            // Swipe left
            currentIndex = (currentIndex + 1) % galleryItems.length;
        }
  
        updateSlidePosition();
        isDragging = false;
    }
  
    function handleTouchEnd() {
        isDragging = false;
    }
  
    function handleKeyDown(event) {
        if (event.key === "ArrowLeft") {
            // Arrow left key
            currentIndex = (currentIndex + galleryItems.length - 1) % galleryItems.length;
        } else if (event.key === "ArrowRight") {
            // Arrow right key
            currentIndex = (currentIndex + 1) % galleryItems.length;
        }
  
        updateSlidePosition();
    }
  
    function nextSlide() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateSlidePosition();
    }
  
    function updateSlidePosition() {
        const translateValue = -currentIndex * 100;
        gallery.style.transform = `translateX(${translateValue}%)`;
    }
  
    setInterval(nextSlide, 3000); // Auto rotate every 3 seconds
  });