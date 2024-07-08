import styled from "styled-components";
import InfoIcon from "../components/InfoIcon";
import { FaAngleDown } from "react-icons/fa";

const DivIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
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
  /* min-height: 100vh; */
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
  width: 30%;
`;

const ProcessDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: white;
  text-align: center;
  /* height: 100px; */
`;

const ArrowDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export default function Physiotherapy() {
  return (
    <>
      <DivWhiteContainer>
        <Title>The Benefits</Title>
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
            {/* 
            <InfoIcon
              img="healthcare"
              alt="healthcare"
              title="Personalised Care"
              description={
                "Receive tailored treatment plans and exercises specific to your needs, just as you would in a face-to-face setting."
              }
            /> */}

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
            {/* 
            <InfoIcon
              img="soccer"
              alt="soccer"
              title="Participate in activities of daily living"
              description={
                "Enhance your ability to engage in daily activities, whether it's playing, attending school, or working, by improving your physical capabilities."
              }
            />

            <InfoIcon
              img="gardening"
              alt="gardening"
              title="Increase Independence in Daily Routines"
              description={
                "Gain the skills and strength needed to perform daily routines independently, enhancing your quality of life."
              }
            /> */}
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
            scheduled in.
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
      {/* <DivGreen>
        <p></p>
      </DivGreen>
      <DivWhite>
        <p>NDIS FCA ? - https://umbo.com.au/online-functional-assessment/</p>
      </DivWhite> */}
    </>
  );
}
