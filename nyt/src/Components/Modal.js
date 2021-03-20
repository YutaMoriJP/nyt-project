import React from "react";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import AuthorStyled from "../styled/AuthorStyled";
import Divider from "@material-ui/core/Divider";

const Header = styled.header`
  display: flex;
`;

const Close = styled(IconButton)`
  margin-left: auto;
`;

const StyledLink = styled.a`
  padding: 20px 10px;
  font-size: 1rem;
`;

const useStyle = makeStyles({ paragraph: { padding: 10 } });

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
  const classes = useStyle();
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
        <Typography variant="h4">{headline}</Typography>
        <AuthorStyled>
          <pre>Written by {author || "unknown"}</pre>
          <pre>Published at {date}</pre>
        </AuthorStyled>
        <pre>total word count: {wordCount}</pre> <Divider />
        <Typography className={classes.paragraph} variant="subtitle1">
          {paragraph}
        </Typography>{" "}
        <Divider />
        <StyledLink href={credit} target="_blank" rel="noreferrer">
          Read the full story at NYT
        </StyledLink>
      </Dialog>
    </>
  );
}
