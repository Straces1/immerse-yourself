import styled from 'styled-components'

const FlexContainer = styled.div`
    width: 70vw;
    margin: 0 auto;
    position: relative;
    
    @media (max-width: 1100px) {
            width: 75vw;
        }
    @media (max-width: 1022px) {
            width: 85vw;
        }
        @media (max-width: 841px) {
            width: 100vw;
            padding: 0 15px;
        }

`

export default FlexContainer;