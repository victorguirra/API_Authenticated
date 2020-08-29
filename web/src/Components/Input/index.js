import React from 'react';

import { Container, Label, TextInput } from './styles';

export default function Input( props ){
    return(
        <Container>

            <Label hmtlFor={ props.id }>{props.label}</Label>

            <TextInput 
                type={ props.type } 
                id={ props.id } 
                placeholder={ props.placeholder }
                required
                onChange={ props.onChange } 
            />

        </Container>
    )
}