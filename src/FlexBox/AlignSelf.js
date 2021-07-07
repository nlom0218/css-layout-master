import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 600px;
`

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  color: white;
  font-size: 40px;
  text-align: center;
  :nth-child(1) {
    order: 1;
  }
  :nth-child(2) {
    background-color: teal;
    align-self: center;
    order: 2;
  }
  :nth-child(3) {
    align-self: flex-end;
  }
`

const AlignSelf = () => {
  return (<Wrapper>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
  </Wrapper>);
}

export default AlignSelf;