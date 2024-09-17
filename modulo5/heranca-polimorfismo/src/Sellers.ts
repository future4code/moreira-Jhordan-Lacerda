import { User } from "./User";

export class Sellers extends User {
  constructor(
    private amountOfSales: number,
    id: string,
    email: string,
    name: string,
    password: string
  ) {
    super(id, email, name, password);
  }
}
