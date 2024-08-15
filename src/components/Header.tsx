// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>BSAA</div>
      <nav style={navStyle}>
        <a href="#about">Sobre</a>
        <a href="#monsters">Monstros</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#282c34',
  color: 'white',
  flexWrap: 'wrap',
};

const logoStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  flex: '1 1 auto',
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '15px',
  flex: '2 1 auto',
  justifyContent: 'flex-end',
};

export default Header;