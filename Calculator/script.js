const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.value;

    if (btn.id === 'clear') {
      display.value = '';
    } else if (btn.id === 'equal') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});

// Keyboard Support
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/.=EnterBackspace';

  if (allowedKeys.includes(e.key)) {
    if (e.key === 'Enter') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else if (e.key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += e.key;
    }
  }
});
