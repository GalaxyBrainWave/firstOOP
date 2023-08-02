// the syntax (function() {...})(); allows to simultaneously define and call a function

(function() {

  // here the browser creates a calculator object, which is going to do pretty much everything we need
  const calculator = {

    // We only need to grab these two elements of the DOM
    container: document.getElementById("calculator-container"),
    display: document.getElementById("display"),

    // Now come the methods
    addNumber(number) {
      this.display.value += number;
    },
    addOperator(operator) {

      // if the "data-" attribute is "operator", there are 2 special cases.
      // if the operator is C, clear the "display" input field
      // "return;" is a way to terminate the function
      if (operator === 'C') { this.display.value = ''; return; }

      // if the operator is =, call the method calculate()
      if (operator === '=') { this.calculate(); return; }

      // otherwise, just add the operator to the "display" input field
      this.display.value += operator;
    },
    calculate() {

      // in order to keep the code simple, the browser simply evaluates
      // the resulting expression in the "display" input field
      // this isn't good practice, but it's simple
      const result = eval(this.display.value);

      // display the result
      this.display.value = result;
    }
  };

  // attach an event listener for the mouse click (or screen tap), capture the event
  calculator.container.addEventListener('click', function(event) {

    // find out which button was clicked and store a reference to it
    const target = event.target;

    // if the "data-" attribute is "operator", call the method addOperator
    if (target.dataset.operator) {
      calculator.addOperator(target.dataset.operator);

      // otherwise, if the "data-" attribute is "value", call the addNumber method
    } else if (target.dataset.value) {
      calculator.addNumber(target.dataset.value);
    }
  });

})();
