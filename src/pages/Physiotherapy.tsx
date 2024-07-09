import styled from "styled-components";
import InfoIcon from "../components/InfoIcon";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaHandHoldingUsd, FaClock } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

interface DivContainerProps {
  isDesktop: boolean;
}

const DivIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const DivWhiteContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
`;

const DivBlueContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #81bbc5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const DivGrid = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  width: 80%;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1050px) {
    width: 30%;
  }
`;

const ProcessDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: white;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
  }
`;

const ArrowDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const PricingContainer = styled.div`
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

const PricingContent = styled.p`
  display: flex;
  white-space: break-spaces;
  max-width: 800px;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 auto 20px;
  width: 80%;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const DivBackground = styled.div<DivContainerProps>`
  display: flex;
  flex-direction: column;
  grid-template-columns: ${(props) =>
    props.isDesktop ? "repeat(2, 1fr)" : "repeat(1, 1fr)"};
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255, 1);
  padding: 40px 0px;

  width: 70%;
  z-index: 1000;
  transition: transform 0.3s, box-shadow 0.3s;
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #4caf50;
`;

const IconWrapperMargin = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  margin-top: 35px;
  color: #4caf50;
`;

const CTAButton = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2e7d32;
  }
`;
export default function Physiotherapy() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1050) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <DivWhiteContainer>
        <Title id="benefits">The Benefits</Title>
        <DivFlex>
          <DivIcons>
            <InfoIcon
              img="time"
              alt="time"
              title="Save Time on Travel"
              description={
                "Skip the commute and enjoy the convenience of accessing high-quality physiotherapy from the comfort of your home."
              }
              isWhite={true}
            />

            <InfoIcon
              img="dollar"
              alt="dollar"
              title="Cut Down on Costs"
              description={
                "Eliminate travel expenses, and benefit from practitioners who don’t need to charge for travel—allowing you to allocate more funds directly to your therapy."
              }
            />

            <InfoIcon
              img="calendar-month"
              alt="calendar"
              title="Flexible Scheduling"
              description={
                "Online physiotherapy offers the ultimate flexibility, making it easier to fit sessions into your busy life, whether you're balancing work, family, or other commitments."
              }
              isWhite={true}
            />

            <InfoIcon
              img="remote-care"
              alt="remote"
              title="Accessible for Remote and Rural Areas"
              description={
                "Reach top-tier physiotherapy services no matter where you live. Online sessions ensure that even participants in the most remote or rural areas can receive the care they need."
              }
            />

            <InfoIcon
              img="waitlist"
              alt="waitlist"
              title="Bypass Long Waitlists"
              description={
                "No more waiting weeks or even months to see a local physiotherapist. Online services significantly reduce wait times, allowing you to start your therapy sooner."
              }
            />

            <InfoIcon
              img="home"
              alt="home"
              title="Comfortable Environment"
              description={
                "Conduct your physiotherapy sessions in the comfort of your own home, which can help you feel more relaxed and open to the treatment process."
              }
              isWhite={true}
            />

            <InfoIcon
              img="exercise"
              alt="exercise"
              title="Real-Time Feedback"
              description={
                "Get immediate feedback and adjustments from your physiotherapist, ensuring that you are performing exercises correctly and effectively in your natural environment."
              }
            />

            <InfoIcon
              img="bandaid"
              alt="bandaid"
              title="Continuity of Care"
              description={
                "Maintain consistent care even when circumstances prevent in-person visits, such as during travel or in times of illness."
              }
              isWhite={true}
            />
          </DivIcons>
        </DivFlex>
      </DivWhiteContainer>

      <DivBlueContainer>
        <Title id="process">The Process</Title>

        <DivGrid>
          <ProcessDivContainer>
            Complete the online referral form
          </ProcessDivContainer>
          <ArrowDiv>
            <FaAngleDown size={50} />
          </ArrowDiv>

          <ProcessDivContainer>
            You will then be contacted by your practitioner within 24-48 hours
            to schedule in your first appointment
          </ProcessDivContainer>
          <ArrowDiv>
            <FaAngleDown size={50} />
          </ArrowDiv>

          <ProcessDivContainer>
            The first appointment will include goal setting and the initial
            assessment. Following this, a discussion of suitable management
            plans will take place and the most appropriate plan will be
            scheduled in
          </ProcessDivContainer>
          <ArrowDiv>
            <FaAngleDown size={50} />
          </ArrowDiv>

          <ProcessDivContainer>
            Online physiotherapy will be completed as per the management plan
          </ProcessDivContainer>
          <ArrowDiv>
            <FaAngleDown size={50} />
          </ArrowDiv>
          <ProcessDivContainer>
            Regular monitoring will take place to ensure that you are making
            progress towards your goals
          </ProcessDivContainer>
        </DivGrid>
      </DivBlueContainer>
      <PricingContainer>
        <Title id="pricing">The Pricing</Title>

        <DivBackground isDesktop={isDesktop}>
          <IconWrapper>
            <FaHandHoldingUsd />
          </IconWrapper>

          <PricingContent>
            At Active Horizons Health Group, we are committed to providing
            transparent and fair pricing for all our services. We adhere to the
            NDIS pricing arrangements and price limits to ensure that our
            clients receive the highest standard of care without unexpected
            costs. We are pleased to advise that our services are 100% funded by
            the NDIS, meaning there are no out-of-pocket costs for NDIS
            participants.
          </PricingContent>

          <IconWrapperMargin>
            <FaClock />
          </IconWrapperMargin>

          <PricingContent>
            We bill for the time directly spent with the client and for the
            indirect time spent on tasks such as note taking, creating
            materials, writing reports, and communicating with key workers, and
            others involved.
          </PricingContent>
          <IconWrapper>
            <IoDocumentTextSharp />
          </IconWrapper>

          <PricingContent>
            Please note that we only accept NDIS participants who are
            plan-managed or self-managed. We welcome adults nationwide across
            Australia and are only accepting children and adolescents residing
            in Victoria at this stage.
          </PricingContent>
        </DivBackground>
        <a
          href="https://clientportal.powerdiary.com/clientportal/activehorizonshealthgroup"
          target="_blank"
        >
          <CTAButton>START TODAY</CTAButton>
        </a>
      </PricingContainer>
    </>
  );
}
