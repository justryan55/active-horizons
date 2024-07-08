import styled from "styled-components";
import { Link } from "react-router-dom";

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
  z-index: 100;
  text-align: center;
`;

const Text = styled.h3`
  font-size: 1.5rem;
  color: #555;
  text-align: center;
  z-index: 100;
`;

const ButtonGreen = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: #4caf50;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
  margin: 10px;

  &:hover {
    background-color: #2e7d32;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonBlue = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background-color: rgb(129, 187, 197);
  background-color: ;
  color: #fff;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
  margin: 10px;

  &:hover {
    background-color: rgb(103, 150, 158);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Home() {
  return (
    <DivContainer>
      <Header>Active Horizons Health Group</Header>
      <Text>A Step Towards Independence: Any Time, Anywhere.</Text>
      <ButtonDiv>
        <Link to="/about">
          <ButtonBlue>Learn More</ButtonBlue>
        </Link>
        <ButtonGreen>Start Today</ButtonGreen>
      </ButtonDiv>
    </DivContainer>
  );
}
