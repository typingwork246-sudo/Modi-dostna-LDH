// Smooth scroll for "Learn More"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Simple fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card").forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "0.6s ease";
  observer.observe(card);
});

// Apply button click effect
document.querySelectorAll(".apply-btn, .join-btn, .footer-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Opening Telegram...");
  });
});
