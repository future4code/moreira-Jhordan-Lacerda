import { UserAccount } from "./UserAccount";

export class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  public getAccounts() {
    return this.accounts;
  }

  public setAccounts(newAccount: UserAccount) {
    this.accounts.push(newAccount);
  }
}
