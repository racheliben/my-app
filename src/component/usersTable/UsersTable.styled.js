import { TableCell, TableRow, tableCellClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme, clicked }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StyledTableCellNew = styled(StyledTableCell)({
  backgroundColor: "#9127b0eb",
});

export const StyledSearch = styled("div")(({ ismobile }) => ({
  width: ismobile ? "100%" : "40%",
}));

export const StyledLoader = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "300px",
});
