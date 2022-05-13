import { ICard } from '../interfaces/card';
import api from './api';

export const cardsApi = {
  getCards: async (): Promise<{ data: ICard[] }> => {
    const { data } = await api.get("https://db.ygoprodeck.com/api/v7/cardinfo.php",{
      params: {
        race: "wyrm"
      }
    });
    return data;
  },
};