import styled from 'styled-components'
import About from './About'

const AboutStyled = styled(About)`
    .about {
        display: flex;
        width: 110%;
        margin: 0 auto;
        margin-top: 160px;
        margin-left: -5%;
        gap: 40px;
        position: relative;
        
    }
    .about img {
        width: 35vw;
        
    }
   
    .logo {
        
        position: absolute;
        top:0;
        right: 0;
    }
    .about-desc{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .about-desc p {
        font-size: 16pt;
        width: 25vw;
        margin: 0;
        margin-top: 40px;
    }
    .about-desc h2 {
        font-size: 28pt;
    }


    //poster
    .about-poster {
        display: flex;
        flex-direction: column;
        gap: 0px;
        position: relative;
        margin: 10vh 0;
    }
    .pos-absolute {
        position: absolute;
        top: 43%;

    }
    .cold-water, .joga {
        width: 100vw;
    }
    .cold-water {
        height: 70vh;
    }
    .joga {
        height: 80vh;
    }
    .mask {
        width:100%;
        height:100%;
        background: rgba(56,68,93,0.7);
        display: flex;
        flex-direction: column;
    }
    .mask h1, .mask p {
        text-align: center;
        color: #fff;
    }
    .mask h1 {
        margin-top: 200px;
        color: #fff;
        font-size: 38pt;
        font-weight: 400;
    }
    .mask.one h1 {
        margin-top: 150px;
    }
    .mask p {
        width: 40vw;
        font-size: 16pt;
        margin: 0 auto;
        @media (max-width: 993px) {
            width: 80vw;
        }
    }

    //team 
    .team {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 3vw;
        margin-bottom: 20vh;
    }
   
    .item img{
        width: 195px;
        height: 172px;
        object-fit: cover;
        border-radius: 10px;
    }
    h2 {
        font-size: 24pt;
        font-weight: 500;
    }
    .item h2{
        font-size: 20pt;
        font-weight: 500;
        min-height: 48pt;

    }
    .item p {
        padding-top: 40px;
        border-top: 2px solid #E8A725;
        font-size: 16pt;
        /* text-align: center; */
    }
    

`

export default AboutStyled;
