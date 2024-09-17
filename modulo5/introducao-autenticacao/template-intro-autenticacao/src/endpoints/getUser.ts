import { Request, Response } from "express";
import { getUserById } from "../data/data";
import { getData } from "../services/getData";

export default async function getUser(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
}
