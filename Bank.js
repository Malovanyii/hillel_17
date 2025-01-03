// Створіть клас BankAccount, який буде представляти банківський рахунок. Додайте властивість балансу та методи для внесення та зняття грошей.
class BankAccount {
	constructor(balance) {
		this.balance = balance;
	}
	getBalance() {
		return this.balance;
	}

	deposit(balance) {
		this.balance += balance;
	}

	withdraw(balance) {
		if (this.balance > balance) {
			this.balance -= balance;
		} else {
			console.log("Недостатньо коштів на рахунку");
		}
	}
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
