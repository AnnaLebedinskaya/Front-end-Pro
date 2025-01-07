let number = prompt("Будь ласка, введіть трьохзначне число:");
if (number.length === 3 && !isNaN(number) && Number.isInteger(Number(number))) {
  const digits = new Set(number);
  if (digits.size === 1) {
    alert("Всі цифри однакові");
  } else if (digits.size === 2) {
    alert("Є дві однакові цифри");
  } else {
    alert("Всі цифри різні");
  }
} else {
  alert("Будь ласка, введіть коректне трьохзначне число:");
}
