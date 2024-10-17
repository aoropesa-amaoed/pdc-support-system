import React from 'react'
import { useState, useEffect } from 'react';
import outletService from '../services/outlets';


function OutletsTable() {

    const [outlet, setOutlet] = useState([]);

    useEffect(() => {
        outletService
        .getOutlets()
        .then((initialOutlet) => setOutlet(initialOutlet));
        
    }, []);

  return (
    <table>
        <thead>
          <tr>
            <th>Branch Code</th>
            <th>Outlet Code</th>
            <th>Outlet Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {outlet.map((outlet) => (
            <tr key={outlet.id}>
              <td>{outlet.branchCode}</td>
              <td>{outlet.outletCode}</td>
              <td>{outlet.outletName}</td>
              <td>{outlet.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default OutletsTable