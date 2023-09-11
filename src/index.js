import "./styles/main.css";

const confrimBtn = document.getElementById("confrim");
const name = document.getElementById("account");
const balance = document.getElementById("balance");
const accDatas = document.getElementById("accDatas");

const deposite = document.getElementById("deposite");
const withdraw = document.getElementById("withdraw");
const confrimDepositeBtn = document.getElementById("confrimDeposite");
const confrimWithdrawBtn = document.getElementById("confrimWithdraw");

const actionsModal = document.getElementById("actions");
const loginModal = document.getElementById("login");

let selectedAcc = null;

function BankAccount(ownerName, initialBalance) {
  this.ownerName = ownerName;
  this.balance = +initialBalance;
}

BankAccount.prototype.deposite = function (deposite) {
  if (typeof deposite !== "number" && deposite < 0) {
    throw new Error("Enter valid number!");
  }
  this.balance += +deposite;
};

BankAccount.prototype.withdraw = function (withdraw) {
  if (typeof withdraw !== "number" && withdraw < 0) {
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

confrimBtn.addEventListener("click", () => {
    const accName = name.value;
    const accBalance = balance.value;
  if (!accName && !accBalance) {
    throw new Error("There is empty places!");
  }
  actionsModal.classList.remove("d-none");
  loginModal.classList.add("d-none");
  const newAcc = new BankAccount(accName, accBalance);
  selectedAcc = newAcc;
  updateUserData();

});

const updateUserData = () => {
  accDatas.innerHTML =
    selectedAcc.ownerName + "'s balance is: " + selectedAcc.balance;
};

confrimDepositeBtn.addEventListener("click" , () => {
    const depositeAmount = +deposite.value;
    if(!depositeAmount){
        throw new Error("Empty place!")
    }
    selectedAcc.deposite(depositeAmount);
    updateUserData();
    deposite.value = null;
})

confrimWithdrawBtn.addEventListener("click" , () => {
    const withdrawAmount = +withdraw.value;
    if(!withdrawAmount){
        throw new Error("Empty place!")
    }
    selectedAcc.withdraw(withdrawAmount);
    updateUserData();
    withdraw.value = null;
})
