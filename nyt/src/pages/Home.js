import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Search from "../Components/Search";
import useInput from "../useHooks/useInput";

const Home = () => {
  const [value, reset] = useInput("");
  const [query, setQuery] = useState(null);
  const [requested, setRequested] = useState(false);
  const handleClick = () => {
    setRequested(true);
    setQuery(value.value);
    reset();
  };
  return (
    <>
      <h1>Hello, Homepage</h1>
      <Search value={value} query={query} reset={reset} requested={requested}>
        <Button color="primary" variant="contained" onClick={handleClick}>
          Search Article
        </Button>
      </Search>
    </>
  );
};

export default Home;
