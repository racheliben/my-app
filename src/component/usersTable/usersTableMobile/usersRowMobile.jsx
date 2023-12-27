import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {
  StyleTableCell,
  StyledTitleListItemText,
  StyledListItemText,
} from "./usersTableMobile.styled";

const POSTS = "Posts";

const UsersRowMobile = (props) => {
  const { user, titleEmail, titleCompanyName, setUserDetails } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={user.id}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {user.name}
        </TableCell>
        <TableCell>
          <Button
            onClick={() => {
              setUserDetails({ id: user.id, name: user.name });
            }}
          >
            {POSTS}
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <StyleTableCell colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <List>
                <ListItem disablePadding>
                  <ListItem>
                    <StyledTitleListItemText primary={`${titleEmail}:`} />
                    <StyledListItemText primary={user.email} />
                  </ListItem>
                </ListItem>
                <ListItem disablePadding>
                  <ListItem>
                    <StyledTitleListItemText primary={`${titleCompanyName}:`} />
                    <StyledListItemText primary={user.company.name} />
                  </ListItem>
                </ListItem>
              </List>
            </Box>
          </Collapse>
        </StyleTableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default UsersRowMobile;
