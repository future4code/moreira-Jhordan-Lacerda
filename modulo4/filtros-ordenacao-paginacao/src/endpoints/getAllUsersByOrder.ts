import { Request, Response } from "express";
import selectAllUsersByOrder from "../data/selectAllUsersByOrder";

export const getAllUsersByOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let selected: string = req.query.selected as string;
    let order: string = req.query.order as string;

    console.log(selected);

    selected =
      selected.toLocaleLowerCase() === "name"
        ? "name"
        : selected.toLocaleLowerCase() === "type"
        ? "type"
        : "email";
    order = order.toLocaleUpperCase() === "DESC" ? "DESC" : "ASC";

    const users = await selectAllUsersByOrder(selected, order);

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
