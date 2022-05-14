import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from 'react-hook-form';

import { 
  Flex, 
  Box,
  FormControl, FormLabel, FormErrorMessage,
  Input,
  Button
} from "@chakra-ui/react";

import { NameContext } from "../../hooks/nameStore";

type Inputs = {
  name: string
};

export function Home(){
  let navigate = useNavigate();
  const { state, dispatch } = useContext(NameContext);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>{
    dispatch({ type: 'SET_NAME', payload: data.name });
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor='name'>Nome</FormLabel>
          <Input 
            id='name' 
            type='name' 
            placeholder='Digite seu nome' 
            defaultValue={state.name}
            aria-invalid={errors.name ? "true" : "false"}
            {...register('name', {
              required: {
                value: true,
                message: 'Campo obrigatório'
              }
            })}
          />
          <FormErrorMessage role='alert'>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          mt={4}
          colorScheme='teal'
          type='submit'
          w='full'
          isLoading={isSubmitting}
        >
          Ver cartas
        </Button>
      </Box>
    </Flex>
  );
}