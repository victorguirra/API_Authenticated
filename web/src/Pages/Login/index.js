import React from 'react';

import Input from '../../Components/Input';
import ButtonSubmit from '../../Components/ButtonSubmit';

import LoginImage from '../../Assets/Login.svg';

import { Container, 
        HalfContainer, 
        Form,
        Title,
        Image,  
} from './styles';

export default function Login(){
    return(
        <Container>

            <HalfContainer colorized >
                
                <h1>Faça o Login Agora Mesmo!</h1>

                <Form>

                    <Input 
                        label="Email:" 
                        type="email" 
                        id="email" 
                        placeholder="Digite Seu Email" 
                    />

                    <Input 
                        label="Senha:" 
                        type="password" 
                        id="password" 
                        placeholder="Digite Sua Senha" 
                    />

                    <ButtonSubmit title="Entrar" destiny="/login"/>

                </Form>

            </HalfContainer>

            <HalfContainer >
                
                <Title>Bazaar</Title>

                <Image src={ LoginImage } alt="Bazaar" />

            </HalfContainer> 

        </Container>
    )
}