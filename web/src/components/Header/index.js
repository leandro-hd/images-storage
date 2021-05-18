import React from 'react';
import { Link } from 'react-router-dom';
import GlobalStyle from '../../styles/global';
import icon from '../../images/icon.png';
import { Container } from './Header';

function Landing() {
  return (
    <Container>
      <GlobalStyle/>
      <header className="header">
      <img src={icon} alt="Grapmon" className="icon"/>
      <span className="title">Grapmon</span>

      <Link to="/" className="menu-links">
        Início
      </Link>

      <span className="menu-links menu-links-space pipe">|</span>

      <Link to="/store" className="menu-links menu-links-space">
        Publicar
      </Link>

      <Link to="/show" className="menu-links menu-links-space">
        Explorar
      </Link>
    </header>
    </Container>
  )
}

export default Landing;