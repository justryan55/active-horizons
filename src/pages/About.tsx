import styled from "styled-components";
import ValueIcon from "../components/ValueIcon";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

interface ContainerProps {
  isDesktop: boolean;
}

const DivStory = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const DivMission = styled.div`
  height: 100%;
  min-height: 100vh;

  background-color: rgb(129, 187, 197, 1);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
    z-index: 1000;
  }
`;

const DivStoryContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: ${(props) => (props.isDesktop ? "50%" : "100%")};
  z-index: 1000;
  min-height: 100vh;
  height: 100%;
`;

const DivValues = styled.div<ContainerProps>`
  height: 100%;
  min-height: 100vh;
  background-color: #efefef;

  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  align-items: flex-start;
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

const DivValuesContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;

  min-width: ${(props) => (props.isDesktop ? "50%" : "100%")};
  z-index: 1000;
  min-height: 100vh;
  height: 100%;
`;

const DivMissionContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isDesktop ? "white" : "rgb(129, 187, 197, 1)"};

  width: ${(props) => (props.isDesktop ? "50%" : "100%")};
  z-index: 1000;
  min-height: 100vh;
  height: 100%;
`;

const DivTeamRight = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 40px 0px;

  width: ${(props) => (props.isDesktop ? "50%" : "100%")};
  z-index: 1000;

  height: 100%;
  min-height: 100vh;
`;

const DivTeam = styled.div<ContainerProps>`
  height: 100%;
  min-height: 100vh;
  background-color: rgb(129, 187, 197);

  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const DivTeamContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(129, 187, 197);

  width: 50%;
  z-index: 1000;
  min-height: 100vh;
  height: 100%;
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

const CarouselFlexContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: ${(props) => (props.isDesktop ? "50%" : "100%")};
`;

const CarouselContainer = styled.div`
  width: 100%;
`;

export default function About() {
  const [isDesktop, setIsDesktop] = useState(true);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

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
      <DivStory>
        <DivStoryContainer isDesktop={isDesktop}>
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
        </DivStoryContainer>
      </DivStory>
      <DivMission>
        <DivMissionContainer isDesktop={isDesktop}>
          <h1 id="mission">Our Mission</h1>
          <p>
            Our mission at Active Horizons Health Group is to deliver
            exceptional physiotherapy services that are both accessible and
            personalised. We are committed to breaking down barriers such as
            distance, lengthy wait times, and mobility challenges through the
            use of telehealth solutions.
          </p>
        </DivMissionContainer>
      </DivMission>

      <DivValues isDesktop={isDesktop}>
        <DivValuesContainer isDesktop={isDesktop}>
          <h1 id="values">Our Values</h1>
          <p>
            At Active Horizons Health Group, our core values guide everything we
            do.
          </p>
        </DivValuesContainer>
        <CarouselFlexContainer isDesktop={isDesktop}>
          <CarouselContainer>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              deviceType={"tablet"}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              arrows={false}
            >
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
            </Carousel>
          </CarouselContainer>
        </CarouselFlexContainer>
      </DivValues>
      <DivTeam id="team" isDesktop={isDesktop}>
        <DivTeamContainer isDesktop={isDesktop}>
          <Title>Our Team</Title>
          <ProfileImage src="/images/profile.jpeg" alt="profile" />
          <Name>Ryan Irani</Name>
          <Role>Principal Physiotherapist and Director</Role> <br />
        </DivTeamContainer>
        <DivTeamRight isDesktop={isDesktop}>
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
        </DivTeamRight>
      </DivTeam>
    </>
  );
}
