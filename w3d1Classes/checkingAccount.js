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
        return this._balance < 0 ? `Warning, low balance CheckingAccount ${this.getNumber}: balance: ${this._balance} overdraft limit: ${this._overdraftLimit}`
           : "No action for Checking account";
    }

}