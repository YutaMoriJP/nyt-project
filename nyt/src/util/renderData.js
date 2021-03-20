import React from "react";
//material ui stuff
import Grid from "@material-ui/core/Grid";
import PaperStyled from "../styled/PaperStyled";
//util function
import getExceprt from "./getExcerpt";
import DisplayData from "../Components/DisplayData";

const renderData = data => {
  return (
    <Grid item xs={10} sm={6} md={4} lg={3} key={data?._id}>
      <PaperStyled elevation={10}>
        <DisplayData
          title={getExceprt(data?.headline.main, 8)}
          abstract={getExceprt(data?.abstract, 25)}
          credit={data?.web_url}
          modal={{
            headline: data?.headline.main,
            paragraph: data?.lead_paragraph,
            author: data?.byline?.original,
            wordCount: data?.word_count,
            credit: data?.web_url,
            date: data?.pub_date,
          }}
        />
      </PaperStyled>
    </Grid>
  );
};

export default renderData;
