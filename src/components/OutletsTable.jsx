import React, { useState, useEffect } from 'react';
import outletService from '../services/outlets';
import AddButton from './AddButton';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Checkbox,
  Button,
  Box,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper, 
} from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function OutletsTable() {
  const [outlets, setOutlets] = useState([]);
  const [selected, setSelected] = useState([]); // Selected outlet
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState({});

  // Fetch outlets on component mount
  useEffect(() => {
    outletService.getOutlets()
      .then((initialOutlets) => {
        setOutlets(Array.isArray(initialOutlets) ? initialOutlets : []);
      })
      .catch(error => {
        console.error('Failed to fetch outlets:', error);
      });
  }, []);

  // Select only one checkbox at a time
  const handleSelect = (id) => {
    setSelected((prevSelected) => 
      prevSelected.includes(id) ? [] : [id]
    );
  };

  // Open edit dialog with selected outlet's data
  const handleEdit = () => {
    const outletToEdit = outlets.find(outlet => outlet.id === selected[0]);
    if (outletToEdit) {
      setEditData(outletToEdit);
      setEditOpen(true);
    } else {
      console.error('Outlet not found for editing');
    }
  };

  // Handle changes in the edit dialog
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Save edited outlet to backend and update state
  const handleEditSave = () => {
    const { id } = editData;

    outletService.updateOutlet(id, editData)
      .then((updatedOutlet) => {
        setOutlets((prevOutlets) =>
          prevOutlets.map((outlet) => 
            outlet.id === id ? updatedOutlet : outlet
          )
        );
        setEditOpen(false);
        setSelected([]); // Clear selection after editing
      })
      .catch(error => {
        console.error('Failed to update outlet:', error);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddOutlet = (newOutlet) => {
    setOutlets((prevOutlets) => [...prevOutlets, newOutlet]);
  };

  const paginatedOutlets = outlets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>  
      <Grid2 container spacing={2}>        
        <Box>
          <AddButton onAdd={handleAddOutlet} />
        </Box>      
        {/* Conditional display of Edit and Delete buttons */}           
        {selected.length > 0 && (
          <Grid2 xs={2} key="edit-delete-buttons">
            <Box display="flex" justifyContent="flex-start" gap={1} marginBottom={2}>
              <EditIcon 
                variant="contained" 
                color="primary" 
                onClick={handleEdit} 
              />          
              <DeleteIcon 
                variant="contained" 
                color="secondary" 
                onClick={() => outletService.deleteOutlet(selected[0]).then(() => setOutlets(outlets.filter(outlet => outlet.id !== selected[0])))} 
              />           
            </Box>
          </Grid2>        
        )}        
      </Grid2>         
      <Paper elevation={3} sx={{ p: 5, marginTop: 2 }}>
        <Box sx={{ p: 2 }}>
          <TableContainer>
            <Table>
              <TableHead color='primary' sx={{ padding: 16, textAlign: 'center', backgroundColor: '#7f0ea6' }}>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Branch Code</TableCell>
                  <TableCell>Outlet Code</TableCell>
                  <TableCell>Outlet Name</TableCell>
                  <TableCell>Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedOutlets.map((outlet) => (
                  <TableRow key={outlet.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.includes(outlet.id)}
                        onChange={() => handleSelect(outlet.id)}
                      />
                    </TableCell>
                    <TableCell>{outlet.branchCode}</TableCell>
                    <TableCell>{outlet.outletCode}</TableCell>
                    <TableCell>{outlet.outletName}</TableCell>
                    <TableCell>{outlet.address}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={outlets.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Paper>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Outlets</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Branch Code"
            name="branchCode"
            value={editData.branchCode || ''}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Outlet Code"
            name="outletCode"
            value={editData.outletCode || ''}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Outlet Name"
            name="outletName"
            value={editData.outletName || ''}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Address"
            name="address"
            value={editData.address || ''}
            onChange={handleEditChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default OutletsTable;
