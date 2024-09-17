import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUserByName";

export const getAllUsersByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name: string = req.query.name as string;
    const users = await selectAllUsers(name);

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
