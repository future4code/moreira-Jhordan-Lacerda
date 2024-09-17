import { connection } from "../data/connection";

export default async function selectAllUsers(name: string): Promise<any> {
    const result = await connection("aula48_exercicio").where(
      "name",
      "like",
      `%${name}%`
    );
  
    return result;
  }