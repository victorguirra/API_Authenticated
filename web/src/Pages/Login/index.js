import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../Components/Input';
import ButtonSubmit from '../../Components/ButtonSubmit';

import LoginImage from '../../Assets/Login.svg';

import api from '../../Services/api';

import { Container, 
        HalfContainer, 
        Form,
        Title,
        Image,  
} from './styles';

export default function Login(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { replace } = useHistory();

    async function submitForm( event ){
        event.preventDefault();

        await api.post('/users/authenticate', {
            email,
            password
        }).then( async () => {
            const userData = await api.get('/users');

            const findUserData = userData.data.find( user => user.email === email )

            replace(`/home/${ findUserData._id }`)

        }).catch(() => {
            alert('Email e/ou Senha Inválidos!');

            document.location.reload(true);
        }) 
    }

    return(
        <Container>

            <HalfContainer colorized >
                
                <h1>Faça o Login Agora Mesmo!</h1>

                <Form onSubmit={ submitForm }>

                    <Input 
                        label="Email:" 
                        type="email" 
                        id="email" 
                        placeholder="Digite Seu Email" 
                        onChange={ text => setEmail( text.target.value ) }
                    />

                    <Input 
                        label="Senha:" 
                        type="password" 
                        id="password" 
                        placeholder="Digite Sua Senha" 
                        onChange={ text => setPassword( text.target.value ) }
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