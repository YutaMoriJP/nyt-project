import styled from "styled-components";

const AuthorStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  pre {
    color: ${({ theme }) => theme.link};
    font-weight: 900;
    font-size: 1rem;
  }
  @media screen and (min-width: 600px) {
    justify-content: space-between;
    flex-direction: row;
    pre {
      font-size: 0.9rem;
    }
  }
`;

export default AuthorStyled;
