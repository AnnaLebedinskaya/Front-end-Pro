class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.updateUI();
    } else {
      alert("Введіть коректну суму!");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.updateUI();
    } else {
      alert("Недостатньо коштів або некоректна сума!");
    }
  }

  updateUI() {
    document.getElementById("balance").textContent = this.balance;
  }
}

const account = new BankAccount(1000);

document.getElementById("deposit").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  account.deposit(amount);
});

document.getElementById("withdraw").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  account.withdraw(amount);
});
