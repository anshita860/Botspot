import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <Title>
               BOTSPOT AI
            </Title>
            <Icons>
                <img src="./images/phone3.png"></img>
                <img src="./images/search2.png"></img>
                <img src="./images/menu3.png"></img>
            </Icons>
            <Bgimage />
        </Container>
    )
}
const Container=styled.nav`
    display: flex;
    justify-content: space-between;
    height: 50px;
    

`;
const Title=styled.div`
    /* background-color: red; */
    width: 15%;
    padding: 10px;
    font-family: 'Noto Sans Display', sans-serif;
    font-weight: bold;
    letter-spacing: 2px;
    
`;
const Icons=styled.div`
    display: flex;
    justify-content: space-around;
    height: 70%;
    width: 15%;
    margin-top: 10px;
    &:hover{
        cursor: pointer;
    }
`;
const Bgimage=styled.div`
    height:105%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat; 

    background-image:url("/images/background.jpg") ;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index:-1;
    
`;
export default Header
