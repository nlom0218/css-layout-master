import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const Item = styled.li``

const Clone = () => {
  return (<List>
    <Item>
      <Link to="/clone/bhs">Best Horror Scenes</Link>
    </Item>
    <Item>
      <Link to="/clone/pb">Paint Box</Link>
    </Item>
    <Item>
      <Link to="/clone/ten">10*19</Link>
    </Item>
    <Item>
      <Link to="/flexbox/shrink">flex-shrink</Link>
    </Item>
    <Item>
      <Link to="/flexbox/basis">flex-basis</Link>
    </Item>
  </List>);
}

export default Clone;