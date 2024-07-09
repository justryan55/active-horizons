import styled, { keyframes } from "styled-components";

import { useState } from "react";

interface PolicyViewerProps {
  title: string;
  description: string;
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p:hover {
    cursor: pointer;
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
  max-width: 70%;
  max-height: 70%;

  margin-top: 5%;

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: ${fadeIn} 0.2s ease;

  z-index: 1000;
`;

const ModalButton = styled.button`
  position: relative;
  left: 50%;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: black;
`;

const DescriptionText = styled.pre`
  max-width: 100%;
  font-size: 14px;
  line-height: 1.6;
  color: black;
  white-space: pre-line;
  min-height: 50%;

  h3 {
    font-weight: bold;
    margin-top: 1em;
  }
`;

export default function PolicyViewer({
  title,
  description,
}: PolicyViewerProps) {
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
        <p>{title}</p>
      </Div>
      {isOpen && (
        <ModalOverlay onClick={closeModal}>
          <Modal>
            <ModalButton onClick={closeModal}>X</ModalButton>

            <h2>{title}</h2>
            <DescriptionText
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
