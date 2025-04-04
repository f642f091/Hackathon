// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #1e1e1e;
  padding: 1rem;
  display: flex;
  gap: 2rem;
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
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/invest">Invest</StyledLink>
      <StyledLink to="/budget">Budget</StyledLink>
    </Nav>
  );
};

export default Navbar;
