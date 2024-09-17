import { Request, Response } from "express";
import { getAdressInfo } from "../services/getAdressInfo";
import knex from "knex";
import { connection } from "../data/connection";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { number, zipCode, complement } = req.body;
    const adress = await getAdressInfo(zipCode, number, complement);
    if (!adress) {
      throw new Error("Error on get address");
    }

    await connection("Address").insert({
      cep: zipCode,
      logradouro: adress.street,
      numero: adress.number,
      complemento: adress.complement,
      bairro: adress.district,
      cidade: adress.city,
      estado: adress.state,
    });

    res.send(adress);
  } catch (error) {
    res.send({ message: "Erro inesperado" });
  }
};
