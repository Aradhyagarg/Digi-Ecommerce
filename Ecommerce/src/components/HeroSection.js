import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> VIBE TECHO </h1>
            <p>
              Here you all can get original, unquie,,
              etc Electonics items all collections of populor companies products. 
              all this things have there originality tag. So please do support are site 
            </p>
            <NavLink>
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/new1.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      color: black;
      margin-bottom: 0;
    }
  }
  Button{
    background-color: black;
    border-radius: 50px;
  }
  .hero-section-image {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-style:hover{
    transform: scale(1.29);
    transition: all .2s ease-in-out;
    border-radius: 2rem ;
  }

  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 100%;
      //background-image: url("images/new3.jpg");
      background-color: #282a35;
      position: absolute;
      object-fit: fill;
      left: 48%;
      top: -4rem;
      z-index: -1;
    }
    &::before {
      content: "";
      width: 60%;
      height: 100%;
      background-color: #282a35;
      position: absolute;
      left: -8.5%;
      top: 4rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;