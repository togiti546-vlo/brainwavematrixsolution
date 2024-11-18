// Add smooth scrolling to internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Example form validation (simplified for this demo)
  const contactForm = document.querySelector('form');
  contactForm.addEventListener('submit', function(e) {
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields.');
    }
  });
  