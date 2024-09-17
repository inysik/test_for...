document.querySelectorAll('.questions-answers__toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.questions-answers__item');
      item.classList.toggle('active');
      button.classList.toggle('animation')
    });
  });
  