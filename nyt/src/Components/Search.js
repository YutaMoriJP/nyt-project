import React, { useEffect, useRef } from "react";
import Text from "../pages/styled/Text";
import Fetch from "./Fetch";
//styled component
import SearchContainer from "../styled/SearchContainer";
import Grid from "@material-ui/core/Grid";
import PaperStyled from "../styled/PaperStyled";
import Button from "@material-ui/core/Button";

const Search = ({ children, value, query, requested }) => {
  const inputEl = useRef();
  useEffect(() => {
    inputEl.current.focus();
  });
  const renderData = data => {
    return (
      <Grid item xs={10} sm={6} md={4} lg={3}>
        <PaperStyled elevation={10}>
          <h1>{data.headline.main}</h1>
          <p>{data.abstract}</p>
          <Button>
            <a href={data.web_url}>Read More</a>
          </Button>
        </PaperStyled>
      </Grid>
    );
  };
  return (
    <>
      <SearchContainer>
        <Text
          label="search for keywords like sport, art etc."
          type="text"
          {...value}
          inputRef={inputEl}
        />
        {children}
      </SearchContainer>
      {requested && (
        <Grid container justify="center" spacing={1}>
          <Fetch
            url={`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NYT_KEY}&page=1`}
            renderData={renderData}
          />
        </Grid>
      )}
    </>
  );
};

export default Search;
