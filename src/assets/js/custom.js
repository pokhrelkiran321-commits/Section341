
// Custom JS
document.addEventListener('DOMContentLoaded', () => {
  console.log('Photography Portfolio is ready!');

  // Theme Toggling
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle?.querySelector('i');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
      themeIcon.classList.remove('bi-moon-stars');
      themeIcon.classList.add('bi-sun');
    } else {
      themeIcon.classList.remove('bi-sun');
      themeIcon.classList.add('bi-moon-stars');
    }
  }

  // Gallery Modal
  const photoModal = document.getElementById('photoModal');
  if (photoModal) {
    photoModal.addEventListener('show.bs.modal', (event) => {
      const item = event.relatedTarget;
      const img = item.getAttribute('data-img');
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');

      document.getElementById('modalImg').src = img;
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDesc').textContent = desc;
    });
  }
});
