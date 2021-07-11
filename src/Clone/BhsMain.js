import React from 'react';
import styled from 'styled-components';
import poster from "../Images/poster.png"

const Main = styled.div`
  margin-left: 33%;
`

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.1) 5%,
    transparent,
    transparent,
    transparent,
    transparent
  )
  #E7473C;
`

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`

const MoiveHeader = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 25px;
`

const MoiveTitle = styled.h4`
  font-size: 32px;
`

const MoiveInfo = styled.h5`
  letter-spacing: 2px;
`

const MoiveImage = styled.img`
  width: 100%;
  box-shadow: 0 80px 80px -80px #000, 0 0 12px rgba(0, 0, 0, 0.06),
        inset 0 0 0 1px rgba(0, 0, 0, 0.2);
`

const BhsMain = () => {
  return (<Main>
    <Section>
      <Wrapper>
        <MoiveHeader>
          <MoiveTitle>56. THE VANISHING (1988)</MoiveTitle>
          <MoiveInfo>Directed by George Sluizer</MoiveInfo>
        </MoiveHeader>
        <MoiveImage src={poster} />
      </Wrapper>
    </Section>
    <Section>
      <Wrapper>
        <MoiveHeader>
          <MoiveTitle>56. THE VANISHING (1988)</MoiveTitle>
          <MoiveInfo>Directed by George Sluizer</MoiveInfo>
        </MoiveHeader>
        <MoiveImage src={poster} />
      </Wrapper>
    </Section>    <Section>
      <Wrapper>
        <MoiveHeader>
          <MoiveTitle>56. THE VANISHING (1988)</MoiveTitle>
          <MoiveInfo>Directed by George Sluizer</MoiveInfo>
        </MoiveHeader>
        <MoiveImage src={poster} />
      </Wrapper>
    </Section>    <Section>
      <Wrapper>
        <MoiveHeader>
          <MoiveTitle>56. THE VANISHING (1988)</MoiveTitle>
          <MoiveInfo>Directed by George Sluizer</MoiveInfo>
        </MoiveHeader>
        <MoiveImage src={poster} />
      </Wrapper>
    </Section>    <Section>
      <Wrapper>
        <MoiveHeader>
          <MoiveTitle>56. THE VANISHING (1988)</MoiveTitle>
          <MoiveInfo>Directed by George Sluizer</MoiveInfo>
        </MoiveHeader>
        <MoiveImage src={poster} />
      </Wrapper>
    </Section>    <Section>
      <Wrapper>
        <MoiveHeader>
          <MoiveTitle>56. THE VANISHING (1988)</MoiveTitle>
          <MoiveInfo>Directed by George Sluizer</MoiveInfo>
        </MoiveHeader>
        <MoiveImage src={poster} />
      </Wrapper>
    </Section>    <Section>
      <Wrapper>
        <MoiveHeader>
          <MoiveTitle>56. THE VANISHING (1988)</MoiveTitle>
          <MoiveInfo>Directed by George Sluizer</MoiveInfo>
        </MoiveHeader>
        <MoiveImage src={poster} />
      </Wrapper>
    </Section>    <Section>
      <Wrapper>
        <MoiveHeader>
          <MoiveTitle>56. THE VANISHING (1988)</MoiveTitle>
          <MoiveInfo>Directed by George Sluizer</MoiveInfo>
        </MoiveHeader>
        <MoiveImage src={poster} />
      </Wrapper>
    </Section>    <Section>
      <Wrapper>
        <MoiveHeader>
          <MoiveTitle>56. THE VANISHING (1988)</MoiveTitle>
          <MoiveInfo>Directed by George Sluizer</MoiveInfo>
        </MoiveHeader>
        <MoiveImage src={poster} />
      </Wrapper>
    </Section>

  </Main>);
}

export default BhsMain;