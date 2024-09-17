import connection from "../connection";
import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { genareteToken } from "../services/genareteToken";

export default async function createUserAtividade(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || email.indexOf("@") === -1) {
      res.statusCode = 409
      throw new Error("Invalid email");
    }

    if (!password || password.length < 6) {
      res.statusCode = 409
      throw new Error("Invalid password");
    }

    const id = IdGenerator();

    const token = genareteToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}
