import React, { useState } from 'react'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField, Divider } from '@mui/material';

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
      <AddCircleRoundedIcon variant="contained" color="primary" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Outlets</DialogTitle>
        <DialogContent>
          <Divider />
          <form onSubmit={handleFormSubmit}>
            <TextField
              autoFocus
              margin="dense"
              label="Branch Code "
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              label="Outlet Code "
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              label="Outlet Name "
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              label="Address "
              type="text"
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
  )
}

export default AddButton