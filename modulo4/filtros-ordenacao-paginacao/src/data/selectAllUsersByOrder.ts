import { connection } from "../data/connection";

export default async function selectAllUsersByOrder(
  selected: string,
  order: string
): Promise<any> {
  const result = await connection("aula48_exercicio").orderBy(selected, order);

  return result;
}
