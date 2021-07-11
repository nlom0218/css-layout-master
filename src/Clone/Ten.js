import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TextMoving } from '../animation';

const Container = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
    background-color: #af7732;
    display: grid;
    grid-template-columns: 1.5fr 1.9fr 1.5fr;
    grid-template-rows: 1fr 5fr 1fr;
    gap: 1px;
    & > * {
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #af7732;
      font-size: 22px;
      text-transform: uppercase;
    }
`

const Span = styled.span``

const Menu = styled.span`
  grid-column-start: -2;
`

const NumRow = styled.div`
  background-color: #af7732;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  height: 100%;
  align-items: stretch;
`

const Num = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  transition: color 0.3s linear, background-color 0.3s linear;
  &:hover {
    background-color: #af7732;
    color: white;
  }
`


const CenterImg = styled.div`
  grid-column: 2 / -2;
  grid-row: 2 / -2;
  background-image: url("https://images.unsplash.com/photo-1583309219338-a582f1f9ca6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80");
  background-size: cover;
  background-position: center;
`

const Text = styled.div`
  grid-column-start: 2;
  white-space: nowrap;
  overflow: hidden;
  span {
    animation: ${TextMoving} 5s linear infinite forwards;
  }
`


const Ten = () => {
  return (<Container>
    <Span></Span>
    <Span></Span>
    <Menu>Menu</Menu>
    <NumRow>
      <Num>#10</Num>
      <Num>#9</Num>
      <Num>#8</Num>
      <Num>#7</Num>
      <Num>#6</Num>
    </NumRow>
    <NumRow>
      <Num>#5</Num>
      <Num>#4</Num>
      <Num>#3</Num>
      <Num>#2</Num>
      <Num>#1</Num>
    </NumRow>
    <CenterImg></CenterImg>
    <Span></Span>
    <Text>
      <span>This is a very long text that should scroll using CSS3 Animations and
        not JS</span>
    </Text>
    <Span></Span>
  </Container>);
}

export default Ten;