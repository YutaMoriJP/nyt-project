import React from "react";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
//Render Component
import View from "./View";

const Header = styled.header`
  display: flex;
`;

const Close = styled(IconButton)`
  margin-left: auto;
`;

export default function Modal({
  open,
  handleClose,
  headline,
  paragraph,
  author,
  wordCount,
  credit,
  date,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
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
        <View
          title={headline}
          author={author}
          wordCount={wordCount}
          date={date}
          body={paragraph}
          credit={credit}
        />
      </Dialog>
    </>
  );
}
