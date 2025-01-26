let N = prompt("Введіть ціле число");
if (N !== null && N.trim() !== "" && !isNaN(N) && Number.isInteger(Number(N))) {
  for (let i = 1; i <= 100; i++) {
    if (i ** 2 <= N) {
      console.log(i);
    }
  }
} else {
  alert("Введено некоректне значення. Будь ласка, введіть ціле число.");
}
