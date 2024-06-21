import React from "react";
import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

const TopNav = ({ isScrolled }) => {
  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) {
      navigate("/login");
    }
  });
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "TV Show", link: "/tv" },
    { name: "My list", link: "/my-list" },
    { name: "Movies", link: "/movies" },
  ];
  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="left">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
              alt="logo"
            />
          </div>
          <ul className="links">
            {navLinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right">
          <button onClick={signOut(firebaseAuth)}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  .notScroll {
    display: flex;
  }
  .scrolled {
    display: flex;
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
    transition: 0.3s ease-in-out;

    .left {
      display: flex;
      align-items: center;
      gap: 2rem;

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        width: 10rem;
        height: 2rem;
      }

      .links {
        display: flex;
        list-style-type: none;
        gap: 3rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      display: flex;
      align-item: center;
      gap: rem;
      button {
        background: red;
        border: none;
        cursor: pointer;
        border-radius: 50%;
      }
      &:focus {
        outline: none;
      }
      svg {
        color: white;
        font-size: 2rem;
      }
    }
  }
`;
export default TopNav;
