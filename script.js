document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', function () {
            if (key.textContent === '=') {
                display.textContent = eval(display.textContent);
            } else if (key.textContent === 'C') {
                display.textContent = '';
            } else {
                display.textContent += key.textContent;
            }
        });
    });
});