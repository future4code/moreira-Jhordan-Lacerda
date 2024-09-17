import { Request, Response } from "express";
import axios from "axios";
import { Adress } from "../types/adress";

const baseUrl = "https://viacep.com.br/ws";

export const getAdressInfo = async (
  zipCode: string,
  number: string,
  complement?: string
): Promise<Adress | null> => {
  try {
    const response = await axios.get(`${baseUrl}/${zipCode}/json/`);

    const address: Adress = {
      street: response.data.logradouro,
      district: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf,
      number: number,
      complement: complement
    };
    return address;
  } catch (error) {
    console.log("erro inesperado", error);
    return null;
  }
};
