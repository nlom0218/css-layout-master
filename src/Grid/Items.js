import React from 'react';
import styled from 'styled-components';

const Father = styled.div`
  background-color: gray;
  display: grid;
  height: 100vh;
  gap: 10px;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
  div {
    font-size: 20px;
    font-weight: 600;
  }
  place-items: stretch stretch;
  place-content: center center;
`

const Header = styled.div`
  background-color: blue;
`

const Content = styled.div`
  background-color: green;
`

const Nav = styled.div`
  background-color: red;
`

const Footer = styled.div`
  background-color: yellow;
`


const Items = () => {
  return (<Father>
    <Header>header</Header>
    <Content>content</Content>
    <Nav>nav</Nav>
    <Footer>footer</Footer>
    <Header>header</Header>
    <Content>content</Content>
    <Nav>nav</Nav>
    <Footer>footer</Footer>
    <Header>header</Header>
    <Content>content</Content>
    <Nav>nav</Nav>
    <Footer>footer</Footer>
    <Header>header</Header>
    <Content>content</Content>
    <Nav>nav</Nav>
    <Footer>footer</Footer>
  </Father>);
}

export default Items;