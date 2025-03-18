import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.2rem;
`;

export const Description = styled.p`
  color: #555;
  font-size: 0.9rem;
`;
