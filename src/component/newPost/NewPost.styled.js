import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const DivForm = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "300px",
});

export const DivFlexForm = styled("div")({
  display: "flex",
  flexDirection: "column",
});
