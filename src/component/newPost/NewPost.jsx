import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  StyledBootstrapDialog,
  StyledForm,
  StyledFlexForm,
} from "./NewPost.styled";
import { useFormik } from "formik";
import { validationSchemaNewPost } from "./NewPostValidetion";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";

const SUBMIT_POST = "Save";

const NewPost = (props) => {
  const { userId, handleClose, open, addPost, createPost } = props;

  const onSavePost = (values) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 20,
        title: values.title,
        body: values.body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => addPost(json));
  };

  const formikSave = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validationSchema: validationSchemaNewPost,
    onSubmit: (values) => {
      onSavePost(values);
    },
  });

  return (
    <StyledForm>
      <React.Fragment>
        <StyledBootstrapDialog
          onClose={() => handleClose()}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            {createPost}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={() => handleClose()}
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
            <form onSubmit={formikSave.handleSubmit}>
              <StyledFlexForm>
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
                      formikSave.touched.body && Boolean(formikSave.errors.body)
                    }
                    id="body"
                    aria-describedby="body-helper-text"
                  />
                  <FormHelperText id="body-helper-text">
                    {formikSave.touched.body && formikSave.errors.body}
                  </FormHelperText>
                </FormControl>
                <Button type="submit">{SUBMIT_POST}</Button>
              </StyledFlexForm>
            </form>
          </DialogContent>
        </StyledBootstrapDialog>
      </React.Fragment>
    </StyledForm>
  );
};
export default NewPost;
