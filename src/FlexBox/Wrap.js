import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  height: 600px;
  flex-wrap: wrap;
`

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrap = () => {
  return (<Wrapper>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
    <Box>4</Box>
    <Box>5</Box>
    <Box>6</Box>
  </Wrapper>);
}

export default Wrap;