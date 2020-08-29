import styled from 'styled-components';

export const Container = styled.button`
    width:100%;
    height:54px;
    margin-top:30px;
    margin-bottom:15px;
    font-size:16px;
    background-color:var(--green);
    border-radius:8px;
    outline:0;
    border:0;
    cursor:pointer;
    transition:0.3s;
    
    .link{
        text-decoration:none;
        color:var(--white);
    }

    &:hover{
        background-color:var(--dark-green);
    }
`;