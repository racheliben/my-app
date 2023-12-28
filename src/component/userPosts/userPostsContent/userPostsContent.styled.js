import { styled } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";

export const StyledPostTitle = styled("div")({
  borderBottom: "1px solid #d8dce1",
  marginBottom: "5px",
  paddingBottom: "5px",
  color: "#848181",
  textAlign: "center",
});

export const StyledListItemText = styled(ListItemText)({
  wordBreak: "break-all",
});
