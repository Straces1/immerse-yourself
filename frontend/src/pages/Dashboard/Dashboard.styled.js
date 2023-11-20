import styled from 'styled-components'
import Dashboard from './Dashboard'
import Classes from './Classes'
import Events from './Events'
import EmailList from './EmailList'


const DashboardStyled = styled(Dashboard)`
    h1 {
        margin-top: 120px;
    }
    nav {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
        background-color: #38445D;
        opacity: 0.8;
        padding: 10px 0;
        
    }
    nav div:nth-child(1) {
        display: flex;
        justify-content: space-between;
    }
    a {
        text-decoration: none;
        color: #fff;
        font-size: 14pt;
        font-weight: 400;
        
    }
    a:nth-child(1) {
        padding-left: 20px;
    }
    a:hover {
        transform: translateY(-3px);
    }
`


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
const EventsDash = styled(Events)`
    display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
        padding-bottom: 50px;h1 {
        margin-top: 120px;
    }
    h2 {
        border-bottom: 1px solid #E8A725;
        padding-bottom: 15px;
        width: 58%;
    }
    .right {
        padding-left:5vw;
    }
    .left h3 {
        margin-top: 0;
    }
    .events {
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
`
const EmailListDash = styled(EmailList)`
    h1 {
        margin-top: 120px;
    }
`


export {
    DashboardStyled,
    ClassesDash,
    EventsDash,
    EmailListDash

};