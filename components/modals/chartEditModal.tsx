import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import EditChartForm from '../forms/editChartForm'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#998c75',
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 3),
    width: '80vw',
    height: '70vh'
  },
}));

const ChartEditModal = () => {
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
      <button
        className="text-button"
        type="button"
        onClick={handleOpen}
      >
        Upload or Edit Chart
      </button>
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
            <h2 style = {{fontSize: "40px" }}id="modal-title">Edit or Upload a Chart</h2>
            <h3 style = {{textTransform: "none"}}>Be careful with this! Make sure the preview works before submitting</h3>
            <EditChartForm setOpen = {setOpen}/>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ChartEditModal
