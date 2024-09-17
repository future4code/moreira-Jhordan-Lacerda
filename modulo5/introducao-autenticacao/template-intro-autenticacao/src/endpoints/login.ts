import { Request, Response } from "express";
import { getUserByEmail } from "../data/data";
import { genareteToken } from "../services/genareteToken";
import { IdGenerator } from "../services/IdGenerator";

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || email.indexOf("@") === -1) {
      res.statusCode = 409;
      throw new Error("Invalid email");
    }

    const user = await getUserByEmail(email);

    if (user.password !== password) {
      res.statusCode = 409;
      throw new Error("Invalid password");
    }

    const token = genareteToken({
      id: user.id,
    });

    res.status(200).send({ token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}
