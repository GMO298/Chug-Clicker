let clickCount = 0;

const button = document.getElementById('clickButton');
const display = document.getElementById('clickCount');

button.addEventListener('click', () => {
  clickCount += 1;
  display.textContent = `Click count: ${clickCount}`;
});
