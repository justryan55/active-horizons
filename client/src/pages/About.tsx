import styled from "styled-components";
import ValueIcon from "../components/ValueIcon";

const DivStory = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #efefef;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    max-width: 80%;
    font-size: 1.2rem;
    line-height: 1.6;
  }

  ul {
    list-style-type: none;
    padding: 0;
    max-width: 60%;
    margin: 0 auto;
    text-align: left;
  }

  li {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  strong {
    font-weight: bold;
  }
`;

const DivValues = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #efefef;
  padding: 250px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1000;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    z-index: 1000;
  }

  p {
    max-width: 90%;
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 0 auto 20px;
    z-index: 1000;
  }
`;

const DivMission = styled.div`
  height: 100%;
  min-height: 100vh;
  /* background: url("/images/heartbeat.svg") center/cover no-repeat,
    rgba(129, 187, 197, 1);
  background-size: 125%; */
  background-color: rgb(129, 187, 197, 1);
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    z-index: 1500;
  }
  p {
    max-width: 90%;
    font-size: 1.4rem;
    line-height: 1.6;
    /* margin-bottom: 15rem; */
    z-index: 1000;
  }
`;

const DivBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 40px 0px;

  width: 50%;
  z-index: 1000;
  border-radius: 50px;
`;

const DivBackgroundMargin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 20px 0px;

  width: 50%;
  z-index: 1000;
  border-radius: 50px;

  margin-bottom: 15rem;
`;

const DivTeam = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: rgb(129, 187, 197);
  padding: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: black;
`;
const ProfileImage = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Name = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

const Role = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  color: black;
  margin-bottom: 20px;
`;

const Text = styled.p`
  max-width: 80%;
  font-size: 1.2rem;
  line-height: 1.6;
  color: black;
  margin-bottom: 20px;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 33.33%), 1fr));
  gap: 20px;
  width: 80%;
  grid-auto-flow: row;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 115%;
  opacity: 100%;
`;

export default function About() {
  return (
    <>
      <DivStory>
        <DivBackgroundMargin>
          <h1 id="story">Our Story</h1>
          <p className="story-description">
            Active Horizons Health Group was established in 2024 with a mission
            to revolutionise access to high-quality physiotherapy care.
            Recognising the challenges posed by long local waitlists,
            geographical remoteness, and mobility issues, we set out to bridge
            these gaps. Our innovative telehealth services are designed to
            minimise the time and cost of travel, ensuring that everyone can
            receive the physiotherapy care they need, wherever they are.
          </p>
        </DivBackgroundMargin>
        {/* <BackgroundImage src="images/vital.svg" /> */}
      </DivStory>
      <DivMission>
        <DivBackground>
          <h1 id="mission">Our Mission</h1>
          <p>
            Our mission at Active Horizons Health Group is to deliver
            exceptional physiotherapy services that are both accessible and
            personalised. We are committed to breaking down barriers such as
            distance, lengthy wait times, and mobility challenges through the
            use of telehealth solutions.
          </p>
        </DivBackground>
        {/* <BackgroundImage src="images/vital.svg" /> */}
      </DivMission>

      <DivValues>
        <h1 id="values">Our Values</h1>
        <p>
          At Active Horizons Health Group, our core values guide everything we
          do:
        </p>
        <GridDiv>
          <ValueIcon
            img="accessibility"
            alt="Accessibility"
            title="Accessibility"
            description={
              "We believe that everyone deserves access to high-quality physiotherapy care, regardless of their location or circumstances. We leverage innovative technologies to reach and serve our clients wherever they are."
            }
          />
          <ValueIcon
            img="world_care"
            alt="Compassion"
            title="Compassion"
            description={
              "We approach each client with empathy and understanding, recognising their unique health challenges and personal goals. Our compassionate care is tailored to meet individual needs."
            }
          />
          <ValueIcon
            img="award"
            alt="Award"
            title="Excellence"
            description={
              "We strive for excellence in all aspects of our service. From our clinical practices to our customer service, we are committed to providing the highest standard of care."
            }
          />
          <ValueIcon
            img="holistic"
            alt="Hand"
            title="Holistic Care"
            description={
              "We take a comprehensive approach to health, considering the physical, emotional, and social factors that contribute to well-being. Our treatments are designed to address the whole person."
            }
          />
          <ValueIcon
            img="justice"
            alt="Integrity"
            title="Integrity"
            description={
              "We conduct our business with honesty and transparency. Our clients can trust us to act ethically and in their best interests at all times."
            }
          />

          <ValueIcon
            img="empower"
            alt="Barbell"
            title="Empowerment"
            description={
              "We empower our clients to take an active role in their health and recovery. By providing education and support, we help them achieve their therapeutic goals and improve their quality of life."
            }
          />
        </GridDiv>
      </DivValues>
      <DivTeam id="team">
        {" "}
        <DivBackground>
          <Title>Our Team</Title>
          <ProfileImage src="/images/profile.jpeg" alt="profile" />
          <Name>Ryan Irani</Name>
          <Role>Principal Physiotherapist and Director</Role> <br />
          <Text>
            My name is Ryan, and I am the Director and Principal Physiotherapist
            at Active Horizons Health Group. I earned my Bachelor of Health
            Sciences and Master of Physiotherapy Practice from La Trobe
            University, Bundoora, in 2018.
          </Text>
          <br />
          <Text>
            Since completing my studies, I have practiced physiotherapy across
            diverse environments, including private clinics, public and private
            hospitals, workplaces, community settings, and even through
            innovative telehealth services using virtual reality headsets. This
            broad exposure has allowed me to work with a wide variety of
            patients, each with their own unique health challenges and personal
            goals. I am particularly adept at managing intricate funding systems
            such as the NDIS. This expertise enables me to secure the necessary
            resources for my clients, optimising their therapeutic outcomes and
            helping them achieve their aspirations.
          </Text>
          <br />
          <Text>
            My approach to physiotherapy involves a deep understanding of each
            individual, ensuring that every treatment plan is tailored to their
            specific needs and goals. I prioritise a holistic view of health,
            addressing not just the physical aspects but also considering the
            emotional and social factors that contribute to overall well-being.
          </Text>
          <br />
          <Text>
            Outside of physiotherapy, I love to keep active by gymming and going
            for runs. I have a passion for travel, always eager to explore new
            places, experience different cultures, and broaden my horizons. I
            believe in lifelong learning and continuously seek opportunities to
            expand my professional skills and knowledge. Additionally, I cherish
            spending quality time with friends, enjoying everything from relaxed
            get-togethers to exciting adventures.
          </Text>
        </DivBackground>
      </DivTeam>
    </>
  );
}

// <ValueIcon
// img="Integrity"
// alt="Integrity"
// title="Lifelong Learning"
// description={
//   "We are committed to continuous professional development. Our team regularly updates their skills and knowledge to provide the most effective and current treatments available."
// }
// />