import styled from 'styled-components';

export const Container = styled.div`
    width:70%;
    position:absolute;
    top:0;
    padding:12px 0;
    display:flex;
    align-items:center;
    justify-content:space-between;

    .linkNewProduct{
        text-decoration:none;
    }
`;

export const UserContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;

export const ImageContainer = styled.div`
    background-color:var(--white);
    width:60px;
    height:60px;
    border-radius:30px;
    margin-right:25px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const AvatarImage = styled.img`
    width:60px;
    height:60px;
`;

export const UserName = styled.p`
    color:var(--white);
    font-size:20px;
`;

export const ButtonAddNewProduct = styled.div`
    background-color:var(--green);
    width:60px;
    height:60px;
    border-radius:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:var(--white);
    font-size:20px;
`;