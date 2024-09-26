import { Transaction } from "./Transaction";
import { UserAccount } from "./UserAccount";

/*
1°) a) O construto serve para icializar uma classe. Chamamos ele passando como parâmetros os atributos da classe.
b) Foi impressa apenas uma vez.
c) Usando os getters e setters.
*/

const user: UserAccount = new UserAccount("39108341083", "Jhordan", 19);
const transaction: Transaction = new Transaction(
  "Tranferência boa",
  2000000,
  "05/05/2022"
);

console.log(transaction.getDescription());
