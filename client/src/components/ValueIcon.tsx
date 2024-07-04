import styled, { keyframes } from "styled-components";

export default function ValueIcon({ img, alt, title, description }) {
  return (
    <>
      <img src={`/images/${img}.svg`} alt={alt} />
      <p>{title}</p>
      <p>{description}</p>
    </>
  );
}
