import styled from 'styled-components'
import PopUp from './PopUp'

const PopUpSuccess = styled(PopUp)`
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    background-color: #38445D;
    opacity: 0.8;
    color: #fff;
    padding: 50px 20px;
    border-radius: 4px;
    z-index: 1000;
    text-align: center;
    transition: opacity 0.3s;
    p {
        margin: 0;
    }
`
const PopUpFail = styled(PopUp)`
    position: fixed;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    background-color: #D06262;
    opacity: 0.8;
    color: #fff;
    padding: 50px 20px;
    border-radius: 4px;
    z-index: 1000;
    text-align: center;
    transition: opacity 0.3s;
    p {
        margin: 0;
    }
`
const DashPopUpSuccess = styled(PopUp)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #38445D;
    opacity: 0.8;
    color: #fff;
    padding: 50px 20px;
    border-radius: 4px;
    z-index: 1000;
    text-align: center;
    transition: opacity 0.3s;
    font-size: 28pt;
    p {
        margin: 0;
    }
`
const DashPopUpFail = styled(PopUp)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #D06262;
    opacity: 0.8;
    color: #fff;
    padding: 50px 20px;
    border-radius: 4px;
    z-index: 1000;
    text-align: center;
    transition: opacity 0.3s;
    p {
        margin: 0;
    }
`
export {PopUpSuccess, PopUpFail, DashPopUpFail, DashPopUpSuccess}