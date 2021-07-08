import React from 'react';
import styled from 'styled-components';

const Father = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
`

const Header = styled.div`
  background-color: blue;
  grid-column-start: 1;
  grid-column-end: 5;
`

const Content = styled.div`
  background-color: green;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
`

const Nav = styled.div`
  background-color: red;
  grid-row-start: 2;
  grid-row-end: 4;
`

const Footer = styled.div`
  background-color: yellow;
  grid-column-start: 1;
  grid-column-end: 5;
`


const RowsColumns = () => {
  return (<Father>
    <Header></Header>
    <Content></Content>
    <Nav></Nav>
    <Footer></Footer>
  </Father>);
}

export default RowsColumns;