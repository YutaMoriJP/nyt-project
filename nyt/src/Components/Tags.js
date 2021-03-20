import React from "react";
import keywords from "../data/keywords/nytkeywords";
import TagsStyled from "../styled/TagsStyled";

const Tags = ({ onClick }) => {
  const handleClick = e => onClick(e.target.outerText);
  return (
    <TagsStyled>
      <h1>Suggested Tags</h1>
      <ul>
        {keywords.map((keyword, index) => (
          <li onClick={handleClick} key={index}>
            {keyword}
          </li>
        ))}
      </ul>
    </TagsStyled>
  );
};

export default Tags;
