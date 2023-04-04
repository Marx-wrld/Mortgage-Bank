import React from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from  '@mui/material/Typography';
import { Container } from  '@mui/system';

const Navbar = () => { //creating a simple Navabar to show the logo
    //AppBar is used for creating the top navigation bar in the UI
    //Container is used for creating a container element for containing other elements in a UI
    //ToolBar is used for creating elements such as buttons, text and icons and also creating layouts that adapts to different screen sizes
    //Typography helps create a consistent and visually pleasing layout with customizable font-family, size, weight and spacing
  return (
    <AppBar position="static"> 
        <Container maxWidth='xl'>
            <Toolbar>
                <Typography variant="h5">
                    Mortgage Bank
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar