import { connection } from "../data/connection";

export default async function selectAllUsersByType(type: string): Promise<any> {
  const result = await connection("aula48_exercicio").where({ type: type });

  return result;
}
