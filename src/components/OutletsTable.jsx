import React from 'react'
import { useState, useEffect } from 'react';
import outletService from '../services/outlets';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


function OutletsTable() {

    const [outlet, setOutlet] = useState([]);

    useEffect(() => {
        outletService
        .getOutlets()
        .then((initialOutlet) => setOutlet(initialOutlet));
        
    }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Branch Code</TableCell>
            <TableCell>Branch Name</TableCell>
            <TableCell>Outlet Name</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {outlet.map((outlet) => (
            <TableRow key={outlet.id}>
              <TableCell component= "th" scope="row">
                {outlet.branchCode}               
              </TableCell>
              <TableCell component= "th" scope="row">
                {outlet.outletCode}               
              </TableCell>
              <TableCell component= "th" scope="row">
                {outlet.outletName}               
              </TableCell>
              <TableCell component= "th" scope="row">
                {outlet.address}               
              </TableCell>
            </TableRow>
          )
         )}
        </TableBody>
      </Table>

    </TableContainer>
  )
  //   <table>
  //       <thead>
  //         <tr>
  //           <th>Branch Code</th>
  //           <th>Outlet Code</th>
  //           <th>Outlet Name</th>
  //           <th>Address</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {outlet.map((outlet) => (
  //           <tr key={outlet.id}>
  //             <td>{outlet.branchCode}</td>
  //             <td>{outlet.outletCode}</td>
  //             <td>{outlet.outletName}</td>
  //             <td>{outlet.address}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  // )
}

export default OutletsTable