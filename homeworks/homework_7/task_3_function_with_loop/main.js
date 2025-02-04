function getNumber() {
  for (let i = 0; i < 10; i++) {
    let userInput = prompt("Введіть число більше 100:");
    if (userInput > 100) {
      console.log("Останнє введене число: " + userInput);
      return;
    } else {
      alert("Число повинно бути більше 100. Спробуйте ще раз.");
    }
  }
  console.log("Час вичерпано. Ви не ввели число більше 100.");
}
