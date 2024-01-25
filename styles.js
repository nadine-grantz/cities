import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Helvetica;
  }
`;

export const StyledContainer = styled.div`
  padding: 60px;
  margin: 100px auto;
  height: 600px;
  max-width: 450px;
  border-radius: 10px;
  text-align: center;
`;

export const StyledHead = styled.h1`
  text-align: center;
`;
