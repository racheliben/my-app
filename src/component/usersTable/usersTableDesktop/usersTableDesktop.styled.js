import {
  TableCell,
  TableRow,
  tableCellClasses,
  TableContainer,
} from "@mui/material";
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

export const StyledTableRow = styled(TableRow)(({ iscurrent }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  cursor: "pointer",
  backgroundColor: iscurrent === "true" ? "#d8dce1" : "",
}));

export const StyledTableWapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const StyledTableContainer = styled(TableContainer)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  borderLeft: "2px solid #3989d8",
  borderRight: "2px solid #3989d8",
});
