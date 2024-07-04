import styled from "styled-components";

const DivGreen = styled.div`
  height: 100vh;
  background-color: #90be6d;
`;

const DivWhite = styled.div`
  height: 100vh;
  background-color: white;
`;

export default function About() {
  return (
    <>
      <DivGreen>
        <div>Our Story</div>
        <p>
          Active Horizons Health Group was established in 2024 with a mission to
          revolutionise access to high-quality physiotherapy care. Recognising
          the challenges posed by long local waitlists, geographical remoteness,
          and mobility issues, we set out to bridge these gaps. Our innovative
          telehealth services are designed to minimise the time and cost of
          travel, ensuring that everyone can receive the physiotherapy care they
          need, wherever they are.
        </p>
      </DivGreen>
      <DivWhite>
        <div id="our-team">Our Team</div>
        <p>Ryan Irani</p>
        <p>Principal Physiotherapist and Director</p>
        <p>
          My name is Ryan, and I am the Director and Principal Physiotherapist
          at Active Horizons Health Group. I earned my Bachelor of Health
          Sciences and Master of Physiotherapy Practice from La Trobe
          University, Bundoora, in 2018. Since completing my studies, I have
          practiced physiotherapy across diverse environments, including private
          clinics, public and private hospitals, workplaces, community settings,
          and even through innovative telehealth services using virtual reality
          headsets. This broad exposure has allowed me to work with a wide
          variety of patients, each with their own unique health challenges and
          personal goals. I am particularly adept at managing intricate funding
          systems such as the NDIS. This expertise enables me to secure the
          necessary resources for my clients, optimising their therapeutic
          outcomes and helping them achieve their aspirations.
        </p>
        <p>
          My approach to physiotherapy involves a deep understanding of each
          individual, ensuring that every treatment plan is tailored to their
          specific needs and goals. I prioritise a holistic view of health,
          addressing not just the physical aspects but also considering the
          emotional and social factors that contribute to overall well-being.
        </p>
        <p>
          Outside of physiotherapy, I love to keep active by gymming and going
          for runs, which help me stay fit and energized. I have a passion for
          travel, always eager to explore new places, experience different
          cultures, and broaden my horizons. I believe in lifelong learning and
          continuously seek opportunities to expand my professional skills and
          knowledge. Additionally, I cherish spending quality time with friends,
          enjoying everything from relaxed get-togethers to exciting adventures.
        </p>
      </DivWhite>
      <DivGreen>
        <div>Our Values</div>
      </DivGreen>
      <DivWhite>
        <div>Our Mission</div>
      </DivWhite>
    </>
  );
}
