import styled from "styled-components";

const ViewStyled = styled.article`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2rem;
  }
  article {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    p {
      font-size: 0.9rem;
    }
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  main {
    p {
      font-size: 1.4rem;
      text-align: left;
    }
  }
  a {
    padding: 20px 10px;
    font-size: 1rem;
  }
`;

export default ViewStyled;
