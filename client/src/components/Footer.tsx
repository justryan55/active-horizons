import styled from "styled-components";

const FooterContainer = styled.section`
  width: 100%;
  height: 15rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.075);
  border-top: 1px solid #e0e0e0;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
`;

const Header = styled.div`
  font-size: 1.25rem;
`;

const HeaderSubItem = styled.div`
  font-size: 1rem;
  margin-top: 1.5rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Header>
        Active Horizons Logo
        <HeaderSubItem>Social Media</HeaderSubItem>
        <HeaderSubItem>Phone Number</HeaderSubItem>
        <HeaderSubItem>Email</HeaderSubItem>
      </Header>

      <Header>
        Support
        <HeaderSubItem>FAQs</HeaderSubItem>
        <HeaderSubItem>Feedback</HeaderSubItem>
      </Header>
      <Header>
        Policies
        <HeaderSubItem>Privacy Policy</HeaderSubItem>
        <HeaderSubItem>Terms of Service</HeaderSubItem>
        <HeaderSubItem>Complaints</HeaderSubItem>
      </Header>

      <Header>
        Company
        <HeaderSubItem>Our Story</HeaderSubItem>
        <HeaderSubItem>Our Team</HeaderSubItem>
        <HeaderSubItem>Mission</HeaderSubItem>
      </Header>
      <Header>
        Resources <HeaderSubItem>Blog</HeaderSubItem>
      </Header>
    </FooterContainer>
  );
};

export default Footer;
