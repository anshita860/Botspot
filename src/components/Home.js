import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <div>
        <Container1>
            <h2>THE SOUL OF THE WORLD</h2>
            <h2>A SIMPLE SOLUTION</h2>
        </Container1>
        <Container2>
            
          <img src="./images/box-background.jpg"></img>
        </Container2>
        <Container3>
           For business and organisations. You can build community and engage audiences with one easy-to-use mobile app platform.
        </Container3>
        <Container4>
           <Know>Know More</Know>
           <Contact>Contact Us</Contact>
        </Container4>
        <Container5>
            <h1>Why choose BOTSPOT AI?</h1>
            <h1>We're so glad you</h1>
            <h1>asked!</h1>
            
            <Buttons>
            <Button1>GET STARTED TODAY</Button1>
            <Button2>OUR SERVICES</Button2>
            </Buttons>
        </Container5>
        </div>
    )
}
const Container1=styled.div`
    display: flex;
    flex-direction: column;
    h2{
        text-align: center;
    }
    
    letter-spacing: 3px;
`;
const Container2=styled.div`
    display: flex;
    justify-content: space around;
    img{
        background-color: tomato;
        margin: auto;
        border-radius:25px;
        width: 35%;
        height: 170px;
    }  
    
`;
const Container3=styled.div`
  margin: auto;
  width: 35%;
  margin-top: 10px;
  font-weight: bold;
  letter-spacing: 1px;
`;
const Container4=styled.div`
    display:  flex;
    justify-content: space-around;
    width: 20%;
    /* background-color: red; */
    margin: auto;
    margin-top: 15px;
    @media (max-width:1370px) and (min-width:945px ) {
        width: 30%;
    }
    @media (max-width:945px ){
        width: 40%;
    }
`;
const Know=styled.a`

   border: 2px solid black;
   padding: 10px;
   padding-left: 25px;
   padding-right: 25px;
   border-radius:25px;
   &:hover{
       cursor: pointer;
   }
`;
const Contact=styled.a`
   border: 2px solid black;
   padding: 10px;
   padding-left: 25px;
   padding-right: 25px;
   border-radius:25px;
   &:hover{
       cursor: pointer;
   }
`;
const Container5=styled.div`
  margin: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  h1{
      padding-bottom: 0px;
      margin-bottom: 0px;
  }
`;
const Button1=styled.div`
    margin-top: 15px;
    padding: 10px 12px;
    border: 2px solid black;
    border-radius: 25px;
    cursor: pointer;
    width: 30%;
    @media (max-width:1240px )and (min-width:950px ){
        width: 40%;
    }
    @media (max-width:950px ){
        width: 60%;
    }
`;
const Button2=styled.div`
    margin-top: 15px;
    padding: 10px 12px;
    border: 2px solid black;
    border-radius: 25px;
    cursor: pointer;
    width: 20%;
    @media (max-width:1370px)and (min-width:950px ){
        width: 30%;
    }
    @media (max-width:950px ){
        width: 50%;
    }
`;
const Buttons=styled.div`
   display: flex;
   flex-direction: column;
`;

export default Home
