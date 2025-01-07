const number = prompt("Введіть п'ятизначне число:");

if (number.length === 5 && !isNaN(number)) {
    alert([...number].join(' '));
} else {
    console.log("Будь ласка, введіть коректне п'ятизначне число.");
}