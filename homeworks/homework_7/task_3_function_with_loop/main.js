function getNumber() {
  let lastInput = null;
  for (let i = 0; i < 10; i++) {
    let userInput = prompt("Введіть число більше 100:");
    lastInput = userInput;
    let number = parseFloat(userInput);
    if (!isNaN(number) && number > 100) {
      console.log("Останнє введене число: " + number);
      return;
    } else {
      alert("Число повинно бути більше 100. Спробуйте ще раз.");
    }
  }
  console.log("Останнє введене значення: " + lastInput);
}
getNumber();
