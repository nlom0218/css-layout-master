import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 600px;
`

const Box = styled.div`
  width: 600px;
  height: 200px;
  background-color: tomato;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-child(2) {
    background-color: black;
    flex-shrink: 2;
  }
  :nth-child(3) {
    flex-shrink: 3;
  }
`

const Shrink = () => {
  return (<Wrapper>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
  </Wrapper>);
}

export default Shrink;