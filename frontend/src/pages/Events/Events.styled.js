import styled from 'styled-components'
import Events from './Events'

const EventsStyled = styled(Events)`
display: flex;
flex-direction: column;
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
        width: 100%;
    }
    .events {
        margin-bottom: 10vh;
        padding-top: 30px;


    }
    .event {
        display: flex;
        flex-direction: column;
        
    }
    .right-col {
        padding-top: 20px;
    }
    .event-content {
        display: flex;
        gap: 15vw;
        margin-bottom: 20px;
        height: 100%;

    }
    .event-content img {
        min-width: 289px;
        max-width: 289px;
        height: 262px;
        object-fit: cover;
        margin: 40px auto;
        border-radius: 10px;
    }
    .event-content h2 {
        margin: 15px 0;
        font-size: 26pt;
        font-weight: 500;
    }
    .date {
        margin: 0;
        padding: 15px 0;
        font-size: 20pt;
        font-weight: 500;
        border-top: 2px solid #E9B632;
        
    }
    .desc {
        font-size: 16pt;
        margin: 0;
    }



`

export default EventsStyled;
