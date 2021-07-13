import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  nav {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    font-size: 32px;
    text-transform: lowercase;
    ul {
      display: flex;
      align-items: center;
      padding: 0px 15px;
      &:hover {
        background-color: gainsboro;
      }
      li {
        cursor: pointer;
        margin-right: 50px;
      }
      &:first-child {
        &:hover {
          li:not(:first-child){
            color: white;
          }
        }
        li {
          &:first-child {
            margin-right: 120px;
          }
          &:not(:first-child) {
            color: gainsboro;
            margin-right: 50px;
          }
        }
      }
    }
  }
`

const ZooHeader = () => {
  return (<Header>
    <nav>
      <ul>
        <li>Zoo</li>
        <li>Contact</li>
        <li>Team</li>
        <li>Clients</li>
      </ul>
      <ul>
        <li>Projects</li>
        <li>Tous</li>
      </ul>
    </nav>
  </Header>);
}

export default ZooHeader;