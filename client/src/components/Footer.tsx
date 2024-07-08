import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.section`
  width: 100%;
  height: 15rem;
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
`;

const Logo = styled.img`
  height: 70px;
`;

const Header = styled.div`
  font-size: 1.25rem;
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
        {/* <HeaderSubItem>
          <img src="/images/instagram.svg" alt="instagram" />
          <img src="/images/facebook.svg" alt="facebook" />
        </HeaderSubItem> */}
        <HeaderSubItem>
          <img src="/images/mail.svg" alt="email" />
          activehorizonshg@gmail.com
        </HeaderSubItem>
      </Header>

      {/* <Header>
        Support
        <HeaderSubItem>FAQs</HeaderSubItem>
        <HeaderSubItem>Feedback</HeaderSubItem>
      </Header> */}
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
      {/* <Header>
        Resources <HeaderSubItem>Blog</HeaderSubItem>
      </Header> */}
    </FooterContainer>
  );
};

export default Footer;
