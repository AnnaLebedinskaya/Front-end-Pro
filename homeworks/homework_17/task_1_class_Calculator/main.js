class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "Помилка: Ділення на нуль!";
    }
    return a / b;
  }
}

const calc = new Calculator();

function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = "Помилка!";

  if (!isNaN(num1) && !isNaN(num2)) {
    switch (operation) {
      case "add":
        result = calc.add(num1, num2);
        break;
      case "subtract":
        result = calc.subtract(num1, num2);
        break;
      case "multiply":
        result = calc.multiply(num1, num2);
        break;
      case "divide":
        result = calc.divide(num1, num2);
        break;
    }
  }

  document.getElementById("result").textContent = result;
}
