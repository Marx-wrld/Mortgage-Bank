import React from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system'; 

const SliderComponent = ({ //Listing all the props that is needed to pass to our reusable slider component
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    steps
}) => {
  return (
    //my(marginY) reps [marginTop & margginBottom]
    //stack component  from MUI will allow us stack the components vertically
    <Stack my={1.4}> 
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h5'>
        {unit} {amount}    
        </Typography>   
    {/*This code displays the label, unit and amount*/}
    
        <Slider //This code displays the slider and we then pass the props to the slider component
            min={min}
            max={max}
            defaultValue={defaultValue}
            aria-label='Default'
            valueLabelDisplay='auto'
            onChange={onChange}
            value={value}
            marks
            step={steps}
        />
    </Stack>
  )
}

export default SliderComponent
