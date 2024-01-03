import * as React from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomerDetailModal({
  customerDetailModal,
  open,
  handleClose,
  tableId,
}) {
  if (!customerDetailModal) return null;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter Details For Table {tableId}
          </Typography>
          <form>
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              placeholder="Enter First Name"
              fullWidth
              margin="normal"
            />
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Last Name"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
