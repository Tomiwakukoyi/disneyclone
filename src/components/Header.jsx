import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    //whenever the username is updated it will run this whole function
    //which is basically saying after successful authentication
    //set the user to user and then navigate to the home page
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    //if the username doesnt exist then run the signin
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
      //if the username exists then use the built in signout method which is a promise
    } else if (username) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => alert(error.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney" />
      </Logo>

      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={username} />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  position: fixed;
  height: 70px;
  top: 0;
  right: 0;
  left: 0;
  background-color: #09091f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  letter-spacing: 10px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: white;
      font-size: 13px;
      letter-spacing: 1.4px;
      line-height: 2px;
      white-space: nowrap;
      position: relative;
      margin-left: 5px;
      margin-top: 2.8px;

      /* underlining white line under the menu */
      &:before {
        background-color: white;
        border-radius: 0px 0px 4px 4px;
        content: "";
        opacity: 0;
        height: 2px;
        left: 0px;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        bottom: -12px;
        width: auto;
        position: absolute;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: black;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.2s ease-out;

  :hover {
    background-color: white;
    cursor: pointer;
    color: black;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: #333030;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  :hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 0.8s;
    }
  }
`;
