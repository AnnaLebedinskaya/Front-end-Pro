function multiply(num1) {
  return function (num2) {
    return num1 * num2;
  };
}
const result = multiply(5)(2);
console.log(result);
