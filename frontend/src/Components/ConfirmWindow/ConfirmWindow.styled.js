import styled from 'styled-components'
import ConfirmWindow from './ConfirmWindow'

const StyledConfirm = styled(ConfirmWindow)`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #D06262;
    padding: 50px 100px;
    .btns {
        display: flex;
        flex-direction: row;
        gap: 5px;
        justify-content: center;
    }
    .btns button {
        min-width: 90px;
    }
`

export default StyledConfirm;