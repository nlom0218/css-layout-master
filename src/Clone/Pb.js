import React from 'react';
import styled from 'styled-components';
import PbHeader from './PbHeader';
import PbMain from './PbMain';

const Container = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding-top: 70px;
`

const Footer = styled.footer`
  margin-top: 100px;
  background-color: #f3ede8;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 65px 0px;
  .footer__column {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    .column__title {
      margin-bottom: 50px;
      opacity: 0.5;
    }
    ul {
        text-align: center;
      } li {
        margin-bottom: 15px;
      }
  &:nth-child(2) {
    border-right: 1px solid black;
    border-left: 1px solid black;
    }
  }
`

const Pb = () => {
  return (
    <Container>
      <PbHeader />
      <PbMain />
      <Footer>
        <div class="footer__column">
          <span class="column__title">Support</span>
          <ul>
            <li>F.A.Q.</li>
            <li>Privacy Policu</li>
            <li>Terms and Conditions</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div class="footer__column">
          <span class="column__title">Follow Us</span>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div class="footer__column">
          <span class="column__title">Support</span>
          <ul>
            <li>F.A.Q.</li>
            <li>Privacy Policu</li>
            <li>Terms and Conditions</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </Footer>
    </Container>
  );
}

export default Pb;