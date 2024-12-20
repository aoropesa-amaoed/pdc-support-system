import React from 'react';
import '../styles/main.css'; 

const PageTitle = (
    { title = 'Outlets', 
      description = 'Create or update outlet profile.' 
    }) => {
  return (
    <div className="page-title" role="banner">
      <h1>{title}</h1>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PageTitle;







// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography'

// const PageTitle = () => {
//   return (
//     <Box sx={
//         {
//             marginTop:2,
//             paddingBottom: 4,
            
//         }
//     }>
//             <Typography variant='h2' color='rgba(0,0,0,0,0.87)'>
//                 Outlets
//             </Typography>
//             <Typography variant = 'h6' color='grey' >
//               Create or update outlet profile.
//             </Typography>
//       </Box> 
//   )
// }

// export default PageTitle