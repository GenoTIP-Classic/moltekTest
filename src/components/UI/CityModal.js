import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

// import { ReactComponent as ImageTest } from "./istanbul.svg";
import Fade from "@mui/material/Fade";
import "../../map.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -54%)",
  width: "100%",
  textAlign: "center",
  paddingTop: "10%",
  height: 700,
  bgcolor: "rgba(255,255,255,0.6)",
};

export default function CityModal({
  open,
  handleClose,
  imageClicked,
  MySvgComponent,
}) {
  console.log("MySvgComponent", MySvgComponent);
  return (
    <Modal
      open={open}
      //   onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        bgcolor: "transparent",
        width: "78.2%",
        height: "70vh",
      }}
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
    >
      <Fade in={open} style={{ transitionDelay: "300ms" }}>
        <Box sx={style} onClick={handleClose}>
          <MySvgComponent onClick={imageClicked} />
        </Box>
      </Fade>
    </Modal>
  );
}
