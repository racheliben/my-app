import React, { useState } from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { StyledPostTitle, StyledListItemText } from "./userPostsContent.styled";
import NewPost from "../../newPost/NewPost";

const CREATE_POST = "Create Post";

const UserPostsContent = (props) => {
  const { userDetails, dataPostsCurrent } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CreatePost = (post) => {
    dataPostsCurrent.unshift(post);
    setOpen(false);
  };

  return (
    <div>
      {dataPostsCurrent.length > 0 && (
        <React.Fragment>
          <div>
            <CssBaseline />
            <Paper style={{ maxWidth: "100%" }} square sx={{ pb: "50px" }}>
              <Typography
                style={{ display: "flex", flexDirection: "column" }}
                variant="h5"
                gutterBottom
                component="div"
                sx={{ p: 2, pb: 0 }}
              >
                <StyledPostTitle> {userDetails.name} </StyledPostTitle>
                <Button
                  onClick={() => {
                    handleClickOpen();
                  }}
                >
                  <AddIcon /> {CREATE_POST}
                </Button>
              </Typography>
              <List sx={{ mb: 2 }}>
                {dataPostsCurrent?.map(({ id, title, body }) => (
                  <React.Fragment key={id}>
                    <ListItem button>
                      <StyledListItemText primary={title} secondary={body} />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </div>
        </React.Fragment>
      )}
      {open && (
        <NewPost
          addPost={CreatePost}
          open={open}
          userId={userDetails.id}
          handleClose={handleClose}
          createPost={CREATE_POST}
        />
      )}
    </div>
  );
};
export default UserPostsContent;
