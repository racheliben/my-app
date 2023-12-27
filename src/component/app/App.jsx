import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  StyleUsersTable,
  StyledWapperUsersTable,
} from "./App.styled";
import UsersTable from "../usersTable";
import UserPosts from "../userPosts";

const useMobile = () => window.innerWidth <= 800;

const App = () => {
  const CheckIsMobile = () => useMobile();

  const [currentUser, setCurrentUser] = useState(null);
  const [isMobile, setIsMobile] = useState(CheckIsMobile());

  const handleWindowSizeChange = () => {
    setIsMobile(CheckIsMobile());
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleSetCurrentUser = (userId) => setCurrentUser(userId);

  return (
    <StyledContainer>
      <StyledWapperUsersTable>
        <StyleUsersTable>
          <UsersTable
            currentUser={currentUser}
            isMobile={isMobile}
            setUserDetails={handleSetCurrentUser}
          />
        </StyleUsersTable>
      </StyledWapperUsersTable>
      {currentUser && (
        <UserPosts
          isMobile={isMobile}
          currentUser={currentUser}
          setCurrentUser={handleSetCurrentUser}
        />
      )}
    </StyledContainer>
  );
};
export default App;
