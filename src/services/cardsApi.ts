import { ICard } from '../interfaces/card';
import api from './api';

export const cardsApi = {
  getCards: async (): Promise<{ data: ICard[] }> => {
    const { data } = await api.get("https://api.scryfall.com/cards/search",{
      params: {
        format: "json",
        q: "is:commander"
      }
    });
    return data;
  },
};