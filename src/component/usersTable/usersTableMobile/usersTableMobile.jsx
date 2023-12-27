import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UsersRowMobile from "./usersRowMobile";
import { StyledTableCellPosts } from "./usersTableMobile.styled";

const TITLE_POSTS = "Posts";

const UsersTableMobile = (props) => {
  const { titleName, titleEmail, titleCompanyName, dataUsers, setUserDetails } =
    props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <StyledTableCellPosts>{titleName}</StyledTableCellPosts>
            <StyledTableCellPosts>{TITLE_POSTS}</StyledTableCellPosts>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataUsers.map((user) => (
            <UsersRowMobile
              setUserDetails={setUserDetails}
              user={user}
              titleEmail={titleEmail}
              titleCompanyName={titleCompanyName}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTableMobile;
