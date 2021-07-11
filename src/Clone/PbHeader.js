import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  z-index: 1;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0px 140px;
  background-color: white;
  height: 70px;
  display: flex;
  align-items: center;
`

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const List = styled.ul`
  display: flex;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  &:first-child {
    li {
      margin-right: 60px;
    }
  }
`

const Item = styled.li`
`

const PbHeader = () => {
  return (
    <Header>
      <Nav>
        <List>
          <Item>Nail studio</Item>
          <Item>Shop product</Item>
        </List>
        <List>
          <Item>Journal</Item>
        </List>
      </Nav>
    </Header>
  );
}

export default PbHeader;