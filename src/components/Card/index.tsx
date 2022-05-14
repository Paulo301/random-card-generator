import { useEffect, useState } from "react";

import { 
  Divider,
  Flex, 
  Heading,
  HStack,
  Image,
  Text
} from "@chakra-ui/react";

import { ICard } from "../../interfaces/card";
import { randomWithRange } from "../../utils/randomWithRange";
import { Level } from "./Level";

import cardTexture from '../../assets/xyz-monster-texture.jpg';
import noImage from '../../assets/no-image-available.jpg';

interface CardProps{
  cardInfo: ICard;
}

export function Card({ cardInfo }: CardProps) {
  const [cardLevels, setCardLevels] = useState<JSX.Element[]>([]);
  const [atk, setAtk] = useState(0);
  const [def, setDef] = useState(0);

  useEffect(() => {
    const tempCardLevels = [];
    const cardLevel = randomWithRange(0,11);

    for(let i=0; i < cardLevel; i++){
      tempCardLevels.push(<Level key={i} />);
    }

    setCardLevels(tempCardLevels);
    setAtk(randomWithRange(0, 3001));
    setDef(randomWithRange(0, 3001));
  }, []);

  return (
    <Flex
      flexDir='column'
      border='6px solid #757575'
      w='300px'
      h='450px'
      p='8px'
      alignItems='center'
      justifyContent='space-between'
      bgImg={cardTexture}
    >
      <Flex
        w='266px'
        h='28px'
        px='4px'
        pb='2px'
        border='1px solid #424242'
        boxShadow='2px 2px #424242;'
      >
        <Heading 
          as='h4' 
          size='md'
          title={cardInfo.name}
          noOfLines={1}
          lineHeight={1.2}
          color='#f5f5f5'
        >
          {cardInfo.name}
        </Heading>
      </Flex>

      <HStack
        spacing='5px'
        w='full'
        ml='30px'
      >
        { cardLevels }
      </HStack>

      <Image
        border='4px solid #bdbdbd'
        boxSize='240px'
        src={cardInfo.image_uris?.art_crop}
        fallbackSrc={noImage}
      />

      <Flex
        flexDir='column'
        w='266px'
        h='86px'
        p='2px'
        border='2px solid #e65100'
        bgColor='#fff3e0'
      >
        <Text
          flex={1}
          lineHeight={1.2}
          title={cardInfo.oracle_text}
          noOfLines={3}
          whiteSpace="pre-wrap"
        >
          {cardInfo.oracle_text}
        </Text>
        <Divider />
        <HStack
          justifyContent='flex-end'
          lineHeight={1.1}
        >
          <Text
            letterSpacing='1px'
          >
            ATK/{atk}
          </Text>
          <Text
            letterSpacing='1px'
          >
            DEF/{def}
          </Text>
        </HStack>
      </Flex>
    </Flex>
  );
}