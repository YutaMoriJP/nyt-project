import React, { useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
//styled component
import SearchContainer from "../styled/SearchContainer";

const Search = ({ children, value }) => {
  const inputEl = useRef();
  useEffect(() => {
    inputEl.current.focus();
  });

  return (
    <>
      <SearchContainer>
        <TextField
          label="search for keywords like sport, art etc."
          type="text"
          {...value}
          inputRef={inputEl}
        />
        {children}
      </SearchContainer>
    </>
  );
};

export default Search;
