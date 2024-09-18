const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (event) {
  let value = this.value.replace(/\D/g, '');
   
  if (value[0] === '7') {
    value = value.slice(1);
  }

  let formatted = "+7 (" + value.substring(0, 3);
  
  if (value.length > 3) {
    formatted += ") " + value.substring(3, 6);
  }
  if (value.length > 6) {
    formatted += "-" + value.substring(6, 8);
  }
  if (value.length > 8) {
    formatted += "-" + value.substring(8, 10);
  }

  this.value = formatted;
});