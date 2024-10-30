import React from 'react'
import OutletsTable from '../components/OutletsTable'

import  Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Footer from '../components/Footer.jsx'

const Outlets = () => {
  return (
  <>
    <Box>
        <Typography variant='h2'>
            Outlets
        </Typography>
    </Box>     
        <OutletsTable />
        <Footer />     
    
</>

  )
}

export default Outlets