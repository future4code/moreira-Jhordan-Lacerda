import { Request, Response } from "express";
import selectAllUsersByType from "../data/selectAllUsersByType";

export const getAllUsersByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const type: string = req.params.type;

    console.log(type);

    if (!type) {
      throw new Error("Type not defined");
    }

    const users = await selectAllUsersByType(type);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
