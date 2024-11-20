import React from 'react'
import OutletsTable from '../components/OutletsTable'
import '@fontsource/roboto/300.css';

import  Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import  Container from '@mui/material/Container'



const Outlets = () => {
  return (
  <>
  
   <Container>
      <Box sx={
        {
           p: 2, border: '1px dashed grey'
        }
      }>
            <Typography variant='h2'>
                Outlets
            </Typography>
            <Typography variant = 'h6' >
              Create or update outlet profile.
            </Typography>
      </Box>       
        <OutletsTable />             
      </Container>  
            
    
</>  


  )
}

export default Outlets