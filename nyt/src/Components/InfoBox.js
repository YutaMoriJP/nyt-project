import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import HelpIcon from "@material-ui/icons/Help";
import Title from "../styled/Title";

const Header = styled.header`
  display: flex;
`;

const Close = styled(IconButton)`
  margin-left: auto;
`;

const useStyle = makeStyles({
  padding: { padding: 10 },
  center: { textAlign: "center" },
});

export default function InfoBox() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const classes = useStyle();
  return (
    <>
      <Title>
        <h1>NYT API Project</h1>
        <HelpIcon onClick={handleOpen} />
      </Title>
      {open && (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Header>
            <Close onClick={handleClose}>
              <CloseIcon />
            </Close>
          </Header>
          <h1>How to search for articles</h1>
          <p className={classes.padding}>
            Type a keyword into the search box and click
            <strong> 'Search Article'</strong>, or just click on the suggested
            tags, like 'news' and the search request will be made and a maximum
            of 10 results will be shown.
          </p>
          <h1>How to read articles</h1>
          <p className={classes.padding}>
            If you want to read the full story, then click on{" "}
            <strong>'READ AT NYT'</strong> and you will be redirected to the
            page at the New Yorks Times that covers the article in full. Or you
            can read the snippet by clicking on the '+' icon. It will open a
            modal with the condensed version of the article. If you are on
            mobile click on the 'x' icon, and the modal will be closed. On
            desktop, clicking on 'x' or anywhere outside the modal area will
            close it.
          </p>
          <p className={classes.center}>Happy reading :)</p>
        </Dialog>
      )}
    </>
  );
}
