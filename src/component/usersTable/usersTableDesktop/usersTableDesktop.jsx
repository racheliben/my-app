import React from "react";
import { Table, Paper, TableRow, TableHead, TableBody } from "@mui/material";
import {
  StyledTableCell,
  StyledTableWapper,
  StyledTableContainer,
} from "./usersTableDesktop.styled";
import UsersTableRowDesktop from "./userTableRowDesktop";

const UsersTableDesktop = (props) => {
  const {
    titleName,
    titleEmail,
    titleCompanyName,
    dataUsers,
    setUserDetails,
    currentUser,
  } = props;

  const isCurrentUser = (userId) => userId === currentUser?.id;

  return (
    <StyledTableWapper>
      <StyledTableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">{titleName}</StyledTableCell>
              <StyledTableCell align="left">{titleEmail}</StyledTableCell>
              <StyledTableCell align="left">{titleCompanyName}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataUsers?.map((user) => (
              <UsersTableRowDesktop
                key={user.id}
                user={user}
                setUserDetails={setUserDetails}
                isCurrent={isCurrentUser(user.id)}
              />
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledTableWapper>
  );
};
export default UsersTableDesktop;
