import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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

  --c: #fb5607;

  box-shadow: 0 0 0 0.1em inset var(--c);
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: var(--_g) calc(var(--_p, 0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p, 0%)) 0%,
    var(--_g) calc(var(--_p, 0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p, 0%)) 100%;
  background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
  outline-offset: 0.1em;
  transition: background-size 0.4s, background-position 0s 0.4s;
  border-radius: 10px;

  &:hover {
    --_p: 100%;
    transition: background-position 0.4s, background-size 0s;
  }

  &:active {
    background-color: var(--c);
    color: #fff;
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 100%;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const MenuItem = styled(Link)`
  display: block;
  padding: 0.75rem 1.5rem;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const NavigationBar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const aboutMenuRef = useRef(null);
  const processMenuRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleAboutMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProcessOpen(false);
    setIsAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 300);
  };

  const handleProcessMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsAboutOpen(false);
    setIsProcessOpen(true);
  };

  const handleProcessMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProcessOpen(false);
    }, 300);
  };

  return (
    <Nav>
      <NavDiv>Active Horizons</NavDiv>
      <NavDiv>
        <div>
          <NavLink
            to="/about"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            About ▾
          </NavLink>
          <MenuContainer
            isOpen={isAboutOpen}
            ref={aboutMenuRef}
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <MenuItem to="/story">Our Story</MenuItem>
            <MenuItem to="/team">Our Team</MenuItem>
            <MenuItem to="/mission">Mission</MenuItem>
          </MenuContainer>
        </div>
        <NavLink to="/pricing">Pricing</NavLink>
        <div>
          <NavLink
            to="/process"
            onMouseEnter={handleProcessMouseEnter}
            onMouseLeave={handleProcessMouseLeave}
          >
            Process ▾
          </NavLink>
          <MenuContainer
            isOpen={isProcessOpen}
            ref={processMenuRef}
            onMouseEnter={handleProcessMouseEnter}
            onMouseLeave={handleProcessMouseLeave}
          >
            <MenuItem to="/online-physiotherapy">Online Physiotherapy</MenuItem>
            <MenuItem to="/ndis">NDIS</MenuItem>
          </MenuContainer>
        </div>
        <NavLink to="/blog">Blog</NavLink>
        <Button>Book Now</Button>
      </NavDiv>
    </Nav>
  );
};

export default NavigationBar;
