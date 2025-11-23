
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient balance");
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);

try {
  acc.withdraw(500);
  console.log("Balance:", acc.getBalance());
  acc.withdraw(600);
} catch (e) {
  console.error(e.message);
}
