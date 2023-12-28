import React from "react";
import { StyledWapperUserPosts } from "./userPostsDesktop.styled";

const UserPostsDesktop = (props) => {
  const { children } = props;

  return <StyledWapperUserPosts>{children}</StyledWapperUserPosts>;
};
export default UserPostsDesktop;
