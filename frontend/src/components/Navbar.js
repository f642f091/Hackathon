import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: green;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
`;

const NavContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.2rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #00d4ff;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavContent>
        <Logo>QuantNest</Logo>
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/invest">Invest</StyledLink>
          <StyledLink to="/budget">Budget</StyledLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
