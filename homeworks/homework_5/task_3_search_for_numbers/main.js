let n = prompt("Введіть ціле число");
if (n !== null && n.trim() !== "" && !isNaN(n) && Number.isInteger(Number(n))) {
  for (let i = 1; i <= 100; i++) {
    if (i ** 2 <= n) {
      console.log(i);
    }
  }
} else {
  alert("Введено некоректне значення. Будь ласка, введіть ціле число.");
}
