import React from 'react';
import styled from 'styled-components';

const Father = styled.div``

const Chlid = styled.div`
  background-color: tomato;
  color: white;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BasicConcepts = () => {
  return (<Father>
    <Chlid>1</Chlid>
    <Chlid>2</Chlid>
    <Chlid>3</Chlid>
    <Chlid>4</Chlid>
  </Father>);
}

export default BasicConcepts;