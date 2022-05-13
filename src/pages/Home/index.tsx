import { FormEvent, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { 
  Flex, 
  Box,
  FormControl, FormLabel,
  Input,
  Button
} from "@chakra-ui/react";

import { NameContext } from "../../hooks/nameStore";

export function Home(){
  let navigate = useNavigate();
  const { state, dispatch } = useContext(NameContext);

  const [name, setName] = useState(state.name);

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    dispatch({ type: 'SET_NAME', payload: name });
    navigate('/cards');
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
            value={name}
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