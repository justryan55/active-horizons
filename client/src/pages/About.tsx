import styled from "styled-components";

const DivWhite = styled.div`
  height: 100vh;
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
    max-width: 60%;
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 0 auto 20px;
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

  .story-description {
    margin-bottom: 15rem;
  }
`;

const DivBlue = styled.div`
  height: 100vh;
  background-color: #81bbc5;
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
    max-width: 60%;
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15rem;
  }
`;

const DivBlueTeam = styled.div`
  height: 100%;
  background-color: #81bbc5;
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

  img {
    height: 300px;
    border-radius: 50%;
    margin-bottom: 20px;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.05);
  }

  p {
    max-width: 60%;
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  p.name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  p.title {
    font-size: 1.3rem;
    font-style: italic;
  }
`;

export default function About() {
  return (
    <>
      <DivWhite>
        <h1 id="story">Our Story</h1>
        <p className="story-description">
          Active Horizons Health Group was established in 2024 with a mission to
          revolutionise access to high-quality physiotherapy care. Recognising
          the challenges posed by long local waitlists, geographical remoteness,
          and mobility issues, we set out to bridge these gaps. Our innovative
          telehealth services are designed to minimise the time and cost of
          travel, ensuring that everyone can receive the physiotherapy care they
          need, wherever they are.
        </p>
      </DivWhite>
      <DivBlue>
        <h1 id="mission">Our Mission</h1>
        <p>
          Our mission at Active Horizons Health Group is to deliver exceptional
          physiotherapy services that are both accessible and personalised. We
          are committed to breaking down barriers such as distance, lengthy wait
          times, and mobility challenges through the use of telehealth
          solutions.
        </p>
      </DivBlue>
      <DivWhite>
        <h1 id="values">Our Values</h1>
        <p>
          At Active Horizons Health Group, our core values guide everything we
          do:
        </p>
        <ul>
          <li>
            <strong>Accessibility</strong>: We believe that everyone deserves
            access to high-quality physiotherapy care, regardless of their
            location or circumstances. We leverage innovative technologies to
            reach and serve our clients wherever they are.
          </li>
          <li>
            <strong>Compassion</strong>: We approach each client with empathy
            and understanding, recognising their unique health challenges and
            personal goals. Our compassionate care is tailored to meet
            individual needs.
          </li>
          <li>
            <strong>Excellence</strong>: We strive for excellence in all aspects
            of our service. From our clinical practices to our customer service,
            we are committed to providing the highest standard of care.
          </li>

          <li>
            <strong>Holistic Care</strong>: We take a comprehensive approach to
            health, considering the physical, emotional, and social factors that
            contribute to well-being. Our treatments are designed to address the
            whole person.
          </li>
          <li>
            <strong>Integrity</strong>: We conduct our business with honesty and
            transparency. Our clients can trust us to act ethically and in their
            best interests at all times.
          </li>
          <li>
            <strong>Lifelong Learning</strong>: We are committed to continuous
            professional development. Our team regularly updates their skills
            and knowledge to provide the most effective and current treatments
            available.
          </li>
          <li>
            <strong>Empowerment</strong>: We empower our clients to take an
            active role in their health and recovery. By providing education and
            support, we help them achieve their therapeutic goals and improve
            their quality of life.
          </li>
        </ul>
      </DivWhite>
      <DivBlueTeam>
        <h1 id="team">Our Team</h1>
        <img src="/images/profile.jpeg" alt="profile" /> <br />
        <p className="name">Ryan Irani</p>
        <p className="title">Principal Physiotherapist and Director</p> <br />
        <p>
          My name is Ryan, and I am the Director and Principal Physiotherapist
          at Active Horizons Health Group. I earned my Bachelor of Health
          Sciences and Master of Physiotherapy Practice from La Trobe
          University, Bundoora, in 2018.
        </p>
        <br />
        <p>
          Since completing my studies, I have practiced physiotherapy across
          diverse environments, including private clinics, public and private
          hospitals, workplaces, community settings, and even through innovative
          telehealth services using virtual reality headsets. This broad
          exposure has allowed me to work with a wide variety of patients, each
          with their own unique health challenges and personal goals. I am
          particularly adept at managing intricate funding systems such as the
          NDIS. This expertise enables me to secure the necessary resources for
          my clients, optimising their therapeutic outcomes and helping them
          achieve their aspirations.
        </p>
        <br />
        <p>
          My approach to physiotherapy involves a deep understanding of each
          individual, ensuring that every treatment plan is tailored to their
          specific needs and goals. I prioritise a holistic view of health,
          addressing not just the physical aspects but also considering the
          emotional and social factors that contribute to overall well-being.
        </p>
        <br />
        <p>
          Outside of physiotherapy, I love to keep active by gymming and going
          for runs. I have a passion for travel, always eager to explore new
          places, experience different cultures, and broaden my horizons. I
          believe in lifelong learning and continuously seek opportunities to
          expand my professional skills and knowledge. Additionally, I cherish
          spending quality time with friends, enjoying everything from relaxed
          get-togethers to exciting adventures.
        </p>
      </DivBlueTeam>
    </>
  );
}
