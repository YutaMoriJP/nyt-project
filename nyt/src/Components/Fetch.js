import React, { memo } from "react";
import useFetch from "../useHooks/useFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";

const Fetch = memo(({ url, renderData }) => {
  const { data, loading, error } = useFetch(url);
  console.log(`error data looks like`, data);
  if (loading) return <CircularProgress />;
  if (error)
    return (
      <>
        <Alert severity="error">
          {Object.keys(error).length ? (
            JSON.stringify(error)
          ) : (
            <Typography variant="h6">
              There was an error... Please try a different keyword or refresh
              the page
            </Typography>
          )}
        </Alert>
      </>
    );
  if (!data?.response?.docs.length) {
    return (
      <h1>
        No matching article was found. Please try searching for something else.
      </h1>
    );
  }
  return data.response.docs.map(renderData);
});

export default Fetch;
