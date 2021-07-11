import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const Item = styled.li``

const Home = () => {
  return (<List>
    <Item>
      <Link to="/flexbox">FlexBox</Link>
    </Item>
    <Item>
      <Link to="/grid">Grid</Link>
    </Item>
    <Item>
      <Link to="/clone">Clone Web</Link>
    </Item>
  </List>);
}

export default Home;