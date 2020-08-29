import styled from 'styled-components';

export const Container = styled.div`
    background-color:var(--purple);
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const Title = styled.h1`
    color:var(--white);
    font-size:40px;
    margin-bottom:10px;
`;

export const Image = styled.img`
    width:40%;

    @media(max-width:980px){
        width:70%;
    }
`;

export const ButtonsContainer = styled.div`
    width:30%;
    margin-top:50px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    @media(max-width:980px){
        flex-direction:column;
        width:70%;
    }

    .button{
        width:48%;
        height:54px;
        border-radius:8px;
        display:flex;
        align-items:center;
        justify-content:center;
        text-decoration:none;
        transition:0.2s;
        color:var(--white);

        &:hover{
            height:60px;
        }

        @media(max-width:980px){
            width:100%;
            margin-top:30px;
        }
    }

    #login{
        background-color:var(--light-purple);
    }

    #register{
        background-color:var(--green);
    }
`;
 
