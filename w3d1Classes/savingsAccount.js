class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }
    getinterest(){
        return this._interest;
    }
    setInterest(amount){
        this_interest = interest;
    }
    addInterest(){
        this.deposit(this._balance*this._interest/100);
    }
    toString(){
        return "SavingsAccount " + this._number + ": balance " + this._balance;
    }
    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
    }
    endOfMonth() {
        return this._balance < 0 ? `Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500`
            : "No action for Checking account";
    }

}