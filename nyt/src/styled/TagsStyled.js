import styled from "styled-components";

const TagsStyled = styled.article`
  display: flex;
  justify-content: center;
  margin: 5px;
  flex-direction: column;
  ul {
    padding: 0;
    flex: 1 1 auto;
    margin: auto;
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 2px 8px;
    li {
      font-weight: 900;
      padding: 8px;
      color: black;
      background-color: white;
      border-radius: 18px;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export default TagsStyled;
