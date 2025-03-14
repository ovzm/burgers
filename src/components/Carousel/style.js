import styled from 'styled-components';

export const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5rem;
  width: 100%;
  height: 100vh;
  background-color: black; 
  color: #fff; 

`;

export const SlideText = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  text-align: left;
  z-index: 1;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    color: #fff;
    white-space: pre-line;
  }

  button {
    width: 150px;
    background-color: #ff6200; 
    color: #fff;
    border: none;
    margin: 1rem 0;
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e65c00; 
    }
  }
`;

export const SlideImg = styled.div`
  display: flex;
  width: 550px;  
`;

export const Img = styled.img`
  z-index: 0;
  width: 550px;
`;