import styled from 'styled-components'
import ContactForm from "./ContactForm";

const FormStyled = styled(ContactForm)`
    display: flex;
    flex-direction: column;
    width: 912px;
    margin: 0 auto;
    margin-bottom: 20vh;

    padding-top: 35px;
    background-position: 327px -30px;

    @media (min-width: 1072px) {
        transform: translateX(81px);
     
        }

    p, h2 {
        font-size: 24pt;
        margin: 0;
        font-weight: 500;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        border: 3px solid #38445D;
        padding: 20px;
        border-radius: 15px;
        width: 750px;
        
        margin-top: 20px;
        background-color: #fff;
    }
    input, textarea, button {
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
    }
    input {
        height: 33px;
    }
    input:focus, textarea:focus {
        outline: none;
    }
    span.err {
        margin-top: -10px;
        color: red;
        font-size: 10pt;
    }

    @media (max-width: 1020px) {
            width: 862px;
            background-position: 277px -30px;
            form{
                width: 700px;
            }
            p {
                transform: translateY(-40px);
            }
        }
        @media (max-width: 966px) {
            width: 792px;
            background-position: 207px -30px;
            form{
                width: 630px;
            }
        }
        @media (max-width: 835px) {
            width: 760px;
            background-position: 177px -30px;
            margin:0;
            margin-left: 5vw;
            margin-bottom: 30px;
            form{
                width: 600px;
            }
        }
        @media (max-width: 800px) {
            width: 710px;
            background-position: 127px -10px;
            margin:0;
            margin-left: 5vw;
            margin-bottom: 50px;
            form{
                width: 550px;
                margin-top: 50px;
            }
            p:nth-child(2) {
                max-width: 300px;
            }
        }
        @media (max-width: 748px) {
            width: 710px;
            margin-left: 3vw;
        }
        @media (max-width: 732px) {
            width: 100vw;
            margin-left: 0;
            padding-top: 100px;
            
            background-position: 180% 50%;
            form {
                margin: 0 auto;
                background: rgba(255,255,255,0.5);
            }
            p {
                transform: translateY(-100px);
                margin-left: 20px;
            }
        }
        @media (max-width: 709px) {
            width: 100vw;
            form {
                width: 90%;
            }
        }
        @media (max-width: 688px) {
            width: 100vw;
            background-position: 250% 50%;
            form {
                width: 90%;
            }
        }
        @media (max-width: 676px) {
            padding-top: 200px;
            p {transform: translateY(-180px);}
            form {transform: translateY(-150px);}
        }

`

export default FormStyled;