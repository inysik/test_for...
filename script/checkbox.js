

const checkbox = document.getElementById('ok');
const label = document.getElementById('text-check');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    label.textContent = 'Вы согласились с условиями';
  } else {
    label.textContent = 'Я соглашаюсь';
  }
});
