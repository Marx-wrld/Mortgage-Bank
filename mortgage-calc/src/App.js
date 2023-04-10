import React, {useState} from 'react';
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from './Components/Navbar';
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";


function App() {
  const [data, setData] = useState({ //Declaring a state to store the value of the sliders using the useState hook
    //Passing these values as the default values for our slider component
    homeValue: 3000, 
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5
  })
  //Importing our Navbar component and rendering it to our app
  return (
    <div className="App">
     <Navbar />
    
     <Container maxWidth="xl" sx={{marginTop:4}}> {/*Adding inline style to the container component in Material UI*/}
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={6}> 
        {/* Grid component is used to create a responsive layout that adapts to different screen sizes*/}
        {/*Grid container reps the parent elemet=nt while Grid item reps the child element while also spacing in between the grid items*/}
          <SliderSelect 
            data={data} 
            setData={setData} 
            //Passing the data and setData state as props to the SliderSelect component
          />

          <TenureSelect 
            data={data} 
            setData={setData} 
            //Passing the data and setData state as props to the TenureSelect component
          />

          </Grid>

          <Grid item xs={12} md={6}>
          {/*xs means that the screen will take up the entire width of the screen on extra small screens*/}
          {/*md means that the grid item will take up half the screen on medium and bigger screens */}
          
          <Result data={data}
          //Passing the data state as prop to the result
          />

          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default App
