function BankAccount(accountHolder, initialBalance = 0) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;

    this.deposit = function(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
        } else {
            this.balance += amount;
            console.log(`Deposited ₹${amount}. New Balance: ₹${this.balance}`);
        }
    };

    this.withdraw = function(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
        } else if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew ₹${amount}. New Balance: ₹${this.balance}`);
        }
    };

    this.checkBalance = function() {
        console.log(`Account Holder: ${this.accountHolder}, Balance: ₹${this.balance}`);
    };
}

const myAccount = new BankAccount("Dimple", 5000);

myAccount.checkBalance();

myAccount.deposit(1500);

myAccount.withdraw(2000);

myAccount.withdraw(5000);

myAccount.checkBalance();
