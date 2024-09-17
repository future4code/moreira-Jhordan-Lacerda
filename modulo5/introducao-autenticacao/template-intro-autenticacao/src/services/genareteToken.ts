import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const expiresIn = "5h";

export const genareteToken = (id: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn,
    }
  );

  return token;
};
