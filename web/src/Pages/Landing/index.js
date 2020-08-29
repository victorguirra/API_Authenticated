import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../../Assets/Hero.svg';

import { Container, Title, Image, ButtonsContainer } from './styles';

export default function Landing(){
    return(
        <Container>
            
            <Title>Bazaar</Title>

            <Image src={ Hero } alt="Bazaar" />

            <ButtonsContainer>

                <Link to="/login" className="button" id="login">

                    Login

                </Link>

                <Link to="/register" className="button" id="register">

                    Criar Conta

                </Link>

            </ButtonsContainer>

        </Container>
    )
}