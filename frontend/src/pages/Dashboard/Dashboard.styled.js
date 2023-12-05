import styled from 'styled-components'
import Dashboard from './Dashboard'



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


export default DashboardStyled