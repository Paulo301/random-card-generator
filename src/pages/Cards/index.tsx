import { useEffect, useState } from "react";
import { ICard } from "../../interfaces/card";
import { cardsApi } from "../../services/cardsApi";

export function Cards(){
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    cardsApi.getCards().then((res) => {
      setCards(res.data);
    }).catch((error) => console.log(error))
  }, []);

  return (
    <div>Cards</div>
  );
} 