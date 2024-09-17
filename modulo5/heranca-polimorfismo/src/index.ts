import { Client } from "./Client";
import { Commerce } from "./Commerce";
import { Customer } from "./Consumers";
import { Industry } from "./Industry";
import { Place } from "./Place";
import { Residence } from "./Residence";
import { User } from "./User";

/*
Exercicios de Herança
1)a) Não, apenas se nós tivessemos o getter da senha
b) uma vez

2)a) Uma vez
b) Uma vez, porque como essa classe é filha de user, ela puxa a mensagem que está dentro do construtor de sua mãe.

3)a) Só seria possível imprimir se tivesse o getter dessa propriedade.

Exercicios de Polimorfismo
1)a)consegui imprimir todas.

2)a)Não é possível criar uma instância de uma classe abstrata.
b) A gente teria que fazer uma herança para conseguir "instanciar ela"

4)a) Possui os metodos getCpf e calculateBill,
porque o método cpf é para pegar o cpf do cliente e a calculateBill é herdada da interface

5)a) As semelhanças são todas as coisas herdadas da classe Commerce/Residence, pois as duas são filhas da classe Place,
isso faz com que elas tenham alguns atributos iguais.
b) As diferenças são CPF e CNPJ.

6) a) Ela deve ser filha da classe Industry porque ela é a classe com a propriedade específica para um cliente industrial.
b) Implementa a interface Client porque ela tem as propriedades necessárias para um cliente industrial.
c) porque nós não vamos precisar alterar os dados.
*/

// const jhordan = new User("1", "jhordan@eu.com", "Jhordan", "12345");

// console.log(jhordan.getId(), jhordan.getName(), jhordan.getEmail());

// const hiago = new Customer("2", "hiago@hiago", "Hiago", "12345", "12131s");

// console.log(
//   hiago.getId(),
//   hiago.getName(),
//   hiago.getEmail(),
//   hiago.getCreditCard(),
//   hiago.purchaseTotal,
//   hiago.introduceYourself()
// );

// const client: Client = {
//   name: "Jhordan",
//   registrationNumber: 1,
//   consumedEnergy: 100,

//   calculateBill: () => {
//     return 2;
//   },
// };

// console.log(
//   client.name,
//   client.consumedEnergy,
//   client.calculateBill(),
//   client.registrationNumber
// );

const residencia: Place = new Residence(3, "47220-000");
const comercio: Place = new Commerce(2, "57048-360");
const industria: Place = new Industry(5, "56308-035");

console.log(residencia.getCep(), comercio.getCep(), industria.getCep());
