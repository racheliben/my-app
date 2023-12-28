import React, { useEffect, useState } from "react";
import UserPostsDesktop from "../userPosts/userPostsDesktop/userPostsDesktop";
import UserPostsMobile from "../userPosts/userPostsMobile/UserPostsMobile";
import UserPostsContent from "./userPostsContent/userPostsContent";
import Backdrop from "@mui/material/Backdrop";
import { Hypnosis } from "react-cssfx-loading";

const UserPosts = (props) => {
  const { isMobile, setCurrentUser, currentUser } = props;

  const [dataPostsCurrent, setDataPostsCurrent] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(true);

  useEffect(() => {
    setIsPostsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUser.id}`)
      .then((response) => response.json())
      .then((json) => {
        setDataPostsCurrent(json);
        setIsPostsLoading(false);
      })
      .catch(() => {
        alert(
          "There is currently a malfunction in the data elaboration, try again later"
        );
        setIsPostsLoading(false);
      });
  }, [currentUser]);

  const postsContent = (
    <UserPostsContent
      dataPostsCurrent={dataPostsCurrent}
      userDetails={currentUser}
    />
  );

  return (
    (isPostsLoading && <Loader />) ||
    (isMobile && (
      <UserPostsMobile
        children={postsContent}
        setCurrentUser={setCurrentUser}
      ></UserPostsMobile>
    )) || <UserPostsDesktop children={postsContent}></UserPostsDesktop>
  );
};
export default UserPosts;

const Loader = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <Hypnosis />
    </Backdrop>
  );
};
