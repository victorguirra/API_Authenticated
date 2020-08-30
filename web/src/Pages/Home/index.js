import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../Services/api';

import Header from '../../Components/Header';

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

    }, [id])

    return(
        <Container>
            
            <Header username={ userData.name } />

            <h1>Seja Muito Bem-Vindo(a) {userData.name}</h1>

        </Container>
    )
}