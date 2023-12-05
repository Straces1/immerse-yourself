import styled from 'styled-components'
import Login from './Login'

const LoginStyled = styled(Login)`
h1 {
    margin-top: 100px;
}
    form {
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
        border: 2px solid #38445D;
        padding: 20px;
        border-radius: 15px;
        width: 350px;
        
        background-color: #fff;
    }
    input, select, button {
        border-radius: 10px;
        border: 1px solid #38445D;
        font-size: 14pt;
        padding: 10px;
        font-family: 'Raleway', sans-serif;
        color: #38445D;
        box-shadow: 3px 5px 8px rgba(0,0,0,0.5);
        
    }
    button {
        padding: 5px 10px;
        background-color: #38445D;
        color: #fff;
    }
    input {
        height: 33px;
    }
    input:focus, textarea:focus {
        outline: none;
    }
    .err {
        color: red;
        margin-left: 5px;
    }
`

export default LoginStyled