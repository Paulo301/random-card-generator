import { MdOutlineStar } from 'react-icons/md';

import { Flex } from "@chakra-ui/react";

export function Level() {
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      boxSize='16px'
      borderRadius='50%'
      bgColor='#424242'
    >
      <MdOutlineStar color='#fdd835' size='16px' />
    </Flex>
  );
}