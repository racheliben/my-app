import React, { useState, useEffect } from "react";
import {
  List,
  ListItemText,
  CssBaseline,
  Typography,
  ListItem,
  Paper,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  PostTitleDiv,
  StyledListItemText,
  DivWapperHypnosis,
} from "./userPostsContent.styled";
import NewPost from "../../newPost/NewPost";
import { Hypnosis } from "react-cssfx-loading";

const createPost = "Create Post";

const UserPostsContent = (props) => {
  const { userDetails, dataPostsCurrent } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [dataPostrsCurrent, setDataPostrsCurrent] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userDetails.id}`)
  //     .then((response) => response.json())
  //     .then((json) => setDataPostrsCurrent(json))
  //     .catch((err) => alert("Sorry...", err.message))
  //     // .finally(handlsetDataPostersIsLoading(false));
  // }, [userDetails]);

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
                <PostTitleDiv> {userDetails.name} </PostTitleDiv>
                <Button
                  onClick={() => {
                    handleClickOpen();
                  }}
                >
                  <AddIcon /> {createPost}
                </Button>
              </Typography>
              <List
                sx={{ mb: 2 }}
                // style={{ overflow: "auto", height: "100vh" }}
              >
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
        />
      )}
    </div>
  );
};
export default UserPostsContent;
