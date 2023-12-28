import { styled } from "@mui/material/styles";

export const StyledSearch = styled("div")(({ ismobile }) => ({
  width: ismobile ? "100%" : "40%",
}));

export const StyledLoader = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "300px",
});
