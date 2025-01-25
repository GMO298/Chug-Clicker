let clickCount = 0;

const button = document.getElementById('clickCount');
button.addEventListener('click', () => {
    clickCount += 1;
    button.textContent = `Click count: ${clickCount}`;
});
