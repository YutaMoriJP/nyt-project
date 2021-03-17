import React, { memo } from "react";
import useFetch from "../useHooks/useFetch";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";

const Fetch = memo(({ url, renderData }) => {
  const { data, loading, error } = useFetch(url);
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
  return data.response.docs.map(renderData);
});

export default Fetch;
