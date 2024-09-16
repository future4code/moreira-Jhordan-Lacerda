import axios from "axios";
import { baseURL } from "./url";

type user = {
  id: string;
  name: string;
  email: string;
};

const news = {
  title: "The last danceis real",
  content: "The last dance vence suas duas primeiras partidas no RMR Americas",
  date: Date.now(),
};

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data;
};

// async function getSubscribers(): Promise<any[]> {
//     const response = await axios.get(`${baseUrl}/subscribers`);
//     return response.data;
//   };

const createNews = async (news: any): Promise<void> => {
  return axios.put(`${baseURL}/news`, news);
};

// const sendNotifications = async (
//   users: user[],
//   message: string
// ): Promise<void> => {
//   try {
//     for (const user of users) {
//       await axios.post(`${baseURL}/notifications`, {
//         subscriberId: user.id,
//         message: "Sua notificação preferida",
//       });
//     }
//   } catch (err: any) {
//     console.log("Erro ao enviar mensagens!");
//   }
// };

const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
      try {
        const promises = users.map((user) =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };

const main = async (): Promise<void> => {
  try {
    await createNews(news);
    console.log(await getSubscribers());
  } catch (err: any) {
    console.log(err.response?.data || err.message);
  }
};

export default main;
