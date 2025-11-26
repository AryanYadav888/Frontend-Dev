class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("Deposit amount must be positive");
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error("Withdrawal amount must be positive");
        if (amount > this.#balance) throw new Error("Insufficient balance");
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

// ---------- Demonstration ----------

try {
    const account = new BankAccount(1000);

    console.log("After Deposit:", account.deposit(500));  // valid
    console.log("After Deposit:", account.deposit(200));  // valid

    console.log("Current Balance:", account.getBalance());

    console.log("After Withdraw:", account.withdraw(400)); // valid

    console.log("Trying Invalid Withdrawal:");
    console.log("After Withdraw:", account.withdraw(2000)); // invalid
} 
catch (error) {
    console.log("Error:", error.message);
}
