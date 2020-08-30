import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../Assets/Avatar.png';

import { Container, 
        UserContainer, 
        ImageContainer, 
        AvatarImage,
        UserName,
        ButtonAddNewProduct,
} from './styles';

export default function Header( props ){
    return(
        <Container>

            <UserContainer>

                <ImageContainer>

                    <AvatarImage src={ Avatar } alt="Foto de Perfil" />

                </ImageContainer>

                <UserName>{ props.username }</UserName>

            </UserContainer>

            <Link to="/" className="linkNewProduct">

                <ButtonAddNewProduct>

                    <h1>+</h1>

                </ButtonAddNewProduct>

            </Link>

        </Container>
    )
}