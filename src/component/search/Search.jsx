import React from "react";
import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledColorIcon } from "./Search.styled";

const SEARCH="Search name or email";

const Search = (props) => {
  const { updateWordSearch, wordSearch } = props;

  return (
    <Paper
      style={{ marginBottom: "20px", width: "100%", padding: "0" }}
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        onChange={(e) => updateWordSearch(e.target.value)}
        value={wordSearch}
        sx={{ ml: 1, flex: 1 }}
        placeholder={SEARCH}
        inputProps={{ "aria-label": "search google maps" }}
      />
      <StyledColorIcon
        type="button"
        aria-label="search"
        onClick={(e) => updateWordSearch(e.target.value)}
      >
        <SearchIcon />
      </StyledColorIcon>
    </Paper>
  );
};
export default Search;
