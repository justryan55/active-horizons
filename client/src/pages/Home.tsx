import styled from "styled-components";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const Header = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
`;

const Text = styled.h3`
  font-size: 1.5rem;
  color: #555;
  text-align: center;
`;

export default function Home() {
  return (
    <DivContainer>
      <Header>Active Horizons Health Group</Header>
      <Text>A Step Towards Independence: Any Time, Anywhere.</Text>
      <p>Learn More</p>
      <p>Start Your Journey</p>
    </DivContainer>
  );
}
