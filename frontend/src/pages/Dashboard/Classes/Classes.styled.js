import styled from 'styled-components'
import Classes from './Classes'

const ClassesDash = styled(Classes)`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
        padding-bottom: 50px;
    h1 {
        margin-top: 120px;
    }
    h2 {
        border-bottom: 1px solid #E8A725;
        padding-bottom: 15px;
        width: 58%;
    }
    button {
        cursor: pointer;
    }
    .right {
        padding-left:5vw;
    }
    .left h3 {
        margin-top: 0;
    }
    .classes {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    input, textarea, button {
        border-radius: 10px;
        border: 1px solid #38445D;
        font-size: 14pt;
        font-family: 'Raleway', sans-serif;
        color: #38445D;
        box-shadow: 0 4px 4px rgba(0,0,0,0.5);
    }
    input, textarea {
        padding: 5px;
    }
    input, button {
        height: 33px;
    }
    form button {
        border: none;
        margin-top: 10px;
        padding: 7px 0;
        background-color: #38445D;
        color: #fff;
    }
    form button:hover {
        opacity: 0.8;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        gap: 33px;
    }
    .buttons button {
        justify-content: center;
        align-content: center;
        height: 39px;
        padding: 0 20px;
        box-shadow: none;  
    }
    .buttons button:nth-child(1) {
        background-color: green;
        border: 2px solid #38445D;
        background-color: #fff;
    }
    .buttons button:nth-child(2) {
        background-color: #38445D;
        border: none;
        color: #fff;
    }
    form span {
        font-size: 10pt;
        margin-top: -5px;

    }
    input[type="file"] {
        border: none;
        box-shadow: none;
    }
    span.err {
        color: red;
    }
`

export default ClassesDash