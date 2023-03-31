import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { RiShoppingBagLine } from "react-icons/ri";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr"
import Header from "./Header";
import { useCartContext } from "../context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";
const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const Nav = styled.nav`
  .navbar-link{
    position: sticky;
    top: 0;
  }
    .navbar-lists {
      display: flex;
      gap: 10rem;
      align-items: center;
      
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: white;
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          text-decoration: underline;
          color: #D8D6D6;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 3rem;
        height: 3rem;
        position: absolute;
        color: black;
        
        
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -17%;
        left: 80%;
        background-color: white;
        &:hover{
          color: #D8D6D6;
        }
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
      
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: black;
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: white;
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color:white;
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #282A35;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          font-size: 3rem;
        }
      }
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
        
      }
    }
    Button{
      background-color: #282A35;
    }
   
  
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>

          {isAuthenticated ?
            (
              <li>
                <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </Button>
              </li>
            ) : (
              <li>
                <Button onClick={() => loginWithRedirect()}>Log In</Button>
              </li>
            )
          }




          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <RiShoppingBagLine className="cart-trolley" />
              <span className="cart-total--item"> {total_item} </span>
            </NavLink>
          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenuGridO
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <GrFormClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Nav;