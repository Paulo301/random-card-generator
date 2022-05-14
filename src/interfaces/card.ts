import { ICardImage } from "./cardImage";

export interface ICard {
  id: string;
  name: string;
  flavor_text: string;
  image_uris: ICardImage;
}