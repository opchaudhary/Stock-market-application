/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { MdLightMode } from "react-icons/md";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import  {useTheme} from '../context/ThemeContext' 
function Header() {
  const {theme, toggleTheme} = useTheme();
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header" style= {{ backgroundColor: theme.background, color: theme.text }}>
      <img src={require("../img/nifty-bull.gif")} className="Logo" alt="logo" />

          
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
         <nav className="Nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/stocks">Stocks</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <MdLightMode onClick={toggleTheme}/>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="menu">
      ≡
      </button>
    </header>
  );
}

export default Header;
