import React from 'react';

import Avatar from '../../Assets/Avatar.png';

import { Container, 
        UserContainer, 
        ImageContainer, 
        AvatarImage,
        UserName,
        Logo,
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

            <Logo>Bazaar</Logo>

        </Container>
    )
}