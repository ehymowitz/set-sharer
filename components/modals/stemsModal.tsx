import { Modal, Backdrop, Fade, makeStyles } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { DisplayedSong } from "../../pages";
import AddStemForm from "../forms/add-stem-form/addStemForm";
import EditChartForm from "../forms/editChartForm";

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
    padding: theme.spacing(3, 4, 3),
    width: "80vw",
    height: "70vh",
    overflowY: "auto",
  },
}));

const StemsModal = () => {
  const { displayedSong } = useContext(DisplayedSong);

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
      <div className="stems-container">
        {displayedSong.stems &&
          displayedSong.stems.map((stem, i) => (
            <React.Fragment key={i}>
              <p>{stem.name}</p>
              {!!stem.link.split('src="')[1]?.split('"></iframe>')[0] && (
                <iframe
                  width="100%"
                  height="80"
                  scrolling="no"
                  allow="autoplay"
                  src={`${
                    stem.link.split('src="')[1].split('"></iframe>')[0]
                  }&download=true`}
                />
              )}
            </React.Fragment>
          ))}
      </div>

      <button className="extra-padding" type="button" onClick={handleOpen}>
        Add Stem Links (SoundCloud Only)
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
            <h2 style={{ fontSize: "40px" }} id="modal-title">
              Add Stem Links (SoundCloud Only)
            </h2>
            <h3 style={{ textTransform: "none" }}>
              Be careful with this! Make sure the preview works before
              submitting
            </h3>
            <AddStemForm setOpen={setOpen} />
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default StemsModal;
