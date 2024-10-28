import React, { useState, useEffect } from 'react';
import outletService from '../services/outlets';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AddButton from './AddButton';
import Box from '@mui/material/Box';

function OutletsTable() {
  const [outlets, setOutlets] = useState([]);

  // Fetch outlets on component mount
  useEffect(() => {
    outletService
      .getOutlets()
      .then((initialOutlets) => setOutlets(initialOutlets))
      .catch(error => {
        console.error('Failed to fetch outlets:', error);
      });
  }, []);

  // Function to add a new outlet to the state
  const handleAddOutlet = (newOutlet) => {
    setOutlets((prevOutlets) => [...prevOutlets, newOutlet]);
  };

  return (
    <div>
      <Box>
      <AddButton onAdd={handleAddOutlet} />
      </Box>
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Branch Code</TableCell>
                <TableCell>Outlet Code</TableCell>
                <TableCell>Outlet Name</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {outlets.map((outlet) => (
                <TableRow key={outlet.id}>
                  <TableCell component="th" scope="row">
                    {outlet.branchCode}
                  </TableCell>
                  <TableCell>{outlet.outletCode}</TableCell>
                  <TableCell>{outlet.outletName}</TableCell>
                  <TableCell>{outlet.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default OutletsTable;
