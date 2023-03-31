import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <br></br>
              <form action="https://formspree.io/f/mbjeryzn" method="POST">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-about">
              <h3>Vibe-Techo</h3>
              <p>Electronic Products At Good Discount And Having A Good User Friendly Interface</p>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <br></br>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a className="icon"
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank">
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <br></br>
              <a className="footer-call" href="tel:1234567891">+91 1234567891</a>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Vibe-Techo. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 2rem 8rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 9rem 0 3rem 0;
    background-color: #282A35;
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 0.5rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    a{
  color: aliceblue;
  font-size: 1.8rem;
  font-weight: 400;
  font-family: "Work Sans", sans-serif;
    }
    .icons{
      font-size: 1rem;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border: 4px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2rem;
          position: relative;
          cursor: pointer;
          transition: width 0.5s height 0.5s;
        }
        &:hover{
          width: 60px;
          height: 60px;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 2rem;
    hr {
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;