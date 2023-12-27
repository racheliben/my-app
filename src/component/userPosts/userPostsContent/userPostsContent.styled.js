import { styled } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText"

export const PostTitleDiv = styled("div")({
  borderBottom: "1px solid #d8dce1",
  marginBottom: "5px",
  paddingBottom: "5px",
  color: "#848181",
  textAlign: "center",
});

export const DivWapperHypnosis = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "300px",
});

export const StyledListItemText=styled(ListItemText)({
  wordBreak: "break-all"
})