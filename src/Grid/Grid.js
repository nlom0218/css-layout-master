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
      <Link to="/grid/concepts">Basic Concepts</Link>
    </Item>
    <Item>
      <Link to="/flexbox/wrap">wrap & align-center</Link>
    </Item>
    <Item>
      <Link to="/flexbox/grow">flex-grow</Link>
    </Item>
    <Item>
      <Link to="/flexbox/shrink">flex-shrink</Link>
    </Item>
    <Item>
      <Link to="/flexbox/basis">flex-basis</Link>
    </Item>
  </List>);
}

export default FlexBox;