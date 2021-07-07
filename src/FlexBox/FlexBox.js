import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const Item = styled.li``

const FlexBox = () => {
  return (<List>
    <Item>
      <Link to="/flexbox/alignSelf">align-self & order</Link>
    </Item>
    <Item>
      <Link to="/flexbox/wrap">wrap & align-center</Link>
    </Item>
  </List>);
}

export default FlexBox;