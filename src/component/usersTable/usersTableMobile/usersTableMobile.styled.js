import { styled } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import ListItemText from "@mui/material/ListItemText";

export const StyledTableCellPosts = styled(TableCell)({
  fontSize: "20px",
});

export const StyleTableCell = styled(TableCell)({
  paddingBottom: 0,
  paddingTop: 0,
});

export const StyledTitleListItemText = styled(ListItemText)({
  "&:first-child span": {
    fontWeight: "bold",
  },
  fontWeight: "bold",
});

export const StyledListItemText = styled(ListItemText)({
  "&:first-child span": {
    textAlign: "right",
  },
  textAlign: "right",
});
