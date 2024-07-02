import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { slide as BurgerMenu } from "react-burger-menu";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
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

const MobileButton = styled.button`
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  border: none;
  margin: 50px 40px;
  --c: #fb5607;
  border-radius: 10px;

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
    <>
      {showBurgerMenu ? (
        <BurgerMenu right styles={styles}>
          <NavLink to="/" className="bm-item">
            Active Horizons
          </NavLink>
          <NavLink
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
            className="bm-item"
            to="/about"
          >
            About ▾
          </NavLink>
          <div
            ref={aboutMenuRef}
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            {isAboutOpen && (
              <div>
                <MenuItem to="/story" className="bm-subitem">
                  Our Story
                </MenuItem>
                <MenuItem to="/team" className="bm-subitem">
                  Our Team
                </MenuItem>
                <MenuItem to="/mission" className="bm-subitem">
                  Mission
                </MenuItem>
              </div>
            )}
          </div>
          <NavLink className="bm-item" to="/pricing">
            Pricing
          </NavLink>
          <NavLink
            onMouseEnter={handleProcessMouseEnter}
            onMouseLeave={handleProcessMouseLeave}
            className="bm-item"
            to="/process"
          >
            Process ▾
          </NavLink>
          <div
            ref={processMenuRef}
            onMouseEnter={handleProcessMouseEnter}
            onMouseLeave={handleProcessMouseLeave}
          >
            {isProcessOpen && (
              <div>
                <MenuItem to="/online-physiotherapy" className="bm-subitem">
                  Online Physiotherapy
                </MenuItem>
                <MenuItem to="/ndis" className="bm-subitem">
                  NDIS
                </MenuItem>
              </div>
            )}
          </div>
          <NavLink className="bm-item" to="/blog">
            Blog
          </NavLink>
          <MobileButton>Book Now</MobileButton>
        </BurgerMenu>
      ) : (
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
                <MenuItem to="/online-physiotherapy">
                  Online Physiotherapy
                </MenuItem>
                <MenuItem to="/ndis">NDIS</MenuItem>
              </MenuContainer>
            </div>
            <NavLink to="/blog">Blog</NavLink>
            <Button>Book Now</Button>
          </NavDiv>
        </Nav>
      )}
    </>
  );
};

export default NavigationBar;
