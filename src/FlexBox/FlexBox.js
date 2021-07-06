import React from 'react';
import styled from 'styled-components';

const FlexBoxContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const Box = styled.div`
  background-color: blue;
  width: 200px;
  height: 200px;
  color: white;
`

const FlexBox = () => {
  return (<FlexBoxContainer>
    <Box>1</Box>
    <Box>2</Box>
    <Box>3</Box>
  </FlexBoxContainer>);
}

export default FlexBox;