import React from 'react';
import styled from 'styled-components';
import ZooHeader from './ZooHeader';

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Main = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 500px;
  article {
    cursor: pointer;
    height: 100%;
    display: grid;
    grid-template-rows: 450fr 50fr;
    div {
      width: 100%;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      padding-left: 10px;
      h3 {
        font-size: 14px;
      }
    }
  }
`

const Img = styled.img`
  min-width: 100%;
  height: 100%;
`

const Zoo = () => {
  return (
    <Container>
      <ZooHeader />
      <Main>
        <article>
          <Img src="https://source.unsplash.com/random/450x450" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x451" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x452" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x453" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x454" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x455" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x456" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x457" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x458" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x459" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x460" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x461" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x462" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x463" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
        <article>
          <Img src="https://source.unsplash.com/random/450x464" />
          <div>
            <h3>Moco Montpellier Contemporain</h3>
          </div>
        </article>
      </Main>
    </Container>);
}

export default Zoo;