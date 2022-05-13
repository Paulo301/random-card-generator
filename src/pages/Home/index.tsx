import { FormEvent, useState } from "react";

import { 
  Flex, 
  Box,
  FormControl, FormLabel,
  Input,
  Button
} from "@chakra-ui/react";

export function Home(){
  const [name, setName] = useState("");

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    console.log(name);
  }

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      h='100vh'
    >
      <Box
        as='form'
        onSubmit={handleSubmit}
      >
        <FormControl>
          <FormLabel htmlFor='name'>Nome</FormLabel>
          <Input 
            id='name' 
            type='name' 
            placeholder='Digite seu nome' 
            onChange={(event) => setName(event.target.value)}
          />
        </FormControl>

        <Button
          mt={4}
          colorScheme='teal'
          type='submit'
          w='full'
        >
          Ver cartas
        </Button>
      </Box>
    </Flex>
  );
}