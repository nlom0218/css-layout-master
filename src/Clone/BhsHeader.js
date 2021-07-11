import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #F0F0F0;
  width: 33%;
  height: 100%;
  padding: 10vh 0 72px 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
`

const Bottom = styled.div`

`

const Title = styled.h1`
  color: #E7473C;
  font-size: 85px;
  width: 70%;
  letter-spacing: 10px;
`

const Text = styled.div`
  width: 80%;
  color: #E7473C;
  text-align: justify;
  font-weight: 300;
  font-size: 20px;
  margin-bottom: 40px;
  line-height: 1.2;
  h3 {
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 20px;
  }
`

const Nav = styled.nav``

const List = styled.ul`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.li`
  margin-right: 10px;
  font-size: 16px;
  color: black;
  opacity: 0.5;
  padding-bottom: 3px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgba(0,0,0,0.8);
  cursor: pointer;
  &:hover{ 
    opacity: 1;
  }
`



const BhsHeader = () => {
  return (
    <Header>
      <Title>Best Horror Scenes</Title>
      <Bottom>
        <Text>
          <h3>An ever growing collection featuring some of the best scenes in horror.</h3>
        “Best Horror Scenes” is a collection of scenes I feel are some of the most affecting in horror.
        Some may be simple black cat scares, others may be more subdued or nuanced.
        Many come from films that aren't necessarily “horror” but have elements or threads of horror,
        and all have the same general effect: unease, dread, fear, shock, disgust.
   </Text>
        <Nav>
          <List>
            <Item>Watch on YouTube</Item>
            <Item>Suggest a Scene</Item>
            <Item>Get Episode Notices</Item>
            <Item>Contact</Item>
            <Item>RSS</Item>
          </List>
        </Nav>
      </Bottom>
    </Header>)
}

export default BhsHeader;