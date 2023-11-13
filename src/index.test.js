const BankAccount = require("./bankAccount");

describe("Bank account function:", () => {
  let account;
  beforeEach(() => {
    account = new BankAccount("Anar", 1000);
  });
  test("should be defined", () => {
    expect(BankAccount).toBeDefined();
  });

  describe("Deposite func:", () => {
    test("should be defined", () => {
      expect(account.deposite).toBeDefined();
    });

    test("should add amount to balance", () => {
      account.deposite(500);
      expect(account.getBalance()).toBe(1500);
    });

    test("should be a valid value", () => {
      // expect(() => account.deposite(-100)).toThrow();
      expect(() => account.deposite("100")).toThrow();
      expect(() => account.deposite()).toThrow();
    });
  });

  describe("Withdraw func:", () => {
    test("should be defined", () => {
      expect(account.withdraw).toBeDefined();
    });

    test("should withdraw amount from balance", () => {
      account.withdraw(500);
      expect(account.getBalance()).toBe(500);
    });

    test("should be valid value", () => {
      expect(() => account.deposite(-100)).toThrow();
      expect(() => account.deposite("")).toThrow();
      expect(() => account.deposite()).toThrow();
    });
  });
});
