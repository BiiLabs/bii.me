import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  h1 {
    font-size: 2.5em;
    line-height: normal;
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 1.5em;
      letter-spacing: inherit;
    }
    p {
      font-weight: 300;
      font-size: 20px;
    }
  }
`;

export const colors = {
  primary: 'rgb(28, 42, 77)',
};
