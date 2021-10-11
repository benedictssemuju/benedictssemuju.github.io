class CheckingAccount extends Account{
    constructor(number,overdraftLimit = 500){
        super(number);
        this._overdraftLimit = overdraftLimit;
    }
    getOverdraftLimit(){
        return this._overdraftLimit;
    }
    setOverdraftLimit(){
        this._overdraftLimit=overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance+this._overdraftLimit) {
            throw Error("Overdraft exceeded");
        }
        this._balance -= amount;
    }
    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance;
    }
    endOfMonth() {
        return this._balance < 0 ? `Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500`
            : "No action for Checking account";
    }
    endOfMonth() {
        return this._accounts.map(a => a.endOfMonth()).reduce((a, b) => a + "\n" + b, "");
    }

}