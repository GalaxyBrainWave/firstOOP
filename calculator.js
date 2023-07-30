(function() {
  const calculator = {
    container: document.getElementById("calculator-container"),
    display: document.getElementById("display"),
    addNumber(number) {
      this.display.value += number;
    },
    addOperator(operator) {
      if (operator === 'C') { this.display.value = ''; return; }
      if (operator === '=') { this.calculate(); return; }
      this.display.value += operator;
    },
    calculate() {
      const result = eval(this.display.value);
      this.display.value = result;
    }
  };

  calculator.container.addEventListener('click', function(event) {
    const target = event.target;
    if (target.dataset.operator) {
      calculator.addOperator(target.dataset.operator);
    } else if (target.dataset.value) {
      calculator.addNumber(target.dataset.value);
    }
  });

})();