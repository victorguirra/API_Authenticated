import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    body, input, button{
        font-family:'Oswald', sans-serif;
        
        --purple: #8357E5;
        --green: ##04D362; 
    }

`;

export default GlobalStyle;