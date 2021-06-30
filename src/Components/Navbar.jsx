import React from "react";
import styled from "styled-components";

const StyledHeader = styled.nav`
  background-color: #0e0e88;
  display: flex;
  padding: 0 5vw;
  height: 10vh;
  align-items: center;
`;

const Btn = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  background: #a7b307;
  color: white;
`;

const Navbar = () => {
  return (
    <StyledHeader>
      <Btn href="/">Home</Btn>
      <Btn href="/alien">Alien</Btn>
      <Btn href="/balada">Balada</Btn>
      <Btn href="/backlog">backlog</Btn>
    </StyledHeader>
  );
};

export default Navbar;
