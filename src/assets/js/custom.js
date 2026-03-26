// Theme Switching Logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.setAttribute('data-theme', 'dark');
  themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
}

themeToggle.addEventListener('click', () => {
  let theme = body.getAttribute('data-theme');
  if (theme === 'dark') {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
  }
});

// Fade-in animation on scroll using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Initialize observer for existing elements
document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// MutationObserver to watch for dynamically added elements with .fade-in
const dynamicObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1) { // ELEMENT_NODE
        if (node.classList.contains('fade-in')) {
          observer.observe(node);
        }
        node.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
      }
    });
  });
});

dynamicObserver.observe(document.body, { childList: true, subtree: true });

// Helper function to get query parameters (for artist details)
export function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
