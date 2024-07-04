import styled, { keyframes } from "styled-components";

import { useEffect, useState } from "react";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 1px black solid;
  border-radius: 10px;
  gap: 20px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }

  img {
    height: 50px;
  }

  p {
    font-size: 1.5rem;
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
  padding: 20px;
  border-radius: 10px;
  max-width: 30%;
  max-height: 80%;
  min-height: 200px;

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.2s ease;

  img {
    height: 75px;
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

export default function InfoIcon({ img, alt, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Div onClick={handleClick}>
        <img src={`/images/${img}.svg`} alt={alt} />
        <p>{title}</p>
      </Div>
      {isOpen && (
        <ModalOverlay isOpen={isOpen} onClick={closeModal}>
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
