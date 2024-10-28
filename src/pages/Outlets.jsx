import React from 'react'
import OutletsTable from '../components/OutletsTable'
import  Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Outlets = () => {
  return (
  <>
    <Box>
        <Typography variant='h2'>
            Outlets
        </Typography>
    </Box>     
        <OutletsTable />
    
</>

  )
}

export default Outlets