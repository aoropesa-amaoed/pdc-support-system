import {useEffect, useState } from 'react'
import './App.css'
import outletService from "./services/outlets";




function App() {
  const [outlet, setOutlet] = useState([]);

  useEffect(() => {
      outletService
      .getOutlets()
      .then((initialOutlet) => setOutlet(initialOutlet));
      
  }, []);
    
  return (
  
      <div>
        <h1>Outlet</h1>
        <button>Add</button>
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
      
      </div>    
  )
}

export default App
