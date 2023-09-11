function BankAccount(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = +initialBalance;
  }
  
  BankAccount.prototype.deposite = function (deposite) {
    if (typeof deposite !== "number" || deposite < 0) {
      throw new Error("Enter valid number!");
    }
    this.balance += +deposite;
  };
  
  BankAccount.prototype.withdraw = function (withdraw) {
    if (typeof withdraw !== "number" || withdraw < 0) {
      throw new Error("Enter Valid number!");
    }
    if (withdraw > this.balance) {
      throw new Error("Withdraw amount must be less then balance");
    }
    this.balance -= withdraw;
  };
  
  BankAccount.prototype.getBalance = function () {
    return this.balance;
  };

  module.exports = BankAccount;