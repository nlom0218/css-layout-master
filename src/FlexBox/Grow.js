import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 600px;
`

const Box = styled.div`
  width: 300px;
  height: 200px;
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
  :nth-child(3) {
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