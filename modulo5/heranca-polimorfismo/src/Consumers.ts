import { User } from "./User";

// export class Consumers extends User {
//   constructor(
//     private creditCard: number,
//     public totalPurchases: number,
//     id: string,
//     email: string,
//     name: string,
//     password: string
//   ) {
//     super(id, email, name, password);
//   }
// }

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }