const display = document.getElementById('display');

    // Append character to the display
    function append(value) {
      if (display.innerText === '0') {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }

    // Clear the display
    function clearDisplay() {
      display.innerText = '0';
    }

    // Evaluate the expression
    function calculate() {
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = 'Error';
      }
    }