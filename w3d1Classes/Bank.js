class Bank {
    static nextNumber = 123456;

    constructor() {
        this._accounts = [];
    }
    getAccounta(){
        return this._accounts;
    }
    addAccount(){
        this._accounts.push(new Acccount(Bank.nextNumber++));
    }
    addSavingsAccount(interest){
        this._accounts.push(new SavingsAccount(Bank.nextNumber++,interest));
    }
    addCheckingAccount(overdraft) {
        this._accounts.push(new CheckingAccount(Bank.nextNumber++, overdraft));
    }
    closeAccount(number){
        this._accounts = this._accounts.filter(x=>x. getNumber()!==number)
    }
    accountReport(){
        this._accounts.forEach(x=>x.toString());
    }
}