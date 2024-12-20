import styled, { keyframes } from "styled-components";
import { useState } from "react";

interface InfoIconProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  isWhite?: boolean;
}

const shakeAnimation = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-5deg); }
  40% { transform: rotate(5deg); }
  60% { transform: rotate(-5deg); }
  80% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

interface DivProps {
  isWhite?: boolean;
}

const Div = styled.div<DivProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${(props) => (props.isWhite ? "white" : "#4caf50")};
  padding: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  margin: 5px;
  color: ${(props) => (props.isWhite ? "black" : "black")};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s ease;
    background-color: ${(props) => (props.isWhite ? "#f0f0f0" : "#2e7d32")};
  }

  img {
    margin-bottom: 10px;
    height: 50px;
  }

  img:hover {
    animation: ${shakeAnimation} 0.5s ease;
    animation-iteration-count: 1;
  }

  p {
    font-size: 1.2rem;
    padding-top: 10px;
    text-align: center;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadeIn} 0.2s ease;
`;

const Modal = styled.div`
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  max-width: 30%;
  max-height: 80%;
  min-height: 200px;

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.2s ease;

  img {
    height: 75px;
  }

  @media screen and (max-width: 640px) {
    max-width: 60%;
    padding: 40px;
  }
`;

const ModalButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

export default function InfoIcon({
  img,
  alt,
  title,
  description,
  isWhite,
}: InfoIconProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Div onClick={handleClick} isWhite={isWhite}>
        <img src={`/images/${img}.svg`} alt={alt} />
        <p>{title}</p>
      </Div>
      {isOpen && (
        <ModalOverlay onClick={closeModal}>
          <Modal>
            <ModalButton onClick={closeModal}>X</ModalButton>
            <img src={`/images/${img}.svg`} alt={alt} />
            <h2>{title}</h2>
            <p>{description}</p>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
