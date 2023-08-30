
const input = document.getElementById('validation-input');

input.addEventListener('input', () => {
  const desiredLength = parseInt(input.getAttribute('data-length'));
  const enteredText = input.value.length;

  if (enteredText === desiredLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});