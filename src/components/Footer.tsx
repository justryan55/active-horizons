import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const FooterContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.075);
  border-top: 1px solid #e0e0e0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;

  a {
    text-decoration: none;
    color: black;
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Logo = styled.img`
  height: 70px;
`;

const Header = styled.div`
  font-size: 1.25rem;

  @media screen and (max-width: 640px) {
    padding-top: 50px;
  }
`;

const HeaderSubItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 1.5rem;

  img {
    margin-right: 10px;
  }

  img:hover {
    cursor: pointer;
  }
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Header>
        <Logo src="images/logo-1.png" alt="logo" />
        <HeaderSubItem>
          <img src="/images/mail.svg" alt="email" />
          activehorizonshg@gmail.com
        </HeaderSubItem>

        <HeaderSubItem>
          <a
            href="https://www.linkedin.com/company/active-horizons-health-group/"
            target="_blank"
          >
            <FaLinkedin size={25} color="#4caf50" />
          </a>
          <a
            href="https://www.facebook.com/people/Active-Horizons-Health-Group/61562071659403/"
            target="_blank"
          >
            <FaFacebook
              size={25}
              style={{ paddingLeft: "10px" }}
              color="#4caf50"
            />
          </a>
        </HeaderSubItem>
      </Header>

      <Header>
        <ItemLink to="/policies">Policies</ItemLink>
        <a href="/files/privacy-policy.pdf" download>
          <HeaderSubItem>Privacy Policy</HeaderSubItem>
        </a>
        <a href="/files/terms-of-service.pdf" download>
          <HeaderSubItem>Terms of Service</HeaderSubItem>
        </a>
        <a href="/files/complaints-policy.pdf" download>
          <HeaderSubItem>Complaints</HeaderSubItem>
        </a>
      </Header>

      <Header>
        <ItemLink to="/about">Company</ItemLink>
        <ItemLink to="/about#top">
          <HeaderSubItem>Our Story</HeaderSubItem>
        </ItemLink>
        <ItemLink to="/about#mission">
          <HeaderSubItem>Our Mission</HeaderSubItem>
        </ItemLink>
        <ItemLink to="/about#values">
          <HeaderSubItem>Our Values</HeaderSubItem>
        </ItemLink>
        <ItemLink to="/about#team">
          <HeaderSubItem>Our Team</HeaderSubItem>
        </ItemLink>
      </Header>
    </FooterContainer>
  );
};

export default Footer;
