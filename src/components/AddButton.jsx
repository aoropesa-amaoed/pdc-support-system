import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField } from '@mui/material';



function AddButton() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted!');
        handleClose(); // Close the dialog after form submission
      };    

  return (
    <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Item
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Outlets</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the item details below.
          </DialogContentText>
          <form onSubmit={handleFormSubmit}>
            <TextField
              autoFocus
              margin="dense"
              label="Item Name"
              type="text"
              fullWidth
              variant="outlined"
              required
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
              
    </div>
  )
}

export default AddButton