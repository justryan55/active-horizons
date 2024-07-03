import styled from "styled-components";

const FooterContainer = styled.section`
  width: 100%;
  height: 6rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.075);
  border-top: 1px solid #e0e0e0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`;

const HeaderDiv = styled.div`
  font-size: 1.25rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <HeaderDiv>Support</HeaderDiv>
      <HeaderDiv>Company</HeaderDiv>
      <HeaderDiv>Resources</HeaderDiv>
    </FooterContainer>
  );
};

export default Footer;
