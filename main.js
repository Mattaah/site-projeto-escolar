function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function fadeInOnScroll() {
  const elements = document.querySelectorAll('.fadeinout');
  elements.forEach(element => {
    if (isElementInViewport(element)) {
      element.style.opacity = 1;
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth'});
}