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
    font-family: system-ui;
  }
`;

// export const image = styled.img`
//   width: 90%;
//   height: 200px;
//   margin: 5%;
// `;
