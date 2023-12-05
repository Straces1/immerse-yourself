import styled from 'styled-components'
import Footer from './Footer'

const FooterStyled = styled(Footer)`
    background-color: #38445D;
    width: 100%;
    height: 176px;
    color: white;

    p {
        margin: 0;
        text-align: right;
        font-size: 14pt;
        
    }
    .login, .admin {
        margin-left: auto;
        color: #fff;
        font-size: 20pt;
        font-weight: 500;
        
    }
    .admin {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    .admin button {
        border: none;
        color: #fff;
        font-size: 20pt;
        padding: 0;
        background: none;
        cursor: pointer;
       
        
    }
    a {
        color: #fff;
        text-decoration: none;
        display: inline;
        
        
    }
    .admin button:hover, a:hover{
        
        transform: translateY(-3px);
        
    }
    .stuff {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width:75vw;
        margin: 0 auto;
        padding: 10px 0;
        font-size: 16pt;
   
    }
`

export default FooterStyled;