import styled from "styled-components";
import InfoIcon from "../components/InfoIcon";

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

const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  /* min-height: 100vh; */
`;

const DivWhite = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const DivBlue = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #81bbc5;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export default function Physiotherapy() {
  return (
    <>
      <DivWhite>
        <h1 id="benefits">The Benefits of Online Physiotherapy?</h1>
        <DivFlex>
          <DivIcons>
            <InfoIcon
              img="time"
              alt="time"
              title="Save Time on Travel"
              description={
                "Skip the commute and enjoy the convenience of accessing high-quality physiotherapy from the comfort of your home."
              }
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
      </DivWhite>

      <DivBlue>
        <h1 id="process">The Process</h1>
        <p>Book an appointment and complete the intake forms</p>
        <p>
          Intake session: Goals and frequency of appointments discussed and
          service agreement completed
        </p>
        <p>Initial assessment</p>
        <p>Therapy</p>
        <p>Regular monitoring to ensure making progress towards goals</p>
      </DivBlue>
      {/* <DivGreen>
        <p></p>
      </DivGreen>
      <DivWhite>
        <p>NDIS FCA ? - https://umbo.com.au/online-functional-assessment/</p>
      </DivWhite> */}
    </>
  );
}
