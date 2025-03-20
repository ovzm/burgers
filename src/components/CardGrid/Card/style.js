import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
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
  border-radius: 50%;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.1rem;
`;

export const Description = styled.p`
  color:rgb(119, 119, 119);
  font-size: 0.9rem;
  line-height: normal;
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
    background-color:rgb(197, 124, 34);
  }
`;	
