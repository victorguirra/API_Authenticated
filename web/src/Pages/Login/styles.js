import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:row;

    @media(max-width:980px){
        flex-direction:column;
    }
`;

export const HalfContainer = styled.div`
    width:50%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:${ props => props.colorized ? 'var(--purple)' : 'var(--white)' };
    color:${ props => props.colorized ? 'var(--white)' : 'var(--black)' };

    @media(max-width:980px){
        width:100%;
    }

    h1{
        margin-bottom:50px;

        @media(max-width:980px){
            margin-top:20px;
        }
    }
`;

export const Form = styled.form`
    width:50%;

    @media(max-width:980px){
        width:75%;
        margin-bottom:20px;
    }
`;

export const Title = styled.h1`
    color:var(--purple);
    font-size:50px;
    margin-top:20px;
`;

export const Image = styled.img`
    width:70%;
    margin-top:50px;

    @media(max-width:980px){
        margin-bottom:20px;
    }
`;