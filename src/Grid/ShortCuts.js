import React from 'react';
import styled from 'styled-components';

const Father = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
`

const Header = styled.div`
  background-color: blue;
  grid-column: span 4;
`

const Content = styled.div`
  background-color: green;
  grid-column: 1 / -2;
  grid-row: span 2;
`

const Nav = styled.div`
  background-color: red;
  grid-row: span 2;
`

const Footer = styled.div`
  background-color: orange;
  grid-column: span 4;
`


const Shortcuts = () => {
  return (<Father>
    <Header></Header>
    <Content></Content>
    <Nav></Nav>
    <Footer></Footer>
  </Father>);
}

export default Shortcuts;