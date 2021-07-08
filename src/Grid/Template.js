import React from 'react';
import styled from 'styled-components';

const Father = styled.div`
  display: grid;
  height: 50vh;
  grid-template: 
  "header header header header" 1fr
  "content content content nav" 2fr
  "footer footer footer footer" 1fr / 1fr 1fr 1fr 1fr
  ;
`

const Header = styled.div`
  background-color: blue;
  grid-area: header;
`

const Content = styled.div`
  background-color: green;
  grid-area: content;
`

const Nav = styled.div`
  background-color: red;
  grid-area: nav;
`

const Footer = styled.div`
  background-color: yellow;
  grid-area: footer;
`


const Template = () => {
  return (<Father>
    <Header></Header>
    <Content></Content>
    <Nav></Nav>
    <Footer></Footer>
  </Father>);
}

export default Template;