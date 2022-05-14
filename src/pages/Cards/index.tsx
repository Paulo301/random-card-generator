import { useContext, useEffect, useState } from "react";

import { GiCardPickup, GiCardExchange } from "react-icons/gi";

import { 
  Flex,
  Box, 
  Heading,
  SimpleGrid,
  Button
} from "@chakra-ui/react";

import { ICard } from "../../interfaces/card";
import { cardsApi } from "../../services/cardsApi";
import { NameContext } from "../../hooks/nameStore";
import { Card } from "../../components/Card";
import { randomWithRange } from "../../utils/randomWithRange";
import { shuffle } from "../../utils/shuffle";

export function Cards(){
  const { state } = useContext(NameContext);

  const [cards, setCards] = useState<ICard[]>([]);
  const [drawnCards, setDrawnCards] = useState<ICard[]>([]);

  useEffect(() => {
    cardsApi.getCards().then((res) => {
      const tempCards = res.data;
      const tempDrawnCards = [];

      for(let i=0; i < 5; i++){
        const index = randomWithRange(0, tempCards.length);
        tempDrawnCards.push(tempCards.splice(index, 1)[0]);
      }

      setCards(tempCards);
      setDrawnCards(tempDrawnCards);
    }).catch((error) => console.log(error))
  }, []);

  function drawCard(){
    const tempCards = [...cards];
    const tempDrawnCards = [...drawnCards];

    const index = randomWithRange(0, cards.length);
    tempDrawnCards.push(tempCards.splice(index, 1)[0]);

    setCards(tempCards);
    setDrawnCards(tempDrawnCards);
  }

  return (
    <Flex 
      flexDir='column' 
      px='16px'
      pb='60px'
    >
      <Box
        as='header'
        display='flex'
        flexDir='row-reverse'
      >
        <Heading 
          as='h3' 
          size='lg'
        >
          {state.name}
        </Heading>
      </Box>

      <SimpleGrid 
        mt={4}
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing='20px'
        justifyItems='center'
      >
        {
          drawnCards.map((card) => (
            <Card 
              key={card.id}
              cardInfo={card} 
            />
          ))
        }
      </SimpleGrid>

      <SimpleGrid 
        mb={4}
        columns={2} 
        spacing='40px' 
        alignSelf='center'
        position='fixed'
        bottom={0}
      >
        <Button
          leftIcon={<GiCardPickup size='18px' />} 
          colorScheme='teal'
          isLoading={cards.length === 0}
          isDisabled={drawnCards.length === 8}
          onClick={drawCard}
        >
          Puxar
        </Button>
        <Button
          leftIcon={<GiCardExchange size='18px' />} 
          colorScheme='teal'
          isLoading={cards.length === 0}
          onClick={() => setDrawnCards(shuffle([...drawnCards]))}
        >
          Embaralhar
        </Button>
      </SimpleGrid>
    </Flex>
  );
} 