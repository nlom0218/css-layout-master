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
      <Link to="/grid/areas">Grid Template Areas</Link>
    </Item>
    <Item>
      <Link to="/grid/rowsColumns">Rows & Columns</Link>
    </Item>
    <Item>
      <Link to="/grid/shortcuts">Shortcuts</Link>
    </Item>
    <Item>
      <Link to="/grid/template">Template</Link>
    </Item>
    <Item>
      <Link to="/grid/items">Place Items</Link>
    </Item>
  </List>);
}

export default FlexBox;