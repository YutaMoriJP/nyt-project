import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Modal from "./Modal";
import Grid from "@material-ui/core/Grid";

const DisplayData = ({ title, abstract, credit, modal }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <h1>{title}</h1>
      <p>{abstract}</p>
      <Grid container justify="space-between">
        <Grid item>
          <Button>
            <a target="_blank" rel="noreferrer" href={credit}>
              Read at NYT
            </a>
          </Button>
        </Grid>
        <Grid>
          <IconButton onClick={handleOpen}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Modal open={open} handleClose={handleClose} {...modal} />
    </>
  );
};

export default DisplayData;
