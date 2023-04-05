import React from 'react';
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from './Components/Navbar';
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";


function App() {
  //Importing our Navbar component and rendering it to our app
  return (
    <div className="App">
     <Navbar />
     <Container maxWidth="xl" sx={{marginTop:4}}> {/*Adding inline style to the container component in Material UI*/}
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={6}> 
        {/* Grid component is used to create a responsive layout that adapts to different screen sizes*/}
        {/*Grid container reps the parent elemet=nt while Grid item reps the child element while also spacing in between the grid items*/}
          <SliderSelect />
          <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
          {/*xs means that the screen will take up the entire width of the screen on extra small screens*/}
          {/*md means that the grid item will take up half the screen on medium and bigger screens */}
          <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App
