import React from "react";
import { StyledTableRow, StyledTableCell } from "./usersTableDesktop.styled";

const UsersTableRowDesktop = (props) => {
  const { user, setUserDetails, isCurrent } = props;

  return (
    <StyledTableRow
      iscurrent={isCurrent.toString()}
      key={user.id}
      onClick={() => {
        setUserDetails({ id: user.id, name: user.name });
      }}
    >
      <StyledTableCell align="left">{user.name}</StyledTableCell>
      <StyledTableCell align="left">{user.email}</StyledTableCell>
      <StyledTableCell align="left">{user.company.name}</StyledTableCell>
    </StyledTableRow>
  );
};
export default UsersTableRowDesktop;
