import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { setCustomerDetailsForVaccantTable } from "../State/OrderSlice";

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

const CustomerDetailsModal = ({
  customerDetailModal,
  handleClose,
  tableId,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const dispatch = useDispatch();

  const sendCustomerName = () =>{
    const customerFullName = firstName.concat(' ', lastName)
    console.log(customerFullName)
    console.log(email)
    console.log(phoneNo)

    dispatch(setCustomerDetailsForVaccantTable({customerFullName, tableId, email, phoneNo}))
    handleClose()
  }


  return (
    <div>
      <Modal
        open={customerDetailModal}
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
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Last Name"
              fullWidth
              margin="normal"
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              id="phone"
              label="Phone No"
              variant="outlined"
              placeholder="Enter Phone No."
              fullWidth
              margin="normal"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              placeholder="Enter Email"
              fullWidth
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={sendCustomerName}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomerDetailsModal;