import connection from "../connection";

export const createUserAtividadeBD = async (
  id: string,
  email: string,
  password: string
) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into("User");
};

export const getUserByEmail = async (email: string): Promise<any> => {
  const result = await connection.select("*").from("User").where({ email });

  return result[0];
};

export const getUserById = async (id: string): Promise<any> => {
  const result = await connection.select("*").from("User").where({ id });

  return result[0];
};
