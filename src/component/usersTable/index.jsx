import React, { useEffect, useState } from "react";
import { StyledSearch, StyledLoader } from "./UsersTable.styled";
import Search from "../search/Search";
import { Hypnosis } from "react-cssfx-loading";
import UsersTableDesktop from "./usersTableDesktop/usersTableDesktop";
import UsersTableMobile from "./usersTableMobile/usersTableMobile";

const TITLE_NAME = "Name";
const TITLE_EMAIL = "Email";
const TITLE_COMPANY_NAME = "Company Name";

const UsersTable = (props) => {
  const { currentUser, setUserDetails, isMobile } = props;

  const [wordSearch, setWordSearch] = useState("");
  const [dataUsers, setDataUsers] = useState([]);
  const [usersFromServer, setUsersFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((list) => {
        setDataUsers(list);
        setUsersFromServer(list);
      })
      .catch(() =>
        alert(
          "There is currently a malfunction in the data elaboration, try again later"
        )
      )
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (wordSearch !== "") {
      const tempUsers = usersFromServer.filter(
        (user) =>
          user.name.toLowerCase().includes(wordSearch.toLowerCase()) ||
          user.email.toLowerCase().includes(wordSearch.toLowerCase())
      );
      setDataUsers(tempUsers);
    } else {
      setDataUsers(usersFromServer);
    }
  }, [wordSearch, usersFromServer]);

  const updateWordSearch = (Word) => setWordSearch(Word);

  return (
    (isLoading && <Loader />) || (
      <>
        <StyledSearch ismobile={isMobile}>
          <Search updateWordSearch={updateWordSearch} wordSearch={wordSearch} />
        </StyledSearch>
        {(isMobile && (
          <UsersTableMobile
            updateWordSearch={updateWordSearch}
            wordSearch={wordSearch}
            titleName={TITLE_NAME}
            titleEmail={TITLE_EMAIL}
            titleCompanyName={TITLE_COMPANY_NAME}
            dataUsers={dataUsers}
            setUserDetails={setUserDetails}
          />
        )) || (
          <UsersTableDesktop
            updateWordSearch={updateWordSearch}
            wordSearch={wordSearch}
            titleName={TITLE_NAME}
            titleEmail={TITLE_EMAIL}
            titleCompanyName={TITLE_COMPANY_NAME}
            dataUsers={dataUsers}
            setUserDetails={setUserDetails}
            currentUser={currentUser}
          />
        )}
      </>
    )
  );
};
export default UsersTable;

const Loader = () => {
  return (
    <StyledLoader>
      <Hypnosis />
    </StyledLoader>
  );
};
