import React from 'react'
import styled from 'styled-components'

function Services() {
    return (
        <div>
            <Container1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </Container1>
            <Container2>
              <h1>Who We Serve</h1>
              <img src='./images/cart.png' />
            </Container2>
            <Container1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </Container1>
            <Container3>
              <img src='./images/finance.png' />
              <h1>Finance and Insurance</h1>
            </Container3>
            <Container3>
            <img src='' />
              <h1>Healthcare</h1>
            </Container3>
            <Container3>
            <img src='./images/construction.png' />
              <h1>Construction</h1>
            </Container3>
            <Container3>
              <img src='' />
              <h1>Wholesale and Retail</h1>
            </Container3>
            <Container3>
              <img src='./images/educaton.png' />
              <h1>Education</h1>
            </Container3>
            <Container3>
              <img src='' />
              <h1>Energy and Resources</h1>
            </Container3>
            <Container3>
            <img src='./images/entertain.png' />
              <h1>Entertainment</h1>
            </Container3>
            <Container3>
              <img src='' />
              <h1>Transportation</h1>
            </Container3>
        </div>
    )
}
const Container1=styled.div`
    margin: auto;
    margin-top: 20px;
    width: 40%;
    font-size: 18px;
`;
const Container2=styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  margin: auto;
  margin-top: 20px;
  align-items: center;
  img{
      height: 70px;
  }
`;
const Container3=styled.div`
    margin: auto;
    border: 4px solid purple;
    border-radius:25px;
    height: 150px;
    margin-top: 40px;
    width: 40%;
    font-size: 18px;
    text-align: center;
    
    img{
        height: 45px; 
    }
    h1{

    }
    @media (max-width:925px ) {
        width: 70%;
    }
    
`;
export default Services
