import styled from "styled-components";
import { FaComments } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactDivContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: white;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;
`;

const ContactTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 60px;
`;

const ContactContent = styled.p`
  display: flex;
  white-space: break-spaces;
  max-width: 800px;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 20px auto 20px;
  width: 80%;
`;

const IconDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  img {
    margin-right: 10px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Contact() {
  return (
    <div>
      <ContactDivContainer>
        <ContactTitle>Contact</ContactTitle>
        <FlexDiv>
          <div>
            <FaComments size={40} color="#4caf50" />

            <ContactContent>
              We're here to support you on your journey to better health and
              well-being. Whether you have questions about our services, need
              help scheduling an appointment, or want to discuss your specific
              needs, we're just a message away.
            </ContactContent>
          </div>
          <div>
            <IoMdMail size={40} color="#4caf50" />
            <ContactContent>
              Please send an email to activehorizonshg@gmail.com and we will aim
              to get back to you within 24 hours.
            </ContactContent>
            <IconDivContainer>
              <img src="/images/map-pin.svg" alt="location" />
              We are based 100% remotely.
            </IconDivContainer>
            <IconDivContainer>
              <img src="/images/mail.svg" alt="email" />
              activehorizonshg@gmail.com
            </IconDivContainer>
          </div>
        </FlexDiv>
      </ContactDivContainer>
    </div>
  );
}
