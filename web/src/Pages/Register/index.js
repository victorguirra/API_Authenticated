import React from 'react';

import Input from '../../Components/Input';
import ButtonSubmit from '../../Components/ButtonSubmit';

import RegisterImage from '../../Assets/Register.svg';

import { Container, 
        HalfContainer, 
        Form,
        Title,
        Image, 
} from './styles';

export default function Login(){
    return(
        <Container>

            <HalfContainer >
                
               <Title>Bazaar</Title>

               <Image src={ RegisterImage } alt="Bazaar" />

            </HalfContainer>

            <HalfContainer colorized >
                
                <h1>Cadastre-se Agora Mesmo!</h1>

                <Form>

                    <Input 
                        label="Nome:" 
                        type="text" 
                        id="name" 
                        placeholder="Digite Seu Nome" 
                    />

                    <Input 
                        label="Email:" 
                        type="email" 
                        id="email" 
                        placeholder="Digite Seu Email" 
                    />

                    <Input 
                        label="Apelido:" 
                        type="text" 
                        id="nickname" 
                        placeholder="Digite Seu Apelido" 
                    />

                    <Input 
                        label="Endereço:" 
                        type="text" 
                        id="address" 
                        placeholder="Digite Seu Endereço" 
                    />

                    <Input 
                        label="Whatsapp:" 
                        type="text" 
                        id="whatsapp" 
                        placeholder="Digite Seu Whatsapp" 
                    />

                    <ButtonSubmit title="Cadastrar" destiny="/register" />

                </Form>

            </HalfContainer>

        </Container>
    )
}