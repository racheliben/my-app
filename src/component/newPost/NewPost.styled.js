import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

export const StyledBootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const StyledForm = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "300px",
});

export const StyledFlexForm = styled("div")({
  display: "flex",
  flexDirection: "column",
});
