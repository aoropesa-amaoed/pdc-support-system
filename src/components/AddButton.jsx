import React, { useState } from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Divider } from '@mui/material';
import outletService from '../services/outlets';

function AddButton({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [newBranchCode, setNewBranchCode] = useState("");
  const [newOutletCode, setNewOutletCode] = useState("");
  const [newOutletName, setNewOutletName] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addOutlets = (e) => {
    e.preventDefault();

    const newOutletObject = {
      branchCode: newBranchCode,
      outletCode: newOutletCode,
      outletName: newOutletName,
      address: newAddress,
    };

    outletService.addOutlets(newOutletObject)
      .then((returnedOutlet) => {
        // Notify the parent component about the new outlet
        onAdd(returnedOutlet);

        // Clear the form fields after successful submission
        setNewBranchCode("");
        setNewOutletCode("");
        setNewOutletName("");
        setNewAddress("");

        handleClose(); // Close the dialog after form submission
      })
      .catch((error) => {
        console.error("Failed to add outlet:", error);
      });
  };

  // Handle input changes
  const handleNewBranchCode = (event) => setNewBranchCode(event.target.value);
  const handleNewOutletCode = (event) => setNewOutletCode(event.target.value);
  const handleNewOutletName = (event) => setNewOutletName(event.target.value);
  const handleNewAddress = (event) => setNewAddress(event.target.value);

  return (
    <div>
      <AddCircleRoundedIcon variant="contained" color="primary" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Outlets</DialogTitle>
        <DialogContent>
          <Divider />
          <form onSubmit={addOutlets}>
            <TextField
              autoFocus
              margin="dense"
              label="Branch Code"
              type="text"
              value={newBranchCode}
              onChange={handleNewBranchCode}
              fullWidth
              variant="standard"
              required
            />
            <TextField
              margin="dense"
              label="Outlet Code"
              type="text"
              value={newOutletCode}
              onChange={handleNewOutletCode}
              fullWidth
              variant="standard"
              required
            />
            <TextField
              margin="dense"
              label="Outlet Name"
              type="text"
              value={newOutletName}
              onChange={handleNewOutletName}
              fullWidth
              variant="standard"
              required
            />
            <TextField
              margin="dense"
              label="Address"
              type="text"
              value={newAddress}
              onChange={handleNewAddress}
              fullWidth
              variant="standard"
              required
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddButton;
