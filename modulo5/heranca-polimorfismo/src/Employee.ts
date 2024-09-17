import { User } from "./User";

export class Employee extends User {
  constructor(
    private salary: string,
    id: string,
    email: string,
    name: string,
    password: string
  ) {
    super(id, email, name, password);
  }
}
