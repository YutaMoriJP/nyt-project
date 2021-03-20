import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Search from "../Components/Search";
import Fetch from "../Components/Fetch";
import useInput from "../useHooks/useInput";
import Grid from "@material-ui/core/Grid";
import renderData from "../util/renderData";
import Tags from "../Components/Tags";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({ button: { fontWeight: 900 } });

const Home = () => {
  const [value, reset] = useInput("");
  const [query, setQuery] = useState(null);
  const [requested, setRequested] = useState(false);
  const handleClick = () => {
    setRequested(true);
    setQuery(value.value);
    reset();
  };
  const handleTagClick = query => {
    setRequested(true);
    setQuery(query);
    reset();
  };
  const classes = useStyle();
  return (
    <>
      <h1>NYT API Project</h1>
      <Search value={value} reset={reset}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClick}
          className={classes.button}
        >
          Search Article
        </Button>
      </Search>
      <Tags onClick={handleTagClick} />
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

export default Home;
