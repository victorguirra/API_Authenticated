import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function ButtonSubmit( props ){
    return(
        <Container type="submit">
            <Link to={ props.destiny } className="link" >   
                { props.title }
            </Link>
        </Container>
    )
}