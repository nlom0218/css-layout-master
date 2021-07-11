import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 140px;
`

const Hero = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://images.unsplash.com/photo-1583248369069-9d91f1640fe6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 80px;
  h4 {
    margin-bottom: 30px;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  h3 {
    font-size: 48px;
    width: 35%;
    text-align: center;
    margin-bottom: 50px;
  }
  a {
    width: 10%;
    background-color: white;
    color: black;
    padding: 20px 0px;
    text-align: center;
    text-decoration: none;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: color 0.3s linear, background 0.3s linear;
    &:hover {
      background-color: black;
      color: white;
    }
  } 
`

const UnderHero = styled.div`
  height: 80vh;
  display: flex;
  width: 100%;
  margin-bottom: 80px;
  img, div {
    width: 50%
  }
`

const UnderHeroContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3ede8;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h4 {
      font-family: "Montserrat";
      font-weight: 500;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 30px;
    }
    h3 {
      font-size: 35px;
      text-align: center;
      margin-bottom: 50px;
    }
    a {
      border: 1px solid black;
      padding: 20px;
      transition: background 0.3s linear, color 0.3s linear;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`

const Blog = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 60vh);
  margin-bottom: 80px;
  article {
    background-color: #f3ede8;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    img {
      width: 100%;
      height: 100%;
    }
    &:nth-child(even) {
      img {
        order: 1;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        margin-bottom: 70px;
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      h4 {
        font-size: 32px;
        margin-bottom: 40px;
        text-align: center;
      }
    }
  } 
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 410px);
  .gallery__poster {
    height: 100%;
    cursor: pointer;
    img {
      max-width: 100%;
      height: 100%;
      transition: opacity 0.3s linear;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`

const PbMain = () => {
  return (<Container>
    <Hero>
      <h4>The Uptown Collection</h4>
      <h3>
        Meet our newest nails, designed in collaboration with our friends on the
        Upper East Side.
      </h3>
      <a href="#">Read More</a>
    </Hero>
    <UnderHero>
      <img src="https://raw.githubusercontent.com/nomadcoders/scss-masterclass/f9383037af08c5c2c648d57f6a57ebf5bd1ebd72/nails.png" />
      <UnderHeroContent>
        <div>
          <h4>The Studio</h4>
          <h3>
            Book a manicure at our Soho flagship studio or our new Uptown
            studio, 20 East 69th Street at Madison Avenue.
          </h3>
          <a href="#">Book a Manicure</a>
        </div>
      </UnderHeroContent>
    </UnderHero>
    <Blog>
      <article>
        <img src="https://raw.githubusercontent.com/nomadcoders/scss-masterclass/f9383037af08c5c2c648d57f6a57ebf5bd1ebd72/nails.png" />
        <div>
          <span>Feb 25, 2020</span>
          <h4>New and Now: The Uptown Collection</h4>
          <a href="#">Read Story</a>
        </div>
      </article>
      <article>
        <img
          src="https://images.unsplash.com/photo-1583255448430-17c5eda08e5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        />
        <div>
          <span>Feb 25, 2020</span>
          <h4>New and Now: The Uptown Collection</h4>
          <a href="#">Read Story</a>
        </div>
      </article>
      <article>
        <img
          src="https://images.unsplash.com/photo-1583307266943-e0055bb40037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1421&q=80"
        />
        <div>
          <span>Feb 25, 2020</span>
          <h4>New and Now: The Uptown Collection</h4>
          <a href="#">Read Story</a>
        </div>
      </article>
    </Blog>
    <Gallery>
      <div class="gallery__poster">
        <img src="https://raw.githubusercontent.com/nomadcoders/scss-masterclass/f9383037af08c5c2c648d57f6a57ebf5bd1ebd72/gallery.webp" />
      </div>
      <div class="gallery__poster">
        <img src="https://raw.githubusercontent.com/nomadcoders/scss-masterclass/f9383037af08c5c2c648d57f6a57ebf5bd1ebd72/gallery.webp" />
      </div>
      <div class="gallery__poster">
        <img src="https://raw.githubusercontent.com/nomadcoders/scss-masterclass/f9383037af08c5c2c648d57f6a57ebf5bd1ebd72/gallery.webp" />
      </div>
      <div class="gallery__poster">
        <img src="https://raw.githubusercontent.com/nomadcoders/scss-masterclass/f9383037af08c5c2c648d57f6a57ebf5bd1ebd72/gallery.webp" />
      </div>
      <div class="gallery__poster">
        <img src="https://raw.githubusercontent.com/nomadcoders/scss-masterclass/f9383037af08c5c2c648d57f6a57ebf5bd1ebd72/gallery.webp" />
      </div>
      <div class="gallery__poster">
        <img src="https://raw.githubusercontent.com/nomadcoders/scss-masterclass/f9383037af08c5c2c648d57f6a57ebf5bd1ebd72/gallery.webp" />
      </div>
      <div class="gallery__poster">
        <img src="https://raw.githubusercontent.com/nomadcoders/scss-masterclass/f9383037af08c5c2c648d57f6a57ebf5bd1ebd72/gallery.webp" />
      </div>
      <div class="gallery__poster">
        <img src="https://raw.githubusercontent.com/nomadcoders/scss-masterclass/f9383037af08c5c2c648d57f6a57ebf5bd1ebd72/gallery.webp" />
      </div>
    </Gallery>
  </Container>);
}

export default PbMain;