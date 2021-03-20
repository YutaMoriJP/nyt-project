import styled from "styled-components";

const SearchContainer = styled.article`
  margin: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  button {
    width: 200px;
    align-self: center;
    padding: 15px;
  }
  div {
    flex: 1 1 auto;
  }
  @media screen and (min-width: 700px) {
    margin: 10px auto;
    width: 80%;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    margin: 10px auto;
    width: 60%;
    flex-direction: row;
    justify-content: center;
  }
`;

export default SearchContainer;
