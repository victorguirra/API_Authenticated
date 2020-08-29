import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    body, input, button{
        font-family:'Oswald', sans-serif;
        
        --purple: #8357E5;
        --light-purple:#9871F5;
        --green: #04D362;
        --dark-green: #0bb357;
        --white: #ffffff; 
        --black: #000000;
    }

`;

export default GlobalStyle;