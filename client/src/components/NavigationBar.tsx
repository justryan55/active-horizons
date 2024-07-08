import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import { Link as ScrollLink } from "react-scroll";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
    zIndex: "1100",
  },

  bmBurgerBars: {
    background: "#373a47",
  },

  bmBurgerBarsHover: {
    background: "#a90000",
  },

  bmCrossButton: {
    height: "24px",
    width: "24px",
  },

  bmCross: {
    background: "black",
  },

  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },

  bmMenu: {
    background: "#efefef",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },

  bmMorphShape: {
    fill: "#373a47",
  },

  bmItemList: {
    color: "black",
    padding: "0.8em",
  },

  bmItem: {
    display: "inline-block",
    fontSize: "1.5rem",
  },

  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const Nav = styled.section`
  width: 100%;
  height: 9rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.075);
  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 5000;
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

  img {
    height: 100px;
    padding: 1.5rem 1.5rem;
  }
`;

const NavLinkMobile = styled(Link)`
  font-size: 1.25rem;
  text-decoration: none;
  color: inherit;
  margin: 1.5rem 1rem;
`;

const NavLinkLogo = styled(Link)`
  font-size: 1.25rem;
  text-decoration: none;
  color: inherit;
  display: block;
  margin: 1.5rem 0;
  padding: 0.5rem 1.5rem;
  border-bottom: 1px black solid;
  width: calc(100% - 2rem);
`;

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: #4caf50;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
  margin-left: 20px;

  &:hover {
    background-color: #2e7d32;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const MobileButton = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: #4caf50;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
  margin-left: 20px;

  &:hover {
    background-color: #2e7d32;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

const SubMenuItem = styled(MenuItem)`
  padding-left: 2rem;
  color: black;
`;

export const NavigationBar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const aboutMenuRef = useRef(null);
  const processMenuRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1050) {
        setShowBurgerMenu(true);
      } else {
        setShowBurgerMenu(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleAboutMouseClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProcessOpen(false);

    if (!isAboutOpen) {
      setIsAboutOpen(true);
    } else {
      setIsAboutOpen(false);
    }
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

  const handleProcessMouseClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsAboutOpen(false);

    if (!isProcessOpen) {
      setIsProcessOpen(true);
    } else {
      setIsProcessOpen(false);
    }
  };

  return (
    <>
      {showBurgerMenu ? (
        <BurgerMenu right styles={styles}>
          <NavLinkLogo to="/">Active Horizons</NavLinkLogo>
          <NavLinkMobile onClick={handleAboutMouseClick} to="/about">
            About ▾
          </NavLinkMobile>
          <div>
            {isAboutOpen && (
              <div>
                <ScrollLink
                  to="story"
                  smooth={true}
                  duration={500}
                  offset={-200}
                  spy={true}
                  hashSpy={true}
                >
                  <SubMenuItem>Our Story</SubMenuItem>
                </ScrollLink>
                <ScrollLink
                  to="mission"
                  smooth={true}
                  duration={500}
                  spy={true}
                  hashSpy={true}
                  offset={-200}
                >
                  <SubMenuItem>Our Mission</SubMenuItem>
                </ScrollLink>{" "}
                <ScrollLink
                  to="values"
                  smooth={true}
                  duration={500}
                  spy={true}
                  hashSpy={true}
                >
                  <SubMenuItem>Our Values</SubMenuItem>
                </ScrollLink>
                <ScrollLink
                  to="team"
                  smooth={true}
                  duration={500}
                  spy={true}
                  hashSpy={true}
                  offset={-50}
                >
                  <SubMenuItem>Our Team</SubMenuItem>
                </ScrollLink>
              </div>
            )}
          </div>
          <NavLinkMobile to="/pricing">Pricing</NavLinkMobile>
          <NavLinkMobile onClick={handleProcessMouseClick} to="/physiotherapy">
            Physiotherapy ▾
          </NavLinkMobile>
          <div>
            {isProcessOpen && (
              <div>
                <ScrollLink
                  to="benefits"
                  smooth={true}
                  duration={500}
                  spy={true}
                  hashSpy={true}
                >
                  <SubMenuItem>Benefits</SubMenuItem>
                </ScrollLink>
                <ScrollLink
                  to="process"
                  smooth={true}
                  duration={500}
                  spy={true}
                  hashSpy={true}
                >
                  <SubMenuItem>Process</SubMenuItem>
                </ScrollLink>
              </div>
            )}
          </div>
          {/* <NavLinkMobile to="/blog">Blog</NavLinkMobile> */}
          <NavLinkMobile to="/contact">Contact</NavLinkMobile>

          <MobileButton>Start today</MobileButton>
        </BurgerMenu>
      ) : (
        <Nav>
          <NavLink to="/">
            <img src="/images/logo-1.png" alt="logo" />

            {/* <NavDiv>Active Horizons</NavDiv> */}
          </NavLink>
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
                <ScrollLink
                  to="story"
                  smooth={true}
                  duration={500}
                  offset={-300}
                  spy={true}
                  hashSpy={true}
                >
                  <MenuItem>Our Story</MenuItem>
                </ScrollLink>
                <ScrollLink
                  to="mission"
                  smooth={true}
                  duration={500}
                  offset={-300}
                  spy={true}
                  hashSpy={true}
                >
                  <MenuItem>Our Mission</MenuItem>
                </ScrollLink>
                <ScrollLink
                  to="values"
                  smooth={true}
                  duration={500}
                  offset={-150}
                  spy={true}
                  hashSpy={true}
                >
                  <MenuItem>Our Values</MenuItem>
                </ScrollLink>
                <ScrollLink
                  to="team"
                  smooth={true}
                  duration={500}
                  offset={-95}
                  spy={true}
                  hashSpy={true}
                >
                  <MenuItem>Our Team</MenuItem>
                </ScrollLink>
              </MenuContainer>
            </div>
            <NavLink to="/pricing">Pricing</NavLink>
            <div>
              <NavLink
                to="/physiotherapy"
                onMouseEnter={handleProcessMouseEnter}
                onMouseLeave={handleProcessMouseLeave}
              >
                Physiotherapy ▾
              </NavLink>
              <MenuContainer
                isOpen={isProcessOpen}
                ref={processMenuRef}
                onMouseEnter={handleProcessMouseEnter}
                onMouseLeave={handleProcessMouseLeave}
              >
                <ScrollLink
                  to="benefits"
                  smooth={true}
                  duration={500}
                  offset={-150}
                  spy={true}
                  hashSpy={true}
                >
                  <SubMenuItem>Benefits</SubMenuItem>
                </ScrollLink>
                <ScrollLink
                  to="process"
                  smooth={true}
                  duration={500}
                  offset={-95}
                  spy={true}
                  hashSpy={true}
                >
                  <SubMenuItem>Process</SubMenuItem>
                </ScrollLink>
              </MenuContainer>
            </div>
            {/* <NavLink to="/blog">Blog</NavLink> */}
            <NavLink to="/contact">Contact</NavLink>

            <Button>Start today</Button>
          </NavDiv>
        </Nav>
      )}
    </>
  );
};

export default NavigationBar;
