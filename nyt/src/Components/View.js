import React from "react";
import ViewStyled from "../styled/ViewStyled";
import Divider from "@material-ui/core/Divider";

const View = ({ title, author, date, wordCount, body, credit }) => {
  return (
    <ViewStyled>
      <h1>{title}</h1>
      <article>
        <p>{author}</p>
        <p>Published - {date}</p>
      </article>
      <section>
        <p>Word Count: {wordCount}</p>
      </section>
      <Divider />
      <main>
        <p>{body}</p>
      </main>
      <a href={credit} target="_blank" rel="noreferrer">
        Read the full story at NYT
      </a>
    </ViewStyled>
  );
};

export default View;
