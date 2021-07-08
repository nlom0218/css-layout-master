import React from 'react';
import styled from 'styled-components';

const Father = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 100px repeat(2, 200px) 100px;
  grid-template-areas:
  "header header header header"
  "content content content nav"
  "content content content nav"
  "footer footer footer footer";
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

const Areas = () => {
  return (<Father>
    <Header></Header>
    <Content></Content>
    <Nav></Nav>
    <Footer></Footer>
  </Father>);
}

export default Areas;