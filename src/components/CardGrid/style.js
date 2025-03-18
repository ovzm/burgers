import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 20px;  
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr); /* No máximo 3 colunas */
  }
`;

