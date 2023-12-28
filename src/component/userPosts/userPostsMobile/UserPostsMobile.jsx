import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const UserPostsMobile = (props) => {
  const { children, setCurrentUser } = props;

  return (
    <Dialog
      onClose={() => setCurrentUser(null)}
      aria-labelledby="customized-dialog-title"
      open={true}
    >
      <IconButton
        aria-label="close"
        onClick={() => setCurrentUser(null)}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent style={{ backgroundColor: "Menu" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default UserPostsMobile;
