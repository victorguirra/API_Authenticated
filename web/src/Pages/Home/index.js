import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../Services/api';

import { Container } from './styles';

export default function Home(){
    const { id } = useParams();

    const [ userData, setUserData ] = useState([]);
    
    useEffect(() => {

        async function FetchData(){
            const allUsersData = await api.get('/users');

            const findUserData = allUsersData.data.find( user => user._id === id);

            await setUserData(findUserData);
        }

        FetchData();

    }, [])

    return(
        <Container>

            <h1>Seja Muito Bem-Vindo(a) {userData.name}</h1>

        </Container>
    )
}