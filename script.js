// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('nav a');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      window.scroll({
        top: targetElement.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
  
  // Highlight navigation link on scroll
  document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
  
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
  
    sections.forEach((section, index) => {
      if (
        section.offsetTop - 60 <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        navLinks[index].classList.add('active');
      } else {
        navLinks[index].classList.remove('active');
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Add the 'active' class to trigger the animation
    const animatedSection = document.querySelector('.animated-section');
    animatedSection.classList.add('active');
  });
      