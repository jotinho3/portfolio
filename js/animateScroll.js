function animateOnScroll(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}

const targets = document.querySelectorAll('[data-anime]');
const observerOptions = {
  rootMargin: '-25% 0px', // Adjust this rootMargin as needed
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);
targets.forEach((target) => observer.observe(target));
