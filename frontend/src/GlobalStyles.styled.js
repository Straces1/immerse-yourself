import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    #root {
        height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
        color: #38445D;
        /* height: max-content; */
        

    }
    .App {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .App main {
        flex-grow: 1;
    }



`