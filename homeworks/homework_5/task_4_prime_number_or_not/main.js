let num = prompt("Введіть ціле число");
if (num !== null && num.trim() !== "" && !isNaN(num) && Number(num) >= 1) {
  num = Number(num);
  if (num === 1) {
    alert("1 не є простим числом.");
  } else {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      alert(`${num} є простим числом.`);
    } else {
      alert(`${num} не є простим числом.`);
    }
  }
} else {
  alert("Введено некоректне значення. Будь ласка, введіть ціле число.");
}
