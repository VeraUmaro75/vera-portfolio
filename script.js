// Simple interactivity: toggle dark mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Example: interactive alert when clicking CV button
document.addEventListener("DOMContentLoaded", () => {
  const cvButton = document.querySelector(".btn");
  cvButton.addEventListener("click", () => {
    alert("Downloading Vera's CV...");
  });
});
<script>
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxVideo = document.getElementById("lightbox-video");
  const closeBtn = document.querySelector(".close");

  // Handle image clicks
  document.querySelectorAll("img.popup").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.style.display = "block";
      lightboxVideo.style.display = "none";
      lightboxImg.src = img.src;
    });
  });

  // Handle video clicks
  document.querySelectorAll("video.popup").forEach(video => {
    video.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxVideo.style.display = "block";
      lightboxImg.style.display = "none";
      lightboxVideo.src = video.querySelector("source").src;
    });
  });

  // Close lightbox
  closeBtn.onclick = () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    lightboxVideo.src = "";
  };

  // Close when clicking outside content
  window.onclick = (event) => {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
      lightboxVideo.src = "";
    }
  };
</script>
