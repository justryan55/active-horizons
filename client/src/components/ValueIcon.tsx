import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  z-index: 1200;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Icon = styled.img`
  height: 60px;
  width: 60px;
  object-fit: contain;
  margin-bottom: 10px;
  z-index: 1000;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: #333333;
  margin: 10px 0;
  z-index: 1000;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666666;
  text-align: center;
  z-index: 1000;
`;

export default function ValueIcon({ img, alt, title, description }) {
  return (
    <Container>
      <Icon src={`/images/${img}.svg`} alt={alt} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
