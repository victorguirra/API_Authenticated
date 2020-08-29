import styled from 'styled-components';

export const Container = styled.div`
    margin-top:15px;
    display:flex;
    flex-direction:column;
`;

export const Label = styled.label`
    margin-left:5px;
`;

export const TextInput = styled.input`
    height:45px;
    padding:0 12px;
    margin-top:7px;
    background-color:transparent;
    color:var(--white);
    border:2px solid var(--white);
    border-radius:8px;
    font-size:15px;
    outline:0;

    &::placeholder{
        color:var(--white);
    }
`;