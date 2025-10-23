// SLIDER KODU (sadece varsa çalışır)
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (slides.length > 0 && prevBtn && nextBtn) {
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Otomatik slider 5 saniyede bir değişsin
  setInterval(nextSlide, 5000);

  // İlk gösterim
  showSlide(currentIndex);
}

// MENÜ TOGGLE (tüm sayfalarda çalışır)
const menuToggles = document.querySelectorAll(".menu-toggle");
menuToggles.forEach((toggle) => {
  const nav = toggle.closest(".nav-container").querySelector("nav");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
