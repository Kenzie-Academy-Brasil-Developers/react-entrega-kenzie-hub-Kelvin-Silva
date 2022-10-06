import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Inter', sans-serif;
        font-size: 16px;
        
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    ul, ol, li{
        list-style: none;
    }

    img{
        max-width: 100%;
    }

    input, select{
        background: transparent;
        border: none;
    } 

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-Negative: #59323F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --white: #fff
        --sucess: #3FE864;
        --negative: #E83F5B;


        --title1-font: 16px;
        --title2-font: 16px;
        --title3-font: 16px;
        --headline-font: 12px;
       

        
    }

    body{
        background-color: var(--grey-4);
        color: var(--grey-0);
       
    }

    h1 {
    color: var(--color-primary);

    font-size: 20px;
    font-weight: bold;
  }

  a{
   text-decoration:none;
   color:inherit;
  }

`;
