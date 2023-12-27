import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  BootstrapDialog,
  DivForm,
  DivFlexForm,
} from "./NewPost.styled";
import { useEffect } from "react";
import { useFormik } from "formik";
import { validationSchemaNewPost } from "./NewPostValidetion";
import { useState } from "react";
import {
  Input,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { TextField } from "@mui/material";

const NewPost = (props) => {
  useEffect(() => {
    console.log("NewPost");
    console.log(props);
  }, []);

  const [isNewPost, setIsNewPost] = useState(false);

  const onSavePost = (values) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.userId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 20,
        title: values.title,
        body: values.body,
        userId: props.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => props.addPost(json));
  };

  const formikSave = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validationSchema: validationSchemaNewPost,
    onSubmit: (values) => {
      setIsNewPost(true);
      onSavePost(values);
    },
  });

  return (
    <DivForm>
      <React.Fragment>
        <BootstrapDialog
          onClose={() => props.handleClose()}
          aria-labelledby="customized-dialog-title"
          open={props.open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Add Post
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => props.handleClose()}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <>
              <form onSubmit={formikSave.handleSubmit}>
                <DivFlexForm>
                  <FormControl>
                    <Input
                      name="title"
                      value={formikSave.values.title}
                      onChange={formikSave.handleChange}
                      error={
                        formikSave.touched.title &&
                        Boolean(formikSave.errors.title)
                      }
                      placeholder="title"
                      id="title"
                      aria-describedby="title-helper-text"
                    />
                    <FormHelperText id="title-helper-text">
                      {formikSave.touched.title && formikSave.errors.title}
                    </FormHelperText>
                  </FormControl>
                  <FormControl style={{ marginTop: "20px" }}>
                    <TextField
                      name="body"
                      multiline
                      rows={4}
                      aria-label="maximum height"
                      placeholder="body"
                      value={formikSave.values.body}
                      onChange={formikSave.handleChange}
                      error={
                        formikSave.touched.body &&
                        Boolean(formikSave.errors.body)
                      }
                      id="body"
                      aria-describedby="body-helper-text"
                    />

                    <FormHelperText id="body-helper-text">
                      {formikSave.touched.body && formikSave.errors.body}
                    </FormHelperText>
                  </FormControl>
                  <Button type="submit">Save</Button>
                </DivFlexForm>
              </form>
            </>
          </DialogContent>
        </BootstrapDialog>
      </React.Fragment>
    </DivForm>
  );
};
export default NewPost;
