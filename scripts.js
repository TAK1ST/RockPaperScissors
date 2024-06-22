
const button = document.getElementById('Rule');

button.addEventListener('click', function () {
  let currentOpacity = parseFloat(getComputedStyle(button).getPropertyValue('opacity'));
  let newOpacity = (currentOpacity < 1) ? currentOpacity + 0.1 : 1;
  button.style.opacity = newOpacity;
});

