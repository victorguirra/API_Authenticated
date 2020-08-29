import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../Components/Input';
import ButtonSubmit from '../../Components/ButtonSubmit';

import RegisterImage from '../../Assets/Register.svg';

import api from '../../Services/api';

import { Container, 
        HalfContainer, 
        Form,
        Title,
        Image, 
} from './styles';

export default function Login(){
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ password, setPassword ] = useState('');

    const { replace } = useHistory();

    async function submitForm( event ){
        event.preventDefault();

        await api.post('/users', {
            name,
            email,
            address,
            whatsapp,
            password,
        }).then(async () => {
            const allUserData = await api.get('/users');

            const newUserData = allUserData.data.find( user => user.email === email )

            await alert('Sua conta foi criada com sucesso! Clique em ok para prosseguir');
                
            replace(`/home/${ newUserData._id }`)
                        
        }).catch((error) => {
            alert(` O Email Inserido já está em uso! Favor tentar com outro! `)

            document.location.reload(true);
        })
    }

    return(
        <Container>

            <HalfContainer >
                
               <Title>Bazaar</Title>

               <Image src={ RegisterImage } alt="Bazaar" />

            </HalfContainer>

            <HalfContainer colorized >
                
                <h1>Cadastre-se Agora Mesmo!</h1>

                <Form onSubmit={ submitForm } >

                    <Input 
                        label="Nome:" 
                        type="text" 
                        id="name" 
                        placeholder="Digite Seu Nome" 
                        onChange={ text => setName(text.target.value) }
                    />

                    <Input 
                        label="Email:" 
                        type="email" 
                        id="email" 
                        placeholder="Digite Seu Email" 
                        onChange={ text => setEmail(text.target.value) }
                    />

                    <Input 
                        label="Endereço:" 
                        type="text" 
                        id="address" 
                        placeholder="Digite Seu Endereço" 
                        onChange={ text => setAddress(text.target.value) }
                    />

                    <Input 
                        label="Whatsapp:" 
                        type="text" 
                        id="whatsapp" 
                        placeholder="Digite Seu Whatsapp" 
                        onChange={ text => setWhatsapp(text.target.value) }
                    />

                    <Input 
                        label="Senha:" 
                        type="password" 
                        id="password" 
                        placeholder="Digite Sua Senha" 
                        onChange={ text => setPassword(text.target.value) }
                    />

                    <ButtonSubmit title="Cadastrar" destiny="/register" />

                </Form>

            </HalfContainer>

        </Container>
    )
}