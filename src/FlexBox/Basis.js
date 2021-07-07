import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  height: 200px;
  justify-content: space-around;
`

const Box = styled.div`
  flex-basis: 200px;
  background-color: tomato;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-child(2) {
    background-color: black;
    flex-grow: 1;
  }
`

const Grow = () => {
  return (<Wrapper>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
  </Wrapper>);
}

export default Grow;