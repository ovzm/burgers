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
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.2rem;
`;

export const Description = styled.p`
  color: #555;
  font-size: 0.9rem;
`;

export const Btn = styled.button`
  background-color: #E89129;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color:rgb(211, 132, 37);
  }
`;	
