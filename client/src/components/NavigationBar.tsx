import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.section`
  width: 100%;
  height: 6rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.075);
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 50px;
  font-size: 1.25rem;
`;

const NavLink = styled(Link)`
  font-size: 1.25rem;
  text-decoration: none;
  color: inherit;
  margin: 0 1.5rem;

  &:hover {
    color: blue;
  }
`;

const Button = styled.button`
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  border: none;
  margin: 0px 40px;

  --c: #229091;

  box-shadow: 0 0 0 0.1em inset var(--c);
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: var(--_g) calc(var(--_p, 0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p, 0%)) 0%,
    var(--_g) calc(var(--_p, 0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p, 0%)) 100%;
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  transition: background-size 0.4s, background-position 0s 0.4s;

  &:hover {
    --_p: 100%;
    transition: background-position 0.4s, background-size 0s;
  }

  &:active {
    background-color: var(--c);
    color: #fff;
  }
`;

export const NavigationBar = () => {
  return (
    <Nav>
      <NavDiv>Active Horizons</NavDiv>
      <NavDiv>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/process">Process</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <Button>Book Now</Button>
      </NavDiv>
    </Nav>
  );
};

export default NavigationBar;
