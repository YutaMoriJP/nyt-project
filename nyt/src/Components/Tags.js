import React from "react";
import TagsStyled from "../styled/TagsStyled";

const Tags = ({ onClick, keywords }) => {
  const handleClick = e => onClick(e.target.outerText);
  return (
    <TagsStyled>
      <h1>Suggested Tags</h1>
      <ul>
        {keywords.map(({ keyword, id }) => (
          <li onClick={handleClick} key={id}>
            {keyword}
          </li>
        ))}
      </ul>
    </TagsStyled>
  );
};

export default Tags;
