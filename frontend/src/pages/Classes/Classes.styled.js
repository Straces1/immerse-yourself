import styled from 'styled-components'
import Classes from './Classes'

const ClassesStyled = styled(Classes)`

.poster {
        width: 100vw;
        position: relative;
        z-index: -1;
        
    }
    .poster h1 {
        position: absolute;
        top: 30%;
        left: 50%;
        color: #fff;
        font-size: 98pt;
        font-weight: 500;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
        margin: 0;
        transform: translateX(-50%);
    }
    .overlay {
        width: 100%;
        height: 130px;
        background-image: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));
        position: absolute;
        bottom: 3px;
        left: 0;
    }

    img {
        margin-top: 90px;
        width: 100%;
    }
    .class {
        display: flex;
        flex-direction: column;
    }
    .classes {
        margin-top: 5vh;
        margin-bottom: 15vh;
    }

    .classs-content h2 {
        margin: 15px 0;
        padding-bottom: 15px;
        font-size: 26pt;
        font-weight: 500;
        border-bottom: 2px solid #E9B632;
        max-width: 447px;
    }
    .date {
        margin: 0;
        
        font-size: 18pt;
        font-weight: 500;
        
        
    }
    .desc {
        font-size: 16pt;
    }
`

export default ClassesStyled;
