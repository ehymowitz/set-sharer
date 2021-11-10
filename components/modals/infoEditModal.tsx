import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import EditSongForm from "../forms/editSongForm";
import { TextButton } from "../../styles/clickables";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#998c75",
    border: "none",
    boxShadow: theme.shadows[5],
    width: "80vw",
    height: "70%",
    padding: "20px",
    overflowY: "auto",
  },
}));

const InfoEditModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TextButton onClick={handleOpen}>Edit Song Info</TextButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <EditSongForm setOpen={setOpen} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default InfoEditModal;
