import React from "react";
import { DivWapperUserPosts } from "./userPostsDesktop.styled";

const UserPostsDesktop = (props) => {
  const { children } = props;

  return <DivWapperUserPosts>{children}</DivWapperUserPosts>;
};
export default UserPostsDesktop;
