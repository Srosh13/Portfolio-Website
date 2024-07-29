document.addEventListener("DOMContentLoaded", function () {
  const certCards = document.querySelectorAll(".cert-card");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  certCards.forEach((card) => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", function () {
  const internshipCards = document.querySelectorAll(".internship-card");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  internshipCards.forEach((card) => observer.observe(card));
});
document.addEventListener("DOMContentLoaded", function () {
  const clouds = document.querySelectorAll(".cloud");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${entry.target.dataset.delay}s`;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  clouds.forEach((cloud, index) => {
    cloud.dataset.delay = index * 0.2;
    observer.observe(cloud);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideImages = document.querySelectorAll(".slides img");
  const totalSlides = slideImages.length;
  let index = 0;

  function showNextSlide() {
    index++;
    if (index >= totalSlides) {
      index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  // Change slide every 2 seconds
  setInterval(showNextSlide, 2000); // 2000 milliseconds = 2 seconds
});
