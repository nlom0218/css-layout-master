import React from 'react';
import styled from 'styled-components';

const Father = styled.div``

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


const BasicConcepts = () => {
  return (<Father>
    <Header></Header>
    <Content></Content>
    <Nav></Nav>
    <Footer></Footer>
  </Father>);
}

export default BasicConcepts;