document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");
  const cornesTitle = document.getElementById("cornes-title");
  const cornesMenu = document.getElementById("cornes-menu");

  // Check if elements exist
  if (
    !slider ||
    !slides.length ||
    !prevBtn ||
    !nextBtn ||
    !dotsContainer ||
    !cornesTitle ||
    !cornesMenu
  ) {
    console.error("Missing required elements");
    return;
  }

  let currentSlide = 0;
  const slideCount = slides.length;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  function goToSlide(n) {
    currentSlide = n;
    const offset = currentSlide * 100;
    slider.style.transform = `translateX(-${offset}%)`;
    updateDots();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    goToSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    goToSlide(currentSlide);
  }

  // Add event listeners
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Initialize first slide
  goToSlide(0);

  // Optional: Auto-advance slides
  setInterval(nextSlide, 5000);

  // Toggle cornes menu visibility
  cornesTitle.addEventListener("click", () => {
    cornesMenu.classList.toggle("hidden");
    cornesMenu.classList.toggle("visible");
  });
});
